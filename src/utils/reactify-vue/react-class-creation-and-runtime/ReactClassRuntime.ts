import * as React from 'react';
import {camelCase} from 'change-case';

import {IVueComponent} from '../ReactifyVue';
import {createReactElement} from '../react-element-creation/CreateReactElements';

export const copyMethodsToVueComponent = (vueComponent: IVueComponent) => {
    if (vueComponent.methods) {
        Object.keys(vueComponent.methods)
            .forEach(methodName => vueComponent[methodName] = vueComponent.methods[methodName]);

        delete vueComponent.methods;
    }
};

export const copyPropsToVueComponent = (vueComponent: IVueComponent, props: any, defaultProps: any) => {
    const allProps = { ...defaultProps, ...props }

    Object.keys(props)
        .forEach(propName => {
            if (typeof vueComponent[propName] !== 'function' || typeof vueComponent[propName] === 'function' && !vueComponent[propName]) {
                vueComponent[propName] = props[propName];
            }
        });    
};

export const getComponentTag = (component: any) => {
     if (component.type && component.type.tag) {
         return component.type.tag;
     } else if (component.type && typeof component.type === 'string') {
         return component.type;
     } else {
         return undefined;
     }
};

export const copySlotsToVueComponent = (vueComponent: IVueComponent, slotMapping, props) => {
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

export const copyArgsToVueComponent = (vueComponent: IVueComponent, args: any) => {
    if (args) {
        Object.keys(args)
            .forEach(argName => vueComponent[argName] = args[argName]);
    }
}

export const handleWatchedProperties = (vueComponent: IVueComponent, currentProps: any, nextProps: any, defaultProps: any) => {
    if (vueComponent.watch) {
        copyPropsToVueComponent(vueComponent, nextProps, defaultProps);
        handleComputedProperties(vueComponent);

        Object.keys(vueComponent.watch)
            .forEach(watchedProperty => {
                if (currentProps[watchedProperty] !== nextProps[watchedProperty]) {
                    vueComponent.watch[watchedProperty].apply(vueComponent, [nextProps[watchedProperty]]);
                }
            });
    }
};

export const handleComputedProperties = (vueComponent: IVueComponent) => {
    if (vueComponent.computed) {
        Object.keys(vueComponent.computed)
            .forEach(propertyName => {
                vueComponent[propertyName] = vueComponent.computed[propertyName].apply(vueComponent, [])
            });
    }
}

export const addCompiledTemplateFunctionsToVueComponent = (vueComponent: any, createElement: Function) => {
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

export const generateCreateElementFunctionForClass = (classVueComponentInstance, instantiatedComponents, vueComponent) => {
    return (element, args, children) => {
        if (typeof args !== 'object' || Array.isArray(args)) {
            //Children passed in as second argument
            return createReactElement(element, {}, args, instantiatedComponents, vueComponent);
        } else {
            return createReactElement(element, args, children, instantiatedComponents, vueComponent);
        }
    };
};

export const applyPropOverridesToTopLevelElement = (reactElement: React.ReactElement<any>, tag: string, self) => {
    const refFunc = (e: HTMLElement) => {
        (reactElement as any).ref(e);
        self.element = e;

        self.nextTickCallbacks.forEach(callback => callback.apply(this.vueComponent, []));
        self.nextTickCallbacks = [];
        self.hasUnrenderedStateChanges = false;

        if (self.element) {
            self.element.__vue__ = self.vueComponent;
        }
    };

    const elementWithPropOverrides = {...reactElement, props: { ...reactElement.props}, tag: tag, ref: refFunc};

    if (self.vueComponent.className) {
        const existingClassName = elementWithPropOverrides.props.className || '';
        elementWithPropOverrides.props.className = [existingClassName, ' ', self.vueComponent.className].join('');
    }

    if (self.vueComponent.style) {
        const existingStyles = elementWithPropOverrides.props.style || {};
        
        elementWithPropOverrides.props.style = {
            ...existingStyles,
            ...self.vueComponent.style
        };        
    }

    if (self.vueComponent.id) {
        elementWithPropOverrides.props.id = self.vueComponent.id;
    }

    return elementWithPropOverrides;
};

export const initData = (vueComponent, reactComponent) => {
    let state = null;

    if (vueComponent.data) {
        state = vueComponent.data();

        Object.keys(state).forEach(stateKey => {
            vueComponent[stateKey] = state[stateKey];

            if (state[stateKey].push) {
                const oldPush = state[stateKey].push;

                state[stateKey].push = (value) => {
                    Array.prototype.push.apply(state[stateKey], [value]);
                    reactComponent.setState({
                        state
                    });
                };
            }
        });
    }

    return state;
};