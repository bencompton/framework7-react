import * as React from 'react';

import '../../less/forms.less';

export interface IBackButtonProps {
    onClick: () => void;
    text?: string;
}

export const BackButton = (props: IBackButtonProps) => {
    return (
        <a className="back link" onClick={props.onClick} role="button">
            <i className="icon icon-back" />
            <span>{props.text || 'Back'}</span>
        </a>
    );
};