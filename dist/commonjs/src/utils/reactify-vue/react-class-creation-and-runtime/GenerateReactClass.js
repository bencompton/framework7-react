"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var VueComponentClass_1 = require("./VueComponentClass");
var ReactClassRuntime_1 = require("./ReactClassRuntime");
exports.generateReactClass = function (instantiatedComponents, vueComponent, slots, name, tag, mixin, args) {
    var vueComponentClass = VueComponentClass_1.convertVueComponentToClass(vueComponent);
    ReactClassRuntime_1.copyMethodsToVueComponent(vueComponent);
    ReactClassRuntime_1.copyArgsToVueComponent(vueComponent, args);
    var reactClass = (function (_super) {
        __extends(reactClass, _super);
        function reactClass(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.vueComponent = new vueComponentClass(_this.props, _this);
            _this.createElement = ReactClassRuntime_1.generateCreateElementFunctionForClass(_this.vueComponent, instantiatedComponents, _this.vueComponent);
            ReactClassRuntime_1.copyPropsToVueComponent(_this.vueComponent, _this.props);
            ReactClassRuntime_1.copySlotsToVueComponent(_this.vueComponent, slots, _this.props);
            var state = ReactClassRuntime_1.initData(_this.vueComponent);
            ReactClassRuntime_1.handleComputedProperties(_this.vueComponent);
            ReactClassRuntime_1.addCompiledTemplateFunctionsToVueComponent(_this.vueComponent, _this.createElement);
            if (_this.props.__onInit) {
                _this.props.__onInit(_this);
            }
            _this.state = state;
            return _this;
        }
        reactClass.prototype.componentWillUpdate = function () {
            if (this.vueComponent.beforeUpdate)
                this.vueComponent.beforeUpdate();
        };
        reactClass.prototype.componentDidUpdate = function () {
            if (this.vueComponent.updated)
                this.vueComponent.updated();
        };
        reactClass.prototype.componentDidMount = function () {
            if (this.vueComponent.mounted)
                this.vueComponent.mounted();
            if (this.props.__onMount)
                this.props.__onMount(this);
            this.didMount = true;
        };
        reactClass.prototype.componentWillUnmount = function () {
            if (vueComponent.beforeDestroy)
                vueComponent.beforeDestroy();
        };
        reactClass.prototype.componentWillReceiveProps = function (nextProps) {
            ReactClassRuntime_1.handleWatchedProperties(this.vueComponent, this.props, nextProps);
        };
        reactClass.prototype.render = function () {
            if (this.hasRendered) {
                //Only do this after the first render, since it happens in getInitialState the first time
                ReactClassRuntime_1.copyPropsToVueComponent(this.vueComponent, this.props);
                ReactClassRuntime_1.copySlotsToVueComponent(this.vueComponent, slots, this.props);
                ReactClassRuntime_1.handleComputedProperties(this.vueComponent);
            }
            var reactElement = this.vueComponent.render(this.createElement.bind(this));
            this.hasRendered = true;
            if (reactElement) {
                return ReactClassRuntime_1.applyPropOverridesToTopLevelElement(reactElement, tag, this);
            }
            else {
                return null;
            }
        };
        reactClass.prototype.callVueMethod = function (methodName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return this.vueComponent[methodName](args);
        };
        return reactClass;
    }(React.Component));
    reactClass.tag = tag;
    reactClass.vueComponent = vueComponent;
    reactClass.getVueComponentInstance = function () { return _this.vueComponent; };
    reactClass.displayName = name;
    var defaultProps = ReactClassRuntime_1.getDefaultProps(vueComponent);
    if (defaultProps)
        reactClass.defaultProps = defaultProps;
    return reactClass;
};

//# sourceMappingURL=GenerateReactClass.js.map
