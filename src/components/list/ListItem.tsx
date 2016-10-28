import * as React from 'react';

export interface IListItemProps extends React.Props<any> {
    title?: string;
    afterTitleText?: string;
    subTitle?: string;
    text?: string;
    showAsLink?: boolean;   
    onClick?: () => void;
    mediaElement?: React.ReactElement<any>;
    className?: string;
}

const ListItemTitle = (props: IListItemProps) => {
    return (
        <div className="item-title-row">
            {props.title ? <div className="item-title">{props.title}</div> : null}
            {props.afterTitleText ? <div className="item-after">{props.afterTitleText}</div> : null}
        </div>
    );
};

const ListItemInner = (props: IListItemProps) => {
    return (
        <div className="item-inner">
            {(props.title || props.afterTitleText) ? ListItemTitle(props) : null}
            {props.subTitle ? <div className="item-subtitle">{props.subTitle}</div>: null}
            {props.text ? <div className="item-text">{props.text}</div> : null}
        </div>
    );
};

const ListItemMedia = (props: IListItemProps) => {
    return (
        <div className="item-media">{props.mediaElement}</div>
    );
};

export const ListItem = (props: IListItemProps) => {
    if (props.showAsLink) {
        return (
            <li onClick={props.onClick} className={props.className}>
                <a className="item-link item-content">
                    {props.mediaElement ? ListItemMedia(props) : null}
                    {ListItemInner(props)}
                </a>
            </li>
        );
    } else {
        return (
            <li onClick={props.onClick} className={props.className}>
                <div className="item-content">
                    {props.mediaElement ? ListItemMedia(props) : null}
                    {ListItemInner(props)}
                </div>
            </li>
        );
    }
};