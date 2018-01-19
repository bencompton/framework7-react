import {stringify} from 'json-fn';
import {readFileSync, writeFileSync} from 'fs';
import * as path from 'path';
import * as fs from 'fs';
import * as to from 'to-case';
import * as babel from 'babel-core';

import * as VueComponents from './framework7-vue.esm';

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
            case Function:
                return 'Function';
            case Array:
                return 'any[]';
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
    const regex = new RegExp(/\$emit\(["']([A-Za-z0-9-:]+)["'],?/, 'g');
    let match;
    const events = [];

    while (match = regex.exec(vueComponentString)) {
        if (events.indexOf(match[1]) === -1) events.push(match[1]);        
    }

    return events;
};

const getInstantiatedComponentList = (vueComponentString, vueComponent, tagToComponentMap) => {
    return Object.keys(tagToComponentMap).reduce((componentList, nextTag) => {        
        const regex = new RegExp(`["']${nextTag}["']`, 'g');
        const componentName = tagToComponentMap[nextTag];

        if (nextTag !== vueComponent.name && regex.test(vueComponentString) && componentList.indexOf(componentName === -1)) {
            return componentList.concat([componentName]);
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

const getComponentToTagMappings = vueComponents => {
    const tagToComponentMap = {};
    const componentToTagMap = {};

    Object.keys(vueComponents).forEach(vueComponentName => {
        if (vueComponentName.indexOf('f7') !== -1) {
            const vueComponent = vueComponents[vueComponentName];
            const tagName = vueComponent.name;
            const componentName = vueComponentName.replace('f7', '');

            tagToComponentMap[tagName] = componentName;
            componentToTagMap[componentName] = tagName;
        }
    });

    return {
        componentToTagMap,
        tagToComponentMap
    };
};

const generateReactifyF7VueCall = (
    vueComponent,
    vueComponentName,
    vueComponentString, 
    reactComponentName,
    componentToTagMappings
) => {
    const reactifyF7VueArgs = [];
    let eventList;
    let instantiatedComponentList;
    let slotList;
    
    const imports = [        
        generateImportString('reactifyF7Vue', '../src/utils/ReactifyF7Vue'),
        generateImportString(vueComponentName, 'framework7-vue/dist/framework7-vue.esm')
    ];    
    
    reactifyF7VueArgs.push(`component: ${vueComponentName}`);
    reactifyF7VueArgs.push(`name: '${reactComponentName}'`);
    reactifyF7VueArgs.push(`tag: '${vueComponent.name}'`);
   
    eventList = getEventList(vueComponentString);

    if (eventList.length) reactifyF7VueArgs.push(`events: [\n\t\t'${eventList.join('\',\n\t\t\'')}'\n\t]`);

    instantiatedComponentList = getInstantiatedComponentList(vueComponentString, vueComponent, componentToTagMappings.tagToComponentMap);    

    if (instantiatedComponentList.length) reactifyF7VueArgs.push(`instantiatedComponents: [\n\t\t${instantiatedComponentList.join(',\n\t\t')}\n\t]`);

    slotList = getSlotList(vueComponentString);

    if (slotList.length) reactifyF7VueArgs.push(`slots: [\n\t\t'${slotList.join('\',\n\t\t\'')}'\n\t]`);
    
    imports.push(...instantiatedComponentList.map(componentName => {
        return generateImportString(componentName, `./${componentName}`)
    }));

    const typeScriptInterface = generateTypeScriptInterfaceFromProps(
        vueComponent.props,
        reactComponentName,
        eventList,
        slotList
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

const generateIndexTsFile = (vueComponents) => {
    const importedFiles = [];
    const exportedModules = [];

    importedFiles.push(generateImportString('Framework7App', '../src/components/Framework7App'));
    exportedModules.push('Framework7App');

    Object.keys(vueComponents).forEach(vueComponentName => {
        if (vueComponentName.indexOf('f7') !== -1) {
            const reactComponentName = vueComponentName.replace('f7', '');
            
            importedFiles.push(generateImportString(reactComponentName, `./${reactComponentName}`));
            exportedModules.push(reactComponentName);    
        }
    });

    const indexTsFile = `${importedFiles.join('\n')}\n\nexport {\n\t${exportedModules.join(',\n\t')}\n}`;
    const outPath = './framework7-react/index.ts';

    writeFileSync(outPath, indexTsFile);
}

export const generateReactComponents = () => {
    const componentToTagMaps = getComponentToTagMappings(VueComponents);

    Object.keys(VueComponents).forEach(vueComponentName => {
        if (vueComponentName.indexOf('f7') !== -1) {
            const reactComponentName = vueComponentName.replace('f7', '');        
            const vueComponent = VueComponents[vueComponentName]
            const vueComponentString = stringify(vueComponent).split(`\\"`).join('"');
            
            const reactifyF7VueCall = generateReactifyF7VueCall(
                vueComponent,
                vueComponentName,
                vueComponentString, 
                reactComponentName,
                componentToTagMaps
            );            

            const outPath = `./framework7-react/${reactComponentName}.ts`;

            ensureDirectoryExistence(outPath);
            writeFileSync(outPath, reactifyF7VueCall);
        }
    });

    generateIndexTsFile(VueComponents);

    return Promise.resolve();
};