import * as React from 'react';

import '../less/lists.less';

import {BlockMarginTypeEnum, getMarginTypeClass} from '../../utils/BlockMarginType';
import {IListItemProps} from './ListItem';

export interface IListBlockProps extends React.Props<any> {
    title?: string;
    label?: string;
    marginType?: BlockMarginTypeEnum;
    className?: string;
}

const ListBlockInner = (props: IListBlockProps) => {
    let listItems = React.Children.toArray(props.children) as React.ReactElement<IListItemProps>[];
    let containsListItemWithMedia = listItems.filter(listItem => listItem.props.mediaElement !== undefined).length > 0;

    return (
        <div className={`list-block${props.className ? ' ' + props.className: ''}${getMarginTypeClass(props.marginType)}${containsListItemWithMedia ? ' media-list' : ''}`}>
            <ul>
                {props.children}
            </ul>
        </div>
    );
};

export const ListBlock = (props: IListBlockProps) => {
    if (props.title) {
        return (
            <span>
                {props.title ? <div className="content-block-title">{props.title}</div> : null}
                {ListBlockInner(props)}
            </span>
        );
    } else {
        return ListBlockInner(props);
    }
};