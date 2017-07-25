"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var change_case_1 = require("change-case");
var CreateReactElements_1 = require("../react-element-creation/CreateReactElements");
exports.copyMethodsToVueComponent = function (vueComponent) {
    if (vueComponent.methods) {
        Object.keys(vueComponent.methods)
            .forEach(function (methodName) { return vueComponent[methodName] = vueComponent.methods[methodName]; });
        delete vueComponent.methods;
    }
};
exports.copyPropsToVueComponent = function (vueComponent, props) {
    if (props) {
        Object.keys(props)
            .forEach(function (propName) {
            if (typeof vueComponent[propName] !== 'function' || typeof vueComponent[propName] === 'function' && !vueComponent[propName]) {
                vueComponent[propName] = props[propName];
            }
        });
    }
};
exports.getComponentTag = function (component) {
    if (component.type && component.type.tag) {
        return component.type.tag;
    }
    else if (component.type && typeof component.type === 'string') {
        return component.type;
    }
    else {
        return undefined;
    }
};
exports.copySlotsToVueComponent = function (vueComponent, slotMapping, props) {
    var reactChildrenArray = props && props.children && React.Children.toArray(props.children);
    var slots = {
        default: (reactChildrenArray && reactChildrenArray.length) ? reactChildrenArray : null
    };
    if (slotMapping && props) {
        Object.keys(slotMapping)
            .forEach(function (slotName) {
            slots[slotName] = props[slotMapping[slotName]] || [];
        });
    }
    Object.keys(slots)
        .forEach(function (slotName) {
        var slot = slots[slotName];
        if (Array.isArray(slot)) {
            slot.forEach(function (slotChild, index) {
                if (typeof slotChild !== 'string') {
                    slots[slotName][index] = __assign({}, slotChild, { tag: exports.getComponentTag(slotChild) });
                }
            });
        }
    });
    vueComponent.$slots = slots;
};
exports.copyArgsToVueComponent = function (vueComponent, args) {
    if (args) {
        Object.keys(args)
            .forEach(function (argName) { return vueComponent[argName] = args[argName]; });
    }
};
exports.handleWatchedProperties = function (vueComponent, currentProps, nextProps) {
    if (vueComponent.watch) {
        exports.copyPropsToVueComponent(vueComponent, nextProps);
        exports.handleComputedProperties(vueComponent);
        Object.keys(vueComponent.watch)
            .forEach(function (watchedProperty) {
            if (currentProps[watchedProperty] !== nextProps[watchedProperty]) {
                vueComponent.watch[watchedProperty].apply(vueComponent, [nextProps[watchedProperty]]);
            }
        });
    }
};
exports.handleComputedProperties = function (vueComponent) {
    if (vueComponent.computed) {
        Object.keys(vueComponent.computed)
            .forEach(function (propertyName) {
            vueComponent[propertyName] = vueComponent.computed[propertyName].apply(vueComponent, []);
        });
    }
};
exports.getDefaultProps = function (vueComponent) {
    if (vueComponent.props) {
        var defaultProps = Object.keys(vueComponent.props).reduce(function (defaultProps, propName) {
            var propDef = vueComponent.props[propName];
            if (propDef.default) {
                return __assign({}, defaultProps, (_a = {}, _a[change_case_1.camelCase(propName)] = propDef.default, _a));
            }
            else {
                return defaultProps;
            }
            var _a;
        }, {});
        return Object.keys(defaultProps).length ? defaultProps : null;
    }
    else {
        return null;
    }
};
exports.addCompiledTemplateFunctionsToVueComponent = function (vueComponent, createElement) {
    vueComponent._self = { _c: createElement.bind(vueComponent) };
    vueComponent._t = function (slotName, fallback) {
        var slotValue = vueComponent.$slots[slotName];
        if (fallback && (!slotValue || !slotValue.length)) {
            return fallback;
        }
        else {
            return slotValue;
        }
    };
    vueComponent._v = function (text) { return text || ''; };
    vueComponent._s = function (text) { return text || ''; };
    vueComponent._e = function () { return null; };
};
exports.generateCreateElementFunctionForClass = function (classVueComponentInstance, instantiatedComponents, vueComponent) {
    return function (element, args, children) {
        if (typeof args !== 'object' || Array.isArray(args)) {
            //Children passed in as second argument
            return CreateReactElements_1.createReactElement(element, {}, args, instantiatedComponents, vueComponent);
        }
        else {
            return CreateReactElements_1.createReactElement(element, args, children, instantiatedComponents, vueComponent);
        }
    };
};
exports.applyPropOverridesToTopLevelElement = function (reactElement, tag, self) {
    var refFunc = function (e) {
        reactElement.ref(e);
        self.element = e;
        self.nextTickCallbacks.forEach(function (callback) { return callback.apply(_this.vueComponent, []); });
        self.nextTickCallbacks = [];
        self.hasUnrenderedStateChanges = false;
    };
    var elementWithPropOverrides = __assign({}, reactElement, { props: __assign({}, reactElement.props), tag: tag, ref: refFunc });
    if (self.vueComponent.className) {
        var existingClassName = elementWithPropOverrides.props.className || '';
        elementWithPropOverrides.props.className = [existingClassName, ' ', self.vueComponent.className].join('');
    }
    if (self.vueComponent.style) {
        var existingStyles = elementWithPropOverrides.props.style || {};
        elementWithPropOverrides.props.style = __assign({}, existingStyles, self.vueComponent.style);
    }
    if (self.vueComponent.id) {
        elementWithPropOverrides.props.id = self.vueComponent.id;
    }
    return elementWithPropOverrides;
};
exports.initData = function (vueComponent) {
    var state = null;
    if (vueComponent.data) {
        state = vueComponent.data();
        Object.keys(state).forEach(function (stateKey) {
            vueComponent[stateKey] = state[stateKey];
        });
    }
    return state;
};

//# sourceMappingURL=ReactClassRuntime.js.map
