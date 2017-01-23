import * as React from 'react';
import {camelCase} from 'change-case';

import {createReactElement} from './react-element-creation/CreateReactElements';
import {IVueComponent} from './ReactifyVue';

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
            .forEach(propName => {
                if (typeof vueComponent[propName] !== 'function' || typeof vueComponent[propName] === 'function' && !vueComponent[propName]) {
                    vueComponent[propName] = props[propName];
                }
            });
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
    const reactChildrenArray = props && props.children && React.Children.toArray(props.children) as (React.ReactElement<any>)[];

    const slots = {
        default: (reactChildrenArray && reactChildrenArray.length) ?  reactChildrenArray : null
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
    const eventNameCamelCase = camelCase('on-' + eventName.split(':').join('-'));

    if (props[eventNameCamelCase]) {
        props[eventNameCamelCase](eventArgs);
    }
};

const handleWatchedProperties = (vueComponent: IVueComponent, currentProps: any, nextProps: any) => {
    if (vueComponent.watch) {
        copyPropsToVueComponent(vueComponent,nextProps);
        handleComputedProperties(vueComponent);

        Object.keys(vueComponent.watch)
            .forEach(watchedProperty => {
                if (currentProps[watchedProperty] !== nextProps[watchedProperty]) {
                    vueComponent.watch[watchedProperty].apply(vueComponent, []);
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
                    [camelCase(propName)]: propDef.default
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

const addCompiledTemplateFunctionsToVueComponent = (vueComponent: any, createElement: Function) => {
    vueComponent._self = { _c: createElement.bind(vueComponent) };
    vueComponent._t = (slotName: string, fallback) => {
        const slotValue = vueComponent.$slots[slotName];

        if (fallback && (!slotValue || !slotValue.length)) {
            return fallback;
        } else {
            return slotValue;
        }
    };

    vueComponent._v = (text: string) => text || '';
    vueComponent._s = (text: string) => text || '';
    vueComponent._e = () => null;
};

const generateCreateElementFunctionForClass = (classVueComponentInstance, instantiatedComponents, vueComponent) => {
    return (element, args, children) => {
        if (typeof args !== 'object' || Array.isArray(args)) {
            //Children passed in as second argument
            return createReactElement(element, {}, args, instantiatedComponents, vueComponent);
        } else {
            return createReactElement(element, args, children, instantiatedComponents, vueComponent);
        }
    };
};

const removePropsFromElementAndChildren = (element, propsToRemove) => {
    let children = element && element.props && element.props.children;

    if (children) {
        if (Array.isArray(children)) {
            children = children.map(child => removePropsFromElementAndChildren(child, propsToRemove));
        } else {
            children = removePropsFromElementAndChildren(children, propsToRemove);
        }
    }

    if (element && element.props && Object.keys(element.props).filter(propName => propsToRemove.indexOf(propName) !== -1).length) {
        return {...element, props: Object.keys(element.props).reduce((newProps, nextPropName) => {
            if (nextPropName === 'children') {
                return {
                    ...newProps,
                    children: children
                };
            } else if (propsToRemove.indexOf(nextPropName) === -1) {
                return {
                    ...newProps,
                    [nextPropName]: element.props[nextPropName]
                };
            } else {
                return newProps;
            }
        }, {})};
    } else {
        return element;
    }
};

const applyPropOverrides = (reactElement: React.ReactElement<any>, tag: string, self) => {
    const refFunc = (e: HTMLElement) => {
        reactElement.props.refTemp(e);
        self.element = e;

        self.nextTickCallbacks.forEach(callback => callback.apply(this.vueComponent, []));
        self.nextTickCallbacks = [];
        self.hasUnrenderedStateChanges = false;        
    };

    const elementWithPropOverrides = {...reactElement, props: { ...reactElement.props}, tag: tag, ref: refFunc };

    if (elementWithPropOverrides.props.additionalClassName) {
        const existingClassName = elementWithPropOverrides.props.className || '';

        elementWithPropOverrides.props.className = existingClassName + ' ' 
            + elementWithPropOverrides.props.additionalClassName;        
    }

    if (elementWithPropOverrides.props.additionalStyles) {
        const existingStyles = elementWithPropOverrides.props.style || {};
        
        elementWithPropOverrides.props.style = {
            ...existingStyles,
            ...elementWithPropOverrides.props.additionalStyles
        };        
    }

    if (self.vueComponent.id) {
        elementWithPropOverrides.props.id = self.vueComponent.id;
    }

    return removePropsFromElementAndChildren(
        elementWithPropOverrides, 
        ['additionalClassName', 'additionalStyles', 'refTemp']
    );    
};

const initData = (vueComponent) => {
    let state = null;

    if (vueComponent.data) {
        state = vueComponent.data();

        Object.keys(state).forEach(stateKey => {
            vueComponent[stateKey] = state[stateKey];
        });
    }

    return state;
};

const handleStateSet = (stateObject, key, value, vueComponent, self) => {
    const stateKey = Object.keys(self.state).reduce((macthingStateKey, nextKey) => {
        if (self.state[nextKey] === stateObject) {
            return nextKey;
        } else {
            return macthingStateKey;
        }
    }, null);  

    const newState = {
        ...self.state,
        [stateKey]: {
            ...self.state[stateKey],
            [key]: value
        }
    };

    vueComponent[stateKey] = newState[stateKey];
    self.setState(newState);
};

const generateVueComponentWithInstanceProperties = (vueComponent, props, self) => {
    self.nextTickCallbacks = [];

    const instanceVueComponent = {...vueComponent, ...{
        $emit: (eventName: string, ...eventArgs: any[]) => {
            callPropOnEvent(eventName, eventArgs, props);
        },
        $parent: props.parentVueComponent,
        $options: {
            propsData: props
        },
        $nextTick: (func) => {
            if (self.hasUnrenderedStateChanges) {
                self.nextTickCallbacks.push(func);
            } else {
                func();
            }
        }, 
        $set: (stateObject, key, value) => {
            self.hasUnrenderedStateChanges = true;
            handleStateSet(stateObject, key, value, instanceVueComponent, self);                        
        } 
    }};    

    return instanceVueComponent;
}

export const generateReactClass = <TProps>(instantiatedComponents, vueComponent, slots, tag, mixin, args) => {
    applyMixinToVueComponent(vueComponent, mixin);
    copyMethodsToVueComponent(vueComponent);
    copyArgsToVueComponent(vueComponent, args);

    const reactClass = React.createClass<TProps, any>({
        getInitialState: function() {
            this.vueComponent = generateVueComponentWithInstanceProperties(vueComponent, this.props, this);
            this.createElement = generateCreateElementFunctionForClass(
                this.vueComponent,
                instantiatedComponents,
                this.vueComponent
            );
            
            copyPropsToVueComponent(this.vueComponent, this.props);
            copySlotsToVueComponent(this.vueComponent, slots, this.props);
            const state = initData(this.vueComponent);
            handleComputedProperties(this.vueComponent);

            addCompiledTemplateFunctionsToVueComponent(this.vueComponent, this.createElement);

            Object.defineProperty(this.vueComponent, '$el', {
                get: () => this.element,
                enumerable: true,
                configurable: true
            });

            if (this.props.__onInit) {
                this.props.__onInit(this);
            }            

            return state;
        },

        componentWillUpdate: function() {
            if (this.vueComponent.updated) this.vueComponent.updated();
        },

        componentDidMount: function() {
            if (this.vueComponent.mounted) this.vueComponent.mounted();
            if (this.props.__onMount) this.props.__onMount(this);            
        },

        componentWillUnmount: function() {
            if (vueComponent.beforeDestroy) vueComponent.beforeDestroy();
        },

        componentWillReceiveProps: function(nextProps) {
            handleWatchedProperties(this.vueComponent, this.props, nextProps);
        },

        render: function() {
            copyPropsToVueComponent(this.vueComponent, this.props);
            copySlotsToVueComponent(this.vueComponent, slots, this.props);
            handleComputedProperties(this.vueComponent);

            const reactElement = this.vueComponent.render(this.createElement.bind(this));
            
            if (reactElement) {
                return applyPropOverrides(reactElement, tag, this);
            } else {
                return null;
            }            
        },

        callVueMethod: function(methodName: string, ...args: any[]) {
            return this.vueComponent[methodName](args);
        }
    });

    (reactClass as any).tag = tag;
    (reactClass as any).vueComponent = vueComponent;
    (reactClass as any).getVueComponentInstance = () => this.vueComponent;    

    const defaultProps = getDefaultProps(vueComponent);

    if (defaultProps) (reactClass as any).defaultProps = defaultProps;

    return reactClass;
};