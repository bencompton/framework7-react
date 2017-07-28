import * as React from 'react';
import {SelectableInput} from './SelectableInput';

export const ManagedFormInput = (props: any) => {
    const renamedProps = {
        name: props.name,
        type: props.type,
        placeholder: props.placeholder,
        id: props.id,
        value: props.value || '',
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

    switch(props.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
            return <SelectableInput {...renamedProps} />;
        case 'textarea':
            return <textarea {...renamedProps} />;      
        default: 
            return <input {...renamedProps} />;
    }
}; 