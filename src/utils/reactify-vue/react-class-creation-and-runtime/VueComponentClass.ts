import {camelCase} from 'change-case';

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

const callPropOnEvent = (eventName: string, eventArgs: any[], props: any) => {
    const eventNameCamelCase = camelCase('on-' + eventName.split(':').join('-'));

    if (props[eventNameCamelCase]) {
        props[eventNameCamelCase](eventArgs);
    }
};

export const convertVueComponentToClass = (vueComponentObject) => {
    const vueComponentClass = function (reactComponentProps, reactComponentInstance) {
        this.reactComponentProps = reactComponentProps;
        this.reactComponentInstance = reactComponentInstance;
        this.reactComponentInstance.nextTickCallbacks = [];
    };

    vueComponentClass.prototype = vueComponentObject;

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
        get: function ()  { return this.reactComponentProps.children },
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
        handleStateSet(stateObject, key, value, this, this.reactComponentInstance);                        
    };

    return vueComponentClass;
};