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
    props: any;
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

        if (results.length) { return results[0]; }
    }
};

const removeOuterArrayFromChildren = (children) => {
    if (children && Array.isArray(children)) {
        return children.reduce((outputArray, nextChildArray) => {
            nextChildArray = nextChildArray || [];

            if (!Array.isArray(nextChildArray)) {
                nextChildArray = [nextChildArray];
            }

            return [...outputArray, ...nextChildArray];
        }, []);
    } else {
       return children;
    }
};

const createReactElement = (componentName: string, args, children, dependencyComponents, vueComponent: IVueComponent) => {
    let resolvedComponent;
    let props: any = {};

    resolvedComponent = resolveDependencyComponent(dependencyComponents, componentName);

    children = removeOuterArrayFromChildren(children);

    if (!resolvedComponent) resolvedComponent = componentName;
    if (children && !(args.domProps && args.domProps.innerHTML)) props.children = children;
    if (args.class || args.staticClass) props.className = getClassName(args.class, args.staticClass);
    if (args.attrs) Object.keys(args.attrs).forEach(attr => {
        const resolvedVueComponent = resolvedComponent.vueComponent;
        const attrValue = args.attrs[attr];
        const camelCasedAttrName = camelCase(attr);

        if (resolvedVueComponent && resolvedVueComponent.props && resolvedVueComponent.props[camelCasedAttrName) {
             if (resolvedVueComponent.props[camelCasedAttrName] === Boolean && attrValue  !== false) {
                props[camelCasedAttrName] = true;
             } else {
                 props[camelCasedAttrName] = attrValue;
             }
        } else {
            props[attr] = attrValue;
        }
    });
    if (args.props) Object.keys(args.props).forEach(prop => props[camelCase(prop)] = args.props[prop]);
    if (args.domProps && args.domProps.innerHTML) props.dangerouslySetInnerHTML = {__html: args.domProps.innerHTML};

    if (children && Array.isArray(children) && children.length) {
        children.forEach(child => {
            if (child && child.props && child.type && typeof child.type !== 'string') {
                try {
                    child.props = {...child.props, parentVueComponent: vueComponent};
                } catch (err) {
                    console.error(err);
                }
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

            if (Array.isArray(slot)) {
                slot.forEach((slotChild, index) => {
                    if (typeof slotChild !== 'string') {
                        slots[slotName][index] = {...slotChild, tag: getComponentTag(slotChild)};
                    }
                });
            }
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

const getDefaultProps = (vueComponent: IVueComponent) => {
    if (vueComponent.props) {
        const defaultProps = Object.keys(vueComponent.props).reduce((defaultProps, propName) => {
            const propDef = vueComponent.props[propName];

            if (propDef.default) {
                return {
                    ...defaultProps,
                    [propName]: propDef.default
                };
            } else {
                return defaultProps;
            }
        }, {});

        return Object.keys(defaultProps).length ? defaultProps : null;
    } else {
        return null;
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

            this.nextTickCallbacks = [];

            this.createElement = (element, args, children) => {
                return createReactElement(element, args, children, reactifyVueArgs.dependencyComponents, this.vueComponent);
            };

            copyPropsToVueComponent(this.vueComponent, this.props);
            copySlotsToVueComponent(this.vueComponent, reactifyVueArgs.slots, this.props);

            this.vueComponent._self = { _c: this.createElement.bind(this) };
            this.vueComponent._t = (slotName: string, fallback) => {
                const slotValue = this.vueComponent.$slots[slotName];

                if (fallback && (!slotValue || !slotValue.length)) {
                    return fallback;
                } else {
                    return slotValue;
                }
            };
            this.vueComponent._v = (text: string) => text;
            this.vueComponent._s = (text: string) => text;
            this.vueComponent._e = () => null;
            this.vueComponent.$parent = this.props.parentVueComponent;
            this.vueComponent.$options = {
                propsData: this.props
            }
            this.$nextTick = (func) => this.nextTickCallbacks.push(func);

            Object.defineProperty(vueComponent, '$el', {
                get: () => this.element,
                enumerable: true,
                configurable: true
            });

            handleComputedProperties(this.vueComponent);

            return null;
        },

        componentWillUpdate: function() {
            if (this.vueComponent.updated) this.vueComponent.updated();
        },

        componentDidUpdate: function() {
            this.nextTickCallbacks.forEach(callback => callback.apply(this.vueComponent, []));
        },

        componentDidMount: function() {
            if (this.vueComponent.mounted) this.vueComponent.mounted();
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
    (reactClass as any).vueComponent = vueComponent;

    const defaultProps = getDefaultProps(vueComponent);

    if (defaultProps) (reactClass as any).defaultProps = defaultProps;

    return reactClass;
};