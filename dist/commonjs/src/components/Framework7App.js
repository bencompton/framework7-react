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
var router_1 = require("../../framework7-vue/router");
var Framework7_1 = require("../../framework7/Framework7");
var OverscrollFix_1 = require("../utils/OverscrollFix");
var Framework7App = (function (_super) {
    __extends(Framework7App, _super);
    function Framework7App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.framework7 = null;
        _this.framework7InitCallbacks = [];
        _this.routeChangeCallbacks = {};
        return _this;
    }
    Framework7App.prototype.getChildContext = function () {
        var _this = this;
        return {
            framework7AppContext: {
                getFramework7: this.getFramework7.bind(this),
                theme: {
                    ios: this.props.themeType === 'ios',
                    material: this.props.themeType === 'material'
                },
                onRouteChange: this.onRouteChange.bind(this),
                unregisterRouteChange: this.unregisterRouteChange.bind(this),
                getCurrentRoute: function () { return _this.currentRoute; },
                getRouter: function () { return _this.router; }
            }
        };
    };
    Framework7App.prototype.render = function () {
        return React.createElement("span", null, this.props.children);
    };
    Framework7App.prototype.componentDidMount = function () {
        this.handleOverscrollFix();
        this.initFramework7();
    };
    Framework7App.prototype.handleOverscrollFix = function () {
        if (this.props.applyOverscrollFix) {
            OverscrollFix_1.applyOverscrollFix();
        }
    };
    Framework7App.prototype.initFramework7 = function () {
        var _this = this;
        this.framework7 = new Framework7_1.Framework7(__assign({ material: this.props.themeType === 'material' }, this.props));
        var router = this.router = new router_1.default(this.props.routes, this.framework7, Framework7_1.Dom7);
        router.setRouteChangeHandler(function (route) {
            _this.currentRoute = route;
            if (_this.props.onRouteChange) {
                _this.props.onRouteChange(route);
            }
            Object.keys(_this.routeChangeCallbacks).forEach(function (componentId) {
                //Need this if statement in case a component gets unregistered during this forEach                
                if (_this.routeChangeCallbacks[componentId]) {
                    _this.routeChangeCallbacks[componentId](route);
                }
            });
            return false;
        });
        if (this.props.onFramework7Init) {
            this.props.onFramework7Init(this.framework7);
        }
        this.framework7InitCallbacks.forEach(function (callback) {
            callback(_this.framework7);
        });
        if (this.props.stateKernel) {
            Framework7_1.Dom7(document).on('click', 'a', function (e) { return e.preventDefault(); });
            this.props.stateKernel.setFramework7(this.framework7);
            this.props.stateKernel.setRouter(this.router);
        }
    };
    Framework7App.prototype.getFramework7 = function (callback) {
        if (this.framework7) {
            callback(this.framework7);
        }
        else {
            this.framework7InitCallbacks.push(callback);
        }
    };
    Framework7App.prototype.onRouteChange = function (componentId, callback) {
        this.routeChangeCallbacks[componentId] = callback;
    };
    Framework7App.prototype.unregisterRouteChange = function (componentId) {
        delete this.routeChangeCallbacks[componentId];
    };
    Framework7App.childContextTypes = {
        framework7AppContext: prop_types_1.object
    };
    return Framework7App;
}(React.Component));
exports.Framework7App = Framework7App;
;

//# sourceMappingURL=Framework7App.js.map
