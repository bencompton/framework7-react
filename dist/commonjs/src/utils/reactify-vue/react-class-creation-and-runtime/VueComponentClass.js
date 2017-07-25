"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var change_case_1 = require("change-case");
var handleStateSet = function (stateObject, key, value, vueComponent, self, deleteMode) {
    var stateKey = Object.keys(self.state).reduce(function (macthingStateKey, nextKey) {
        if (self.state[nextKey] === stateObject) {
            return nextKey;
        }
        else {
            return macthingStateKey;
        }
    }, null);
    var newState;
    if (deleteMode) {
        newState = __assign({}, self.state);
        delete newState[stateKey][key];
    }
    else {
        newState = __assign({}, self.state, (_a = {}, _a[stateKey] = __assign({}, self.state[stateKey], (_b = {}, _b[key] = value, _b)), _a));
    }
    if (deleteMode) {
        delete vueComponent[stateKey][key];
    }
    else {
        vueComponent[stateKey] = newState[stateKey];
    }
    self.setState(newState);
    var _a, _b;
};
var callPropOnEvent = function (eventName, eventArgs, props) {
    var eventNameCamelCase = change_case_1.camelCase('on-' + eventName.split(':').join('-'));
    if (props[eventNameCamelCase]) {
        props[eventNameCamelCase].apply(props, eventArgs);
    }
};
exports.convertVueComponentToClass = function (vueComponentObject) {
    var vueComponentClass = function (reactComponentProps, reactComponentInstance) {
        this.reactComponentProps = reactComponentProps;
        this.reactComponentInstance = reactComponentInstance;
        this.reactComponentInstance.nextTickCallbacks = [];
    };
    vueComponentClass.prototype = vueComponentObject;
    if (vueComponentObject.mixins) {
        vueComponentObject.mixins.forEach(function (mixin) {
            Object.keys(mixin).forEach(function (prop) {
                if (vueComponentClass.prototype[prop]) {
                    var existingPropertyValue_1 = vueComponentClass.prototype[prop];
                    var mixinPropertyValue_1 = mixin[prop];
                    Object.keys(mixinPropertyValue_1).forEach(function (mixinProp) {
                        existingPropertyValue_1[mixinProp] = mixinPropertyValue_1[mixinProp];
                    });
                }
                else {
                    vueComponentClass.prototype[prop] = mixin[prop];
                }
            });
        });
    }
    vueComponentClass.prototype.$emit = function (eventName) {
        var eventArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            eventArgs[_i - 1] = arguments[_i];
        }
        callPropOnEvent(eventName, eventArgs, this.reactComponentProps);
    };
    Object.defineProperty(vueComponentClass.prototype, '$el', {
        get: function () { return this.reactComponentInstance.element; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vueComponentClass.prototype, '$parent', {
        get: function () { return this.reactComponentProps.parentVueComponent || {}; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vueComponentClass.prototype, '$children', {
        get: function () {
            var parentElement = this.$el;
            return React.Children.toArray(this.children).map(function (element, index) {
                return __assign({}, element, { $el: parentElement.children[index] });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vueComponentClass.prototype, '$options', {
        get: function () {
            return {
                propsData: __assign({}, this.reactComponentProps)
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vueComponentClass.prototype, '$root', {
        get: function () {
            return {
                $el: document.querySelector('.framework7-root')
            };
        },
        enumerable: true,
        configurable: true
    });
    vueComponentClass.prototype.$nextTick = function (func) {
        if (this.reactComponentInstance.hasUnrenderedStateChanges) {
            this.reactComponentInstance.nextTickCallbacks.push(func);
        }
        else {
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

//# sourceMappingURL=VueComponentClass.js.map
