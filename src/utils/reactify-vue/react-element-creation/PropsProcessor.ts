import * as React from 'react';

import {IVueComponent} from '../ReactifyVue';

const camelCase = (str) => {
    (camelCase as any).replacement = (camelCase as any).replacement || {};

    if (!(camelCase as any).replacement[str]) {
        (camelCase as any).replacement[str] = str.replace(/-([a-z])/g, function (m, w) {
            return w.toUpperCase();
        });
    }

    return (camelCase as any).replacement[str];
};

const attributeMap = {
    autocapitalize: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoCapitalize'
    },
    autocomplete: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoComplete'
    },
    autocorrect: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoCorrect'
    },
    autofocus: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoFocus'
    },
    autosave: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoSave'
    },
    maxlength: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'maxLength'
    },
    minlength: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'minLength'
    },
    readonly: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'readOnly'            
    },
    spellcheck: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'spellCheck'            
    }     
};

const handleRefs = (element: HTMLElement, vueComponent: IVueComponent, events: {[eventName: string]: Function}, props) => {
    if (events) {
        for (let eventName in events) {
            if (element && element.addEventListener && !((element as any).vueListeners && (element as any).vueListeners[eventName])) {
                element.addEventListener(eventName, (...args: any[]) => {
                    const eventHandler = events[eventName];
                    eventHandler.apply(vueComponent, args);
                }, true);

                (element as any).vueListeners = (element as any).vueListeners || {};
                (element as any).vueListeners[eventName] = true;
            }
        }
    }

    if (props['data-vue-ref']) {        
        const vueRef = props['data-vue-ref'];
        vueRef.vueComponentInstance.$refs[vueRef.refName] = element;                 
    }
};

const renameAttribute = (componentName, attribute) => {
    const attributeMapForAttribute = attributeMap[attribute];

    if (attributeMapForAttribute && attributeMapForAttribute.componentNames.indexOf(componentName) > -1) {
        attribute = attributeMapForAttribute.renameTo;
    }

    return attribute;
};

const renameStyleProperties = (stylesObject) => {
    for (var property in stylesObject) {
        if (stylesObject.hasOwnProperty(property) && property.indexOf('-') !== -1) {
            let newPropertyName = camelCase(property);
            
            stylesObject[newPropertyName] = stylesObject[property];
            delete stylesObject[property];
        }
    }

    return stylesObject;
}

let totalTime = 0;
let timeout;

export class PropsProcessor {
    private cachedPropKebabCase: {[camelCasedProp: string]: string};

    public getProps(args, children, componentOrComponentName, resolvedComponent, vueComponentInstance) {
        const startTime = new Date()
        
        this.addCurrentComponentAsParentOfChildren(children, vueComponentInstance);

        const props = {};

        this.getClasses(args, vueComponentInstance, props);
        this.getStyle(args, vueComponentInstance, props);
        this.getRef(args, vueComponentInstance, resolvedComponent, props);        
        this.getPropsFromArgs(args, props);        
        this.getChildren(children, args, props);
        this.convertAttrsToProps(args, componentOrComponentName, resolvedComponent, props);
        this.getInnerHTML(args, props);
        this.handleEvents(resolvedComponent, args.on, vueComponentInstance, props)
        this.handleRef(args.ref, vueComponentInstance, props);        
        
        totalTime += new Date().getTime() - startTime.getTime();
        
        clearTimeout(timeout);
        
        timeout = window.setTimeout(() => {
            window.alert(totalTime);
        }, 2000)

        return props;
    }

    private getClasses(args, vueComponent, props) {
        let classObject = {};

        if (args.class && typeof args.class === 'string') {
            classObject[args.class] = true;
        } else if (args.class) {
            classObject = args.class;
        }
        
        if (args.staticClass) { 
            classObject[args.staticClass] = true; 
        }
        
        const classes = [];  
        
        for (let key in classObject) {
            if (classObject[key]) {
                classes.push(key);
            }
        }
        
        props.className = classes.join(' ');
    }

    private getStyle(args, vueComponent, props) {
        let style;        

        if (args.style) {
            if (typeof args.style === 'object') {
                style = args.style;
            } else {
                throw new Error('ReactifyVue only supports style attributes that are of type object')
            }            
        }

        if (style) {
            props.style = renameStyleProperties(style);
        }
    }

    private handleEvents = (resolvedComponent, eventHandlers, parentVueComponentInstance, props) => {
        if (typeof resolvedComponent === 'string') {

        } else {
            if (eventHandlers) {
                for (let eventName in eventHandlers) {
                    const camelCasedEventName = `${camelCase('on-' + eventName)}`;
                    props[camelCasedEventName] = (...eventArgs: any[]) => {
                        eventHandlers[eventName].apply(parentVueComponentInstance, eventArgs);
                    };
                }
            }
        }
    }

    private getRef(args, vueComponent, resolvedComponent, props) {
        props.ref = ((events, vueComponent) => {
            return (element: HTMLElement) => {
                const events = args.on;
                handleRefs(element, vueComponent, events, props);                
            };
        })(args.on, vueComponent);
    }

    private getPropsFromArgs(args, props) {
        if (args.props) {
            for (let prop in args.props) {
                props[camelCase(prop)] = args.props[prop];
            }
        }        
    }

    private getChildren(children, args, props) {
        if (children && !(args.domProps && args.domProps.innerHTML)) {
            props.children = children;
        }
    }

    private convertAttrsToProps(args, componentOrComponentName, resolvedComponent, props) {
        if (args.attrs) {
            for (let attr in args.attrs) {
                attr = renameAttribute(componentOrComponentName, attr);

                const resolvedVueComponent = resolvedComponent.vueComponent;
                const attrValue = args.attrs[attr];

                if (attrValue !== undefined || attrValue !== false) {
                    const camelCasedAttrName = camelCase(attr);
                    const vueComponentProp = resolvedVueComponent && resolvedVueComponent.props && resolvedVueComponent.props[camelCasedAttrName];

                    if (vueComponentProp) {
                        if (vueComponentProp === Boolean && attrValue  !== false) {
                            props[camelCasedAttrName] = true;
                        } else {
                            props[camelCasedAttrName] = attrValue;
                        }
                    } else {
                        props[attr] = attrValue;
                    }
                }                
            }
        }        
    }

    private getInnerHTML(args, props) {
        let dangerouslySetInnerHTML;

        if (args.domProps && args.domProps.innerHTML) dangerouslySetInnerHTML = {__html: args.domProps.innerHTML};

        if (dangerouslySetInnerHTML) {
            props.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
        }
    }

    private addCurrentComponentAsParentOfChildren(children, vueComponent) {
        let length = children && children.length;        

        if (children && length && Array.isArray(children)) {
            for (let i = 0, length = children.length; i < length; i++) {            
                let child = children[i];

                if (child && child.tag && child.tag.indexOf('f7-') !== -1) {                    
                    child.props = {...child.props, parentVueComponent: vueComponent };
                }
            }
        }
    }    

    private handleRef(refName: string, vueComponentInstance, props) {
        if (refName) {
            if (!vueComponentInstance.$refs) vueComponentInstance.$refs = {};
            
            props['data-vue-ref'] = {
                refName: refName,            
                vueComponentInstance
            };
        }
    }
}