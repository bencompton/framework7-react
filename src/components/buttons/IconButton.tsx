import * as React from 'react';

import {Icon} from '../Icon';

export interface IIconButtonProps {
    onClick: Function;
    iconCls: string;
    additionalClassNames?: string;
}

export const IconButton = (props: IIconButtonProps) => {
    return (
        <a className={`button ${props.additionalClassNames || ''}`} onClick={props.onClick}>
            <Icon iconClass={props.iconCls} />
        </a>         
    );
}
    
