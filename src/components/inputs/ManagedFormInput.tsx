import * as React from 'react';
import {SelectableInput} from './SelectableInput';

export const ManagedFormInput = (props: any) => {     
    switch(props.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
            return <SelectableInput type={props.type} checked={props.checked} onChange={props.onChange} />;         
        default: 
            return <input type={props.type} onClick={props.onClick} onChange={props.onChange} value={props.value} placeholder={props.placeholder} />;
    }
}; 