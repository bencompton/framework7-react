import * as React from 'react';

import {BlockMarginTypeEnum} from '../utilities/BlockMarginType';

export interface IContentBlockProps extends React.Props<any> {
    title?: string;
    marginType?: BlockMarginTypeEnum;
    background?: boolean;
}

export interface IContentBlockTitleProps extends React.Props<any> {
    title: string;
}

export const ContentBlockTitle = (props: IContentBlockTitleProps) => {
    return <div className="content-block-title">{props.title}</div>;
};

const ContentBlockInner = (props: React.Props<any>) => {
    return <div className="content-block-inner">{props.children}</div>;
};

export const ContentBlock = (props: IContentBlockProps) => {
    if (props.title) {
        return (
            <span>
                {props.title ? <ContentBlockTitle title={props.title} /> : null}
                {props.background ? <ContentBlockInner>{props.children}</ContentBlockInner> : props.children}
            </span>
        );
    } else {
        return props.background ? <ContentBlockInner>{props.children}</ContentBlockInner> : props.children;
    }
};