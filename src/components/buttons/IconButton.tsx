import * as React from 'react';

interface IIconButtonProps {
    onClick: Function;
    iconCls: string;
    additionalClassNames?: string;
}

export const IconButton = (props: IIconButtonProps) => {
    return (
        <a className={`button ${props.additionalClassNames || ''}`} onClick={props.onClick}>
            <i className={`icon ${props.iconCls}`}></i>
        </a>         
    );
}
    
