import * as React from 'react';
import * as classNames from 'classnames';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {ColorsEnum} from '../utils/Colors';
import {Badge} from './Badge';
import {VueListItemContent} from '../../framework7-vue/framework7-vue';

import '../less/lists.less';

export interface IListItemContentProps extends React.Props<any> {
    title?: string | number;
    text?: string | number;
    media?: string;
    subtitle?: string | number;
    after?: string | number;
    badge?: string | number;
    badgeColor?: ColorsEnum;
    mediaList?: boolean;

    checkbox?: boolean;
    checked?: boolean;
    radio?: boolean;
    name?: string;
    value?: string | number;
    readonly?: boolean;
    required?: boolean;
    disabled?: boolean;

    onChange?: () => void;
    onClick?: () => void;

    contentStartSlot?: React.ReactElement<any>;
    contentSlot?: React.ReactElement<any>;
    mediaStartSlot?: React.ReactElement<any>;
    mediaSlot?: React.ReactElement<any>;
    innerStartSlot?: React.ReactElement<any>;
    innerSlot?: React.ReactElement<any>;
    afterStartSlot?: React.ReactElement<any>;
    afterSlot?: React.ReactElement<any>;
}

export const ListItemContent = reactifyF7Vue<IListItemContentProps>({
    component: VueListItemContent,
    tag: 'f7-list-item-content',
    events: [
      'click',
      'change'
    ],
    dependencyComponents: [
      Badge
    ], 
    slots: [
      'content-start',
      'content',
      'media-start',
      'media',
      'inner-start',
      'inner',
      'after-start',
      'after'
    ]
});