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
var SelectableInput_1 = require("./SelectableInput");
exports.ManagedFormInput = function (props) {
    var renamedProps = {
        name: props.name,
        type: props.type,
        placeholder: props.placeholder,
        id: props.id,
        value: props.value,
        size: props.size,
        accept: props.accept,
        autoComplete: props.autocomplete,
        autoCorrect: props.autocorrect,
        autoCapitalize: props.autocapitalize,
        spellCheck: props.spellcheck,
        autoFocus: props.autofocus,
        autoSave: props.autosave,
        checked: props.checked,
        disabled: props.disabled,
        max: props.max,
        maxLength: props.maxlength,
        min: props.min,
        minLength: props.minlength,
        step: props.step,
        multiple: props.multiple,
        readOnly: props.readonly,
        required: props.required,
        color: props.color,
        pattern: props.pattern,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onInput: props.onInput,
        onChange: props.onChange,
        onClick: props.onClick,
        onKeyPress: props.onKeypress,
        onKeyUp: props.onKeyUp,
        onKeyDown: props.onKeyDown,
        onCompositionStart: props.onCompositionstart,
        onCompositionUpdate: props.onCompositionupdate,
        onCompositionEnd: props.onCompositionend,
        onDoubleClick: props.onDblclick,
        onMouseDown: props.onMousedown,
        onMouseEnter: props.onMouseenter,
        onMouseLeave: props.onMouseleave,
        onMouseMove: props.onMousemove,
        onMouseOut: props.onMouseout,
        onMouseOver: props.onMouseover,
        onMouseUp: props.onMouseup,
        onWheel: props.onWheel,
        onSelect: props.onSelect
    };
    switch (props.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
            return React.createElement(SelectableInput_1.SelectableInput, __assign({}, renamedProps));
        default:
            return React.createElement("input", __assign({}, renamedProps));
    }
};

//# sourceMappingURL=ManagedFormInput.js.map
