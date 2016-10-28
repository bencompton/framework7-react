import * as React from 'react';

export interface IBackButtonProps {
    onClick: Function;
    text?: string;
}

export const BackButton = (props: IBackButtonProps) => {
    return (
        <a className="back link" onClick={props.onClick}>
            <i className="icon icon-back"></i>
            <span>{props.text || 'Back'}</span>
        </a>    
    );
}