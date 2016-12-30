import * as React from 'react';
import * as classNames from 'classnames';
import * as camelCase from 'camelcase';

export interface IVueEventToPropsMap {
    [vueEvent: string]: string;
}

export interface IVueSlotToReactElementMap {
    [slotName: string]: (React.ReactElement<any> | (React.ReactElement<any>)[])[];
}

export interface IVueSlotToReactPropNameMap {
    [slotName: string]: string;
}

export interface IVueComponent {
    render: (createElement: any) => React.ReactElement<any>;
    beforeDestroy?: () => void;
    methods?: {[methodName: string]: Function};
    $slots?: IVueSlotToReactElementMap;
    $emit?: (eventName: string, ...eventArgs: any[]) => void;
    watch?: {[watchedProp: string]: Function};
    computed?: {[computedProp: string]: () => any};
    element?: HTMLElement;
}

export interface IReactifyVueArgs {
    component: IVueComponent;
    tag: string;
    events?: IVueEventToPropsMap;
    dependencyComponents?: (React.ComponentClass<any> | React.StatelessComponent<any>)[];
    slots?: IVueSlotToReactPropNameMap;
    args?: any; 
    mixin?: any;
}

const getClassName = (classObject, staticClass) => {
    classObject = classObject || {};
    if (staticClass) classObject[staticClass] = true;
    return classNames(classObject);
};

const resolveDependencyComponent = (dependencyComponents: (React.ComponentClass<any> | React.StatelessComponent<any>)[], componentToResolve: string) => {
    if (dependencyComponents) {
        const results = dependencyComponents
            .filter(dependencyComponent => {
                if ((dependencyComponent as any).tag) {
                    return (dependencyComponent as any).tag === componentToResolve;
                } else {
                    return false;
                }
            });

        if (results.length) return results[0];   
    }
};

const removeOuterArrayFromChildren = (children) => {
    if (children && children.length && Array.isArray(children[0])) {
        return children.reduce((outputArray, nextChildArray) => {
            return [...outputArray, ...nextChildArray];
        }, []);
    } else {
       children;
    }
};

const createReactElement = (componentName: string, args, children, dependencyComponents, vueComponent: IVueComponent) => {
    let resolvedComponent;
    let props: any = {};

    resolvedComponent = resolveDependencyComponent(dependencyComponents, componentName);

    children = removeOuterArrayFromChildren(children);

    if (!resolvedComponent) resolvedComponent = componentName;
    if (children) props.children = children;
    if (args.class || args.staticClass) props.className = getClassName(args.class, args.staticClass);
    if (args.attrs) Object.keys(args.attrs).forEach(attr => props[attr] = args.attrs[attr]);
    if (args.props) Object.keys(args.props).forEach(prop => props[camelCase(prop)] = args.props[prop]);

    if (children && children.length) {
        children.forEach(child => {
            if (child && child.props && child.type && typeof child.type !== 'string') {
                child.props = {...child.props, parentVueComponent: vueComponent};
            }
        });
    }

    return React.createElement(resolvedComponent, props);
};

const copyMethodsToVueComponent = (vueComponent: IVueComponent) => {
    if (vueComponent.methods) {
        Object.keys(vueComponent.methods)
            .forEach(methodName => vueComponent[methodName] = vueComponent.methods[methodName]);
        
        delete vueComponent.methods;
    }
};

const copyPropsToVueComponent = (vueComponent: IVueComponent, props: any) => {
    if (props) {
        Object.keys(props)
            .forEach(propName => vueComponent[propName] = props[propName]);
    }
};

const getComponentTag = (component: any) => {
     if (component.type && component.type.tag) {
         return component.type.tag;
     } else if (component.type && typeof component.type === 'string') {
         return component.type;
     } else {
         return undefined;
     }
};

const copySlotsToVueComponent = (vueComponent: IVueComponent, slotMapping, props) => {
    const slots = {
        default: (props && props.children) ? React.Children.toArray(props.children) as  (React.ReactElement<any>)[] : []
    };
    
    if (slotMapping && props) {
        Object.keys(slotMapping)
            .forEach(slotName => {
                slots[slotName] = props[slotMapping[slotName]] || [];
            });
    }

    Object.keys(slots)
        .forEach(slotName => {
            const slot = slots[slotName];

            slot.forEach((slotChild, index) => {
                slots[slotName][index] = {...slotChild, tag: getComponentTag(slotChild)};
            });
        });
    
    vueComponent.$slots = slots;
}

const copyArgsToVueComponent = (vueComponent: IVueComponent, args: any) => {
    if (args) {
        Object.keys(args)
            .forEach(argName => vueComponent[argName] = args[argName]);
    }
}

const callPropOnEvent = (eventName: string, eventArgs: any[], props: any) => {
    if (!props[eventName]) {
        throw new Error(`Component attempted to fire event ${eventName}, but component did not have a prop for that event.`);
    }

    props[eventName](eventArgs);    
};

const handleWatchedProperties = (vueComponent: IVueComponent, currentProps: any, nextProps: any) => {
    if (this.vueComponent.watch) {
        Object.keys(this.vueComponent.watch)
            .forEach(watchedProperty => {
                if (this.props[watchedProperty] !== nextProps[watchedProperty]) {
                    this.vueComponent.watch[watchedProperty]();
                }
            });
    }
};

const handleComputedProperties = (vueComponent: IVueComponent) => {
    if (vueComponent.computed) {
        Object.keys(vueComponent.computed)
            .forEach(propertyName => {
                vueComponent[propertyName] = vueComponent.computed[propertyName].apply(vueComponent, [])
            });
    }
}

const applyMixinToVueComponent = (vueComponent: IVueComponent, mixin: any) => {
    if (mixin) {
        Object.keys(mixin).forEach(mixinProp => {
            vueComponent[mixinProp] = mixin[mixinProp];
        });
    }
};

export const reactifyVue = <TProps>(reactifyVueArgs: IReactifyVueArgs) => {
    const vueComponent = reactifyVueArgs.component;
    
    applyMixinToVueComponent(vueComponent, reactifyVueArgs.mixin);
    copyMethodsToVueComponent(vueComponent);
    copyArgsToVueComponent(vueComponent, reactifyVueArgs.args);
    
    const reactClass = React.createClass<TProps, any>({
        getInitialState: function() {
            this.vueComponent = {...vueComponent, ...{
                $emit: (eventName: string, ...eventArgs: any[]) => {
                    callPropOnEvent(eventName, eventArgs, this.props);
                }
            }};

            this.createElement = (element, args, children) => {
                return createReactElement(element, args, children, reactifyVueArgs.dependencyComponents, this.vueComponent)
            };

            copyPropsToVueComponent(this.vueComponent, this.props);
            copySlotsToVueComponent(this.vueComponent, reactifyVueArgs.slots, this.props);
            
            this.vueComponent._self = { _c: this.createElement.bind(this) };
            this.vueComponent._t = (slotName: string) => this.vueComponent.$slots[slotName];
            this.vueComponent._v = () => null;
            this.vueComponent._e = () => null;
            this.vueComponent.$parent = this.props.parentVueComponent;
            this.vueComponent.$options = {
                propsData: this.props
            }

            Object.defineProperty(vueComponent, '$el', {
                get: () => this.element,
                enumerable: true,
                configurable: true
            });

            handleComputedProperties(this.vueComponent);

            return null;
        },

        componentWillUnmount: function() {
            if (vueComponent.beforeDestroy) vueComponent.beforeDestroy();
        },

        componentWillReceiveProps: (nextProps) => {
            copyPropsToVueComponent(this.vueComponent, this.props);
            copySlotsToVueComponent(this.vueComponent, reactifyVueArgs.slots, this.props);
            handleWatchedProperties(this.vueComponent, this.props, nextProps);
            handleComputedProperties(this.vueComponent);
        },

        render: function() {
            const reactElement = this.vueComponent.render(this.createElement.bind(this));
            const newReactElement = {...reactElement, tag: reactifyVueArgs.tag};
            Object.preventExtensions(newReactElement);

            return newReactElement;
        },

        callVueMethod: function(methodName: string, ...args: any[]) {
            return this.vueComponent[methodName](args);
        }
    });

    (reactClass as any).tag = reactifyVueArgs.tag;

    return reactClass;
};