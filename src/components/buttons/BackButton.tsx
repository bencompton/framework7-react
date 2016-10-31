import * as React from 'react';

export interface IBackButtonProps {
    onClick: () => void;
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