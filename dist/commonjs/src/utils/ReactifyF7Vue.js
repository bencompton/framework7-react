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
var prop_types_1 = require("prop-types");
var change_case_1 = require("change-case");
var ReactifyVue_1 = require("./reactify-vue/ReactifyVue");
var Framework7_1 = require("../../framework7/Framework7");
var Framework7_2 = require("../../framework7/Framework7");
var nextComponentId = 0;
exports.reactifyF7Vue = function (args) {
    var innerComponent = ReactifyVue_1.reactifyVue({
        component: args.component,
        name: "F7" + args.name,
        tag: args.tag,
        slots: !args.slots ? null : args.slots.reduce(function (slotMap, currentSlotName) {
            return __assign({}, slotMap, (_a = {}, _a[currentSlotName] = change_case_1.camelCase(currentSlotName) + 'Slot', _a));
            var _a;
        }, {}),
        events: !args.events ? null : args.events.reduce(function (eventMap, currentEventName) {
            return __assign({}, eventMap, (_a = {}, _a[currentEventName] = change_case_1.camelCase('on-' + currentEventName.split(':').join('-')), _a));
            var _a;
        }, {}),
        instantiatedComponents: args.instantiatedComponents,
        args: __assign({}, args.args, { $$: Framework7_1.Dom7, $t7: Framework7_2.Template7 }),
        mixin: args.mixin
    });
    var reactClass = (function (_super) {
        __extends(reactClass, _super);
        function reactClass(props, context) {
            var _this = _super.call(this, props, context) || this;
            var framework7AppContext = _this.context.framework7AppContext;
            framework7AppContext.getFramework7(function (f7) {
                _this.framework7 = f7;
            });
            Object.defineProperty(args.component, '$f7Router', {
                get: framework7AppContext.getRouter,
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(args.component, '$route', {
                get: framework7AppContext.getCurrentRoute,
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(args.component, '$f7', {
                get: function () { return _this.framework7; },
                enumerable: true,
                configurable: true
            });
            _this.componentId = nextComponentId++;
            return _this;
        }
        reactClass.prototype.componentWillUnmount = function () {
            var framework7AppContext = this.context.framework7AppContext;
            framework7AppContext.unregisterRouteChange(this.componentId);
        };
        reactClass.prototype.render = function () {
            var _this = this;
            var props = this.props;
            var framework7AppContext = this.context.framework7AppContext;
            var innerEl = React.createElement(innerComponent, __assign({}, props, { $theme: framework7AppContext.theme, __onMount: function (self) {
                    var tag = args.tag;
                    framework7AppContext.getFramework7(function (f7) {
                        if (self.vueComponent.onF7Init) {
                            self.vueComponent.onF7Init(f7);
                        }
                    });
                    framework7AppContext.onRouteChange(_this.componentId, function (route) {
                        if (self.vueComponent.onRouteChange) {
                            self.vueComponent.onRouteChange(route);
                        }
                    });
                } }));
            return innerEl;
        };
        return reactClass;
    }(React.Component));
    reactClass.tag = args.tag;
    reactClass.vueComponent = args.component;
    reactClass.contextTypes = {
        framework7AppContext: prop_types_1.object
    };
    return reactClass;
};

//# sourceMappingURL=ReactifyF7Vue.js.map
