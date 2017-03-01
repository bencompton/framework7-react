import * as React from 'react';

import {camelCase} from 'change-case';

const handleStateSet = (stateObject, key, value, vueComponent, self, deleteMode) => {
    const stateKey = Object.keys(self.state).reduce((macthingStateKey, nextKey) => {
        if (self.state[nextKey] === stateObject) {
            return nextKey;
        } else {
            return macthingStateKey;
        }
    }, null);  

    let newState;

    if (deleteMode) {
        newState = {
            ...self.state
        };

        delete newState[stateKey][key];
    } else {
        newState = {
            ...self.state,
            [stateKey]: {
                ...self.state[stateKey],
                [key]: value
            }
        };
    }

    if (deleteMode) {
        delete vueComponent[stateKey][key];
    } else {
        vueComponent[stateKey] = newState[stateKey];
    }
        
    self.setState(newState);
};

const callPropOnEvent = (eventName: string, eventArgs: any[], props: any) => {
    const eventNameCamelCase = camelCase('on-' + eventName.split(':').join('-'));

    if (props[eventNameCamelCase]) {        
        props[eventNameCamelCase](...eventArgs);
    }
};

export const convertVueComponentToClass = (vueComponentObject) => {
    const vueComponentClass = function (reactComponentProps, reactComponentInstance) {
        this.reactComponentProps = reactComponentProps;
        this.reactComponentInstance = reactComponentInstance;
        this.reactComponentInstance.nextTickCallbacks = [];
    };

    vueComponentClass.prototype = vueComponentObject;

    if (vueComponentObject.mixins) {
        vueComponentObject.mixins.forEach(mixin => {
            Object.keys(mixin).forEach(prop => {
                vueComponentClass.prototype[prop] = mixin[prop];
            });
        });
    } 

    vueComponentClass.prototype.$emit = function (eventName: string, ...eventArgs: any[]) {
        callPropOnEvent(eventName, eventArgs, this.reactComponentProps);
    };

    Object.defineProperty(vueComponentClass.prototype, '$el', {
        get: function ()  { return this.reactComponentInstance.element },
        enumerable: true,
        configurable: true
    }); 

    Object.defineProperty(vueComponentClass.prototype, '$parent', {
        get: function ()  { return this.reactComponentProps.parentVueComponent },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(vueComponentClass.prototype, '$children', {
        get: function ()  {
            const parentElement = this.$el;
            return React.Children.toArray(this.children).map((element: any, index) => {
                return {...element, $el: parentElement.children[index]};
            });
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(vueComponentClass.prototype, '$options', {
        get: function ()  { 
            return {
                propsData: this.reactComponentProps
            };
        },
        enumerable: true,
        configurable: true
    });

    vueComponentClass.prototype.$nextTick = function (func) {
        if (this.reactComponentInstance.hasUnrenderedStateChanges) {
            this.reactComponentInstance.nextTickCallbacks.push(func);
        } else {
            func();
        }
    };

    vueComponentClass.prototype.$set = function (stateObject, key, value) {
        this.reactComponentInstance.hasUnrenderedStateChanges = true;
        handleStateSet(stateObject, key, value, this, this.reactComponentInstance, false);
    };

    vueComponentClass.prototype.$delete = function (stateObject, key) {
        this.reactComponentInstance.hasUnrenderedStateChanges = true;
        handleStateSet(stateObject, key, null, this, this.reactComponentInstance, true);
    };

    return vueComponentClass;
};