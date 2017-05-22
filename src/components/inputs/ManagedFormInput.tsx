import * as React from 'react';
import {SelectableInput} from './SelectableInput';

export const ManagedFormInput = (props: any) => {
    switch(props.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
            return <SelectableInput {...props} />;
        default:
            return <input {...props} />;
    }
};

