import {camelCase} from 'change-case';
import * as classNames from 'classnames';

import {IVueComponent} from '../ReactifyVue';

const handleRefs = (element: HTMLElement, vueComponent: IVueComponent, events: {[eventName: string]: Function}) => {
    vueComponent.element = element;

    if (events) {
        Object.keys(events).forEach(eventName => {
            if (element && element.addEventListener && !((element as any).vueListeners && (element as any).vueListeners[eventName])) {
                element.addEventListener(eventName, (...args: any[]) => {
                    const eventHandler = events[eventName];
                    eventHandler.apply(vueComponent, args);
                }, true);

                (element as any).vueListeners = (element as any).vueListeners || {};
                (element as any).vueListeners[eventName] = true;
            }
        });
    }
};

const renameAttribute = (componentName, attribute) => {
    const attributeMap = {
        autocomplete: {
            componentNames: ['input', 'textarea', 'select'],
            renameTo: 'autoComplete'
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
        }    
    }

    const attributeMapForAttribute = attributeMap[attribute];

    if (attributeMapForAttribute && attributeMapForAttribute.componentNames.indexOf(componentName) > -1) {
        attribute = attributeMapForAttribute.renameTo;
    }

    return attribute;
};

export class PropsProcessor {
    public getProps(args, children, componentOrComponentName, resolvedComponent, vueComponent) {
        this.addCurrentComponentAsParentOfChildren(children, vueComponent);

        return {
            ...this.getClasses(args, vueComponent),
            ...this.getStyle(args, vueComponent),
            ...this.getRef(args, resolvedComponent, vueComponent),
            ...this.getPropsFromArgs(args),
            ...this.getChildren(children, args),
            ...this.convertAttrsToProps(args, componentOrComponentName, resolvedComponent),            
            ...this.getInnerHTML(args)
        };
    }

    private getClasses(args, vueComponent) {
        let classObject = {};

        if (args.class && typeof args.class === 'string') {
            classObject[args.class] = true;
        } else if (args.class) {
            classObject = args.class;
        }
        
        if (args.staticClass) { 
            classObject[args.staticClass] = true; 
        }

        if (vueComponent.className) {
            classObject[vueComponent.className] = true;
        }

        if (Object.keys(classObject).length) {
            return { className: classNames(classObject) };
        } else {
            return {};
        }        
    }

    private getStyle(args, vueComponent) {
        let style;

        if (args.style) {
            if (typeof args.style === 'object') {
                style = args.style;
            } else {
                throw new Error('ReactifyVue only supports style attributes that are of type object')
            }            
        }

        //Style can be passed into any framework7-react component. 
        //If it is passed in, add it to any styles specified in the Vue component.
        if ((vueComponent as any).style) style = { 
            ...style,
            ...(vueComponent as any).style
        };

        if (style) {
            return { style };
        } else {
            return {};
        }
    }

    private getRef(args, resolvedComponent, vueComponent) {
        return {
            ref: (element: HTMLElement) => {
                const events = args.on;
                handleRefs(element, (resolvedComponent.vueComponent || vueComponent), events);
            }
        };
    }

    private getPropsFromArgs(args) {
        var props = {};
        
        if (args.props) Object.keys(args.props).forEach(prop => props[camelCase(prop)] = args.props[prop]);

        return props;
    }

    private getChildren(children, args) {
        if (children && !(args.domProps && args.domProps.innerHTML)) {
            return { children };
        } else {
            return {};
        }
    }

    private convertAttrsToProps(args, componentOrComponentName, resolvedComponent) {
        const props = {};

        if (args.attrs) Object.keys(args.attrs).forEach(attr => {
            attr = renameAttribute(componentOrComponentName, attr);

            const resolvedVueComponent = resolvedComponent.vueComponent;
            const attrValue = args.attrs[attr];
            
            if (attrValue !== undefined || attrValue !== false) {
                const camelCasedAttrName = camelCase(attr);

                if (resolvedVueComponent && resolvedVueComponent.props && resolvedVueComponent.props[camelCasedAttrName]) {
                    if (resolvedVueComponent.props[camelCasedAttrName] === Boolean && attrValue  !== false) {
                        props[camelCasedAttrName] = true;
                    } else {
                        props[camelCasedAttrName] = attrValue;
                    }
                } else {
                    props[attr] = attrValue;
                }
            }
        });

        return props;
    }

    private getInnerHTML(args) {
        let dangerouslySetInnerHTML;

        if (args.domProps && args.domProps.innerHTML) dangerouslySetInnerHTML = {__html: args.domProps.innerHTML};

        if (dangerouslySetInnerHTML) {
            return { dangerouslySetInnerHTML };
        } else {
            return {};
        }
    }

    private addCurrentComponentAsParentOfChildren(children, vueComponent) {
        if (children && Array.isArray(children) && children.length) {
            children.forEach(child => {
                if (child && child.props && child.type && typeof child.type !== 'string') {
                    try {
                        child.props = {...child.props, parentVueComponent: vueComponent};
                    } catch (err) {
                        //console.warn(err);
                    }
                }
            });
        }
    }
}