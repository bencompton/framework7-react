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

export interface IDependencyComponent {
    component: (React.ComponentClass<any> | React.StatelessComponent<any>);
    tagName: string;
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
    events?: IVueEventToPropsMap;
    dependencyComponents?: IDependencyComponent[];
    slots?: IVueSlotToReactPropNameMap;
    args?: any; 
}

const getClassName = (classObject, staticClass) => {
    classObject = classObject || {};
    if (staticClass) classObject[staticClass] = true;
    return classNames(classObject);
};

const resolveDependencyComponent = (dependencyComponents: IDependencyComponent[], componentToResolve: string) => {
    if (dependencyComponents) {
        const results = dependencyComponents
            .filter(dependencyComponent => dependencyComponent.tagName === componentToResolve)

        if (results.length) return results[0].component;   
    }
};

const createReactElement = (componentName: string, args, children, dependencyComponents, vueComponent: IVueComponent) => {
    let resolvedComponent;
    let props: any = {};

    resolvedComponent = resolveDependencyComponent(dependencyComponents, componentName);

    if (!resolvedComponent) resolvedComponent = componentName;
    if (children) props.children = children;
    if (args.class || args.staticClass) props.className = getClassName(args.class, args.staticClass);
    if (args.attrs) Object.keys(args.attrs).forEach(attr => props[attr] = args.attrs[attr]);
    if (args.props) Object.keys(args.props).forEach(prop => props[camelCase(prop)] = args.props[prop]);
    
    props.ref = (e: HTMLElement) => vueComponent.element = e;
    props.$parent = vueComponent;
    
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

const copySlotsToVueComponent = (vueComponent: IVueComponent, slotMapping, props) => {
    const slots = {
        default: (props && props.children) ? React.Children.toArray(props.children) as  (React.ReactElement<any>)[] : []
    };
    
    if (slotMapping && props) {
        Object.keys(slotMapping)
            .forEach(slotName => {
                slots[slotName] = props[slotName];
            });
    }
    
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
                Object.defineProperty(vueComponent, propertyName, {
                    get: vueComponent.computed[propertyName],
                    enumerable: true,
                    configurable: true
                });
            });
    }

}

export const reactifyVue = <TProps>(reactifyVueArgs: IReactifyVueArgs) => {
    const vueComponent = reactifyVueArgs.component;
    
    copyMethodsToVueComponent(vueComponent);
    copyArgsToVueComponent(vueComponent, reactifyVueArgs.args);

    return React.createClass<TProps, any>({
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

            Object.defineProperty(vueComponent, '$el', {
                get: () => this.element,
                enumerable: true,
                configurable: true
            });

            return null;
        },

        componentWillUnmount: function() {
            if (vueComponent.beforeDestroy) vueComponent.beforeDestroy();
        },

        componentWillReceiveProps: (nextProps) => {
            copyPropsToVueComponent(this.vueComponent, this.props);
            copySlotsToVueComponent(this.vueComponent, reactifyVueArgs.slots, this.props);
            handleWatchedProperties(this.vueComponent, this.props, nextProps);
        },

        render: function() {
            return this.vueComponent.render(this.createElement.bind(this));
        },

        callVueMethod: function(methodName: string, ...args: any[]) {
            return this.vueComponent[methodName](args);
        }
    });
};