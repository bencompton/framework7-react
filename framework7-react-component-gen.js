import {stringify} from 'json-fn';
import {readFileSync, writeFileSync} from 'fs';
import * as path from 'path';
import * as fs from 'fs';
import * as to from 'to-case';
import * as babel from 'babel-core';

const ensureDirectoryExistence = (filePath) => {
    var dirname = path.dirname(filePath);
    
    if (fs.existsSync(dirname)) {
        return true;
    }

    ensureDirectoryExistence(dirname);
    
    fs.mkdirSync(dirname);
};

const generateImportString = (componentToImport, path) => {
    return `import {${componentToImport}} from '${path}';`
};

const getPropType = (propValue) => {
    let propType = propValue.type || propValue;

    if (Array.isArray(propType)) {
        return propType.reduce((typesArray, nextType) => {
            return [
                ...typesArray,
                getPropType(nextType)
            ]
        }, []).join(' | ');
    } else {
        switch(propType) {
            case Boolean:
                return 'boolean';
            case Number:
                return 'number';
            case String:
                return 'string';
            case Object:
                return 'Object';
            default:
                return 'string';
        }
    }
};

const generateTypeScriptInterfaceFromProps = (props, componentName, eventList, slotList, mixin) => {
    let interfaceProps = [];

    if (props) {
        interfaceProps = Object.keys(props).reduce((interfaceProps, nextPropName) => {
            const propType = getPropType(props[nextPropName]);

            return [
                ...interfaceProps,
                `   ${to.camel(nextPropName)}?: ${propType};`
            ];
        }, []);
    }

    eventList.forEach(eventName => {
        interfaceProps.push(`   ${to.camel('on-' + eventName.split(':').join('-'))}?: (eventArgs?: any) => void;`);
    });

    slotList.forEach(slotName => {
        interfaceProps.push(`   ${to.camel(slotName + '-slot')}?: React.ReactElement<any>;`)
    });

    if (!props || !props.id) interfaceProps.push('   id?: string;');
    if (!props || !props.className)  interfaceProps.push('   className?: string;');
    if (!props || !props.style)  interfaceProps.push('   style?: {[cssAttribute: string]: string};');

    if (interfaceProps.length) {
        if (mixin) {
            return `\nexport interface I${componentName}Props extends I${mixin}Props {\n${interfaceProps.join('\n')}\n}`;      
        } else {
            return `\nexport interface I${componentName}Props {\n${interfaceProps.join('\n')}\n}`;      
        }
    } else {
        return null;
    }
};

const getEventList = (vueComponentString) => {
    const regex = new RegExp(/\$emit\(["']([A-Za-z0-9-:]+)["'],/, 'g');
    let match;
    const events = [];

    while (match = regex.exec(vueComponentString)) {
        if (events.indexOf(match[1]) === -1) events.push(match[1]);        
    }

    return events;
};

const getComponentToTagMappings = () => {
    const framework7Vue = readFileSync('./node_modules/framework7-vue/src/framework7-vue.js', 'utf8');
    const framework7VueString = stringify(framework7Vue);
    const regex = new RegExp(/["'](f7-[A-Za-z0-9-]+)["']\s*\:\s*([A-Za-z0-9]+),/, 'g');
    let match;
    const tagToComponentMap = {};
    const componentToTagMap = {};
    
    while (match = regex.exec(framework7VueString)) {
        const tagName = match[1];
        const componentName = match[2];

        tagToComponentMap[tagName] = componentName;
        componentToTagMap[componentName] = tagName;
    }

    return {
        componentToTagMap,
        tagToComponentMap
    };
};

const getInstantiatedComponentList = (vueComponentString, tagToComponentMap) => {
    return Object.keys(tagToComponentMap).reduce((componentList, nextTag) => {        
        const regex = new RegExp(`["']${nextTag}["']`, 'g');

        if (regex.test(vueComponentString) && componentList.indexOf(tagToComponentMap[nextTag]) === -1) {
            return componentList.concat([tagToComponentMap[nextTag]]);
        } else {
            return componentList;
        }
    }, []); 
};

const getSlotList = (vueComponentString) => {
    const regexDict = new RegExp(/\$slots\[\s*["']([A-Za-z0-9-:]+)["']\s*]/, 'g');
    const regexDot = new RegExp(/\$slots\.([A-Za-z0-9-:]+)/, 'g');
    const regexT = new RegExp(/_vm\._t\(["']([A-Za-z0-9-:]+)["']\)/, 'g');

    let match;
    const slots = [];

    [regexDict, regexDot, regexT].forEach(regex => {
        while (match = regex.exec(vueComponentString)) {
            if (slots.indexOf(match[1]) === -1 && match[1] !== 'default') slots.push(match[1]);
        }
    });

    return slots;
};

const getComponentMixinMap = () => {
    let framework7Vue = readFileSync('./framework7-vue/framework7-vue.js', 'utf8');
    const regex = new RegExp(/mixins:\s*\[([A-Za-z0-9]+)/, 'g');    
    let match;

    framework7Vue = framework7Vue.replace(regex, (mixinStatement, mixinName) => {
        return mixinStatement.replace(mixinName, `'${mixinName}'`);
    });

    let transpiledFramework7Vue = babel.transform(framework7Vue, {
        presets: ['es2015']
    }).code;    
    
    const framework7VueExports = new Function('exports', transpiledFramework7Vue + '; return exports;')({});

    return Object.keys(framework7VueExports).reduce((componentMixinMap, nextExportName) => {
        const exportedComponent = framework7VueExports[nextExportName];

        if (exportedComponent.mixins) {
            return {
                ...componentMixinMap,
                [nextExportName]: exportedComponent.mixins[0]
            };
        } else {
            return componentMixinMap;
        }
    }, {});    
};

const generateReactifyF7VueCall = (
    vueComponent,
    vueComponentName,
    vueComponentString, 
    reactComponentName,     
    componentToTagMappings,
    componentMixinMap,
    overrides
) => {
    const reactifyF7VueArgs = [];
    let eventList;
    let instantiatedComponentList;
    let slotList;
    
    const imports = [
        `import * as React from 'react'`,
        generateImportString('reactifyF7Vue', '../src/utils/reactifyF7Vue'),
        generateImportString(vueComponentName, '../framework7-vue/framework7-vue')
    ];    
    
    reactifyF7VueArgs.push(`component: ${vueComponentName}`);
    reactifyF7VueArgs.push(`tag: '${componentToTagMappings.componentToTagMap[reactComponentName]}'`);

    const componentOverrides = overrides && overrides[reactComponentName];
    
    if (componentOverrides && componentOverrides.events) { 
        eventList = componentOverrides.events;
    } else {
        eventList = getEventList(vueComponentString);        
    }

    if (eventList.length) reactifyF7VueArgs.push(`events: [\n\t\t'${eventList.join('\',\n\t\t\'')}'\n\t]`);

    if (componentOverrides && componentOverrides.instantiatedComponents) { 
        instantiatedComponentList = componentOverrides.instantiatedComponents.instantiatedComponents;
    } else {
        instantiatedComponentList = getInstantiatedComponentList(vueComponentString, componentToTagMappings.tagToComponentMap);        
    }

    if (instantiatedComponentList.length) reactifyF7VueArgs.push(`instantiatedComponents: [\n\t\t${instantiatedComponentList.join(',\n\t\t')}\n\t]`);

    if (componentOverrides && componentOverrides.slots) {   
        slotList = componentOverrides.slots;
    } else {
        slotList = getSlotList(vueComponentString);        
    }

    if (slotList.length) reactifyF7VueArgs.push(`slots: [\n\t\t'${slotList.join('\',\n\t\t\'')}'\n\t]`);
    
    imports.push(...instantiatedComponentList.map(componentName => {
        return generateImportString(componentName, `./${componentName}`)
    }));  
    
    const mixin = componentMixinMap[vueComponentName];
    
    if (mixin) {        
        imports.push(generateImportString(`Vue${mixin}`, '../framework7-vue/framework7-vue'));
        imports.push(generateImportString(`I${mixin}Props`, `./${mixin}`));
        reactifyF7VueArgs.push(`mixin: Vue${mixin}`);
    }

    const typeScriptInterface = generateTypeScriptInterfaceFromProps(
        vueComponent.props,
        reactComponentName,
        eventList,
        slotList,
        mixin
    );

    const propInterfaceName = (typeScriptInterface) ? `I${reactComponentName}Props` : 'void';

    const reactifyVueCall = `\nexport const ${reactComponentName} = reactifyF7Vue<${propInterfaceName}>({\n\t${reactifyF7VueArgs.join(',\n\t')}\n});`;

    const componentCode = [
        imports.join('\n'),
        typeScriptInterface
    ];

    if (vueComponentName.indexOf('Mixin') === -1) componentCode.push(reactifyVueCall);

    return componentCode.join('\n');
};

const generateIndexTsFile = (vueComponents, excludes) => {
    const importedFiles = [];
    const exportedModules = [];

    importedFiles.push(generateImportString('Framework7App', '../src/components/Framework7App'));
    exportedModules.push('Framework7App');
    importedFiles.push(generateImportString('Framework7', '../src/Framework7'));
    exportedModules.push('Framework7');

    Object.keys(vueComponents).forEach(vueComponentName => {
        if (vueComponentName.indexOf('Mixin') === -1) {
            const reactComponentName = vueComponentName.replace('Vue', '');  

            if (excludes && excludes.indexOf(reactComponentName) !== -1) {
                importedFiles.push(generateImportString(reactComponentName, `../src/components/${reactComponentName}`));
            } else {
                importedFiles.push(generateImportString(reactComponentName, `./${reactComponentName}`));
            }
            
            exportedModules.push(reactComponentName);
        }
    });

    const indexTsFile = `${importedFiles.join('\n')}\n\nexport {\n\t${exportedModules.join(',\n\t')}\n}`;
    const outPath = './framework7-react/index.ts';

    writeFileSync(outPath, indexTsFile);
}

export const generateReactComponents = (args) => {
    const componentFile = [];

    const componentMixinMap = getComponentMixinMap();  

    const vueComponents = require('./framework7-vue/framework7-vue');   

    Object.keys(vueComponents).forEach(vueComponentName => {
        const reactComponentName = vueComponentName.replace('Vue', '');        
        const vueComponent = vueComponents[vueComponentName]
        const vueComponentString = stringify(vueComponent).split(`\\"`).join('"');        
        const componentToTagMappings = getComponentToTagMappings();

        if (!args || !args.exclude || args.exclude.indexOf(reactComponentName) === -1) {
            const reactifyF7VueCall = generateReactifyF7VueCall(
                vueComponent,
                vueComponentName,
                vueComponentString, 
                reactComponentName,             
                componentToTagMappings,
                componentMixinMap,
                args && args.overrides
            );            

            const outPath = `./framework7-react/${reactComponentName}.ts`;

            ensureDirectoryExistence(outPath);
            writeFileSync(outPath, reactifyF7VueCall);
        }
    });

    generateIndexTsFile(vueComponents, args && args.exclude);
};
