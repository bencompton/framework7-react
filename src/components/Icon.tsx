import * as React from 'react';

export interface IIconProps {
    iconClass: string;
    onClick?: () => void;
    showAsLink?: boolean;
}

const IconInner = (props: IIconProps) => {
    return <i className={`icon ${props.iconClass}`} onClick={props.onClick} role="img" />;
};

export const Icon = (props: IIconProps) => {
    if (props.showAsLink) {
        return <a className="link icon-only" onClick={props.onClick} role="button"><IconInner iconClass={props.iconClass} /></a>;
    } else {
        return React.createElement(IconInner, props);
    }
};