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
var SelectableInput = (function (_super) {
    __extends(SelectableInput, _super);
    function SelectableInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectableInput.prototype.saveRef = function (element) {
        this.element = element;
    };
    SelectableInput.prototype.componentDidMount = function () {
        this.element.checked = this.props.checked;
        this.element.addEventListener('change', this.props.onChange);
    };
    SelectableInput.prototype.componentDidUpdate = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.element) {
                _this.element.checked = _this.props.checked;
            }
        });
    };
    SelectableInput.prototype.render = function () {
        return React.createElement("input", __assign({ type: this.props.type, ref: this.saveRef.bind(this) }, this.props));
    };
    return SelectableInput;
}(React.Component));
exports.SelectableInput = SelectableInput;

//# sourceMappingURL=SelectableInput.js.map
