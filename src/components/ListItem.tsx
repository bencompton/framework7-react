import * as React from 'react';
import * as classNames from 'classnames';

import '../less/lists.less';

import {ListItemContent} from './ListItemContent';
import {ColorsEnum} from '../utils/Colors';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueListItem} from '../../framework7-vue/framework7-vue';

export interface IListItemProps extends React.Props<any> {
    title?: string | number;
    text?: string | number;
    media?: string;
    subtitle?: string | number;

    // Link Props
    link?: string | boolean;
    linkExternal?: boolean;
    linkBack?: boolean;
    linkNoFastclick?: boolean;

    linkForce?: boolean;
    linkReload?: boolean;
    linkAnimatePages?: boolean;
    linkIgnoreCache?: boolean;
    linkPageName?: string;
    linkTemplate?: string;

    linkView?: string;
    linkOpenPanel?: string | boolean;
    linkClosePanel?: boolean;
    linkOpenPopup?: string | boolean;
    linkClosePopup?: boolean,
    linkOpenPopover?: string | boolean;
    linkClosePopover?: boolean;
    linkOpenLoginScreen?: string | boolean;
    linkCloseLoginScreen?: boolean,
    linkOpenPicker?: string | boolean;
    linkClosePicker?: boolean;
    linkOpenSortable?: boolean;

    after?: string | number;
    badge?: string | number;
    badgeColor?: ColorsEnum;
    mediaItem?: boolean;
    mediaListItem?: boolean;
    mediaList?: boolean;
    mediaListComputed?: boolean;
    divider?: boolean;
    groupTitle?: boolean;
    dividerOrGroupTitle?: boolean;
    swipeout?: boolean;
    sortable?: boolean;
    sortableComputed?: boolean;
    accordionItem?: boolean;

    // Smart Select
    smartSelect?: boolean;
    smartSelectSearchbar?: boolean;
    smartSelectSearchbarPlaceholder?: string;
    smartSelectSearchbarCancel?: string;
    smartSelectPageTitle?: string;
    smartSelectBackText?: string;
    smartSelectBackOnSelect?: boolean;
    smartSelectVirtualList?: boolean;
    smartSelectVirtualListHeight?: number;
    smartSelectOpenIn?: string; //popup or picker or page
    smartSelectNavbarTheme?: string;
    smartSelectFormTheme?: string;

    // Inputs
    checkbox?: boolean;
    checked?: boolean;
    radio?: boolean;
    name?: string;
    value?: string | number;
    readonly?: boolean;
    required?: boolean;
    disabled?: boolean;

    contentStartSlot?: React.ReactElement<any>;
    contentSlot?: React.ReactElement<any>;
    mediaStartSlot?: React.ReactElement<any>;
    mediaSlot?: React.ReactElement<any>;
    innerStartSlot?: React.ReactElement<any>;
    innerSlot?: React.ReactElement<any>;
    afterStartSlot?: React.ReactElement<any>;
    afterSlot?: React.ReactElement<any>;
    rootSlot?: React.ReactElement<any>;
    rootStartSlot?: React.ReactElement<any>;

    onClick?: (event?: any) => void;
    onSwipeoutDeleted?: (event?: any) => void;
    onSwipeoutDelete?: (event?: any) => void;
    onSwipeoutClose?: (event?: any) => void;
    onSwipeoutClosed?: (event?: any) => void;
    onSwipeoutOpen?: (event?: any) => void;
    onSwipeoutOpened?: (event?: any) => void;
    onSwipeout?: (event?: any) => void;
    onAccordionClose?: (event?: any) => void;
    onAccordionClosed?: (event?: any) => void;
    onAccordionOpen?: (event?: any) => void;
    onAccordionOpened?: (event?: any) => void;
    onChange?: (event?: any) => void;
}

export const ListItem = reactifyF7Vue<IListItemProps>({
    component: VueListItem,
    tag: 'f7-list-item',
    events: [
        'click',
        'swipeout:deleted',
        'swipeout:delete',
        'swipeout:close',
        'swipeout:closed',
        'swipeout:open',
        'swipeout:opened',
        'swipeout',
        'accordion:close',
        'accordion:closed',
        'accordion:open',
        'accordion:opened',
        'change'
    ],
    instantiatedComponents: [
        ListItemContent
    ],
    slots: [
      'content-start',
      'content',
      'media-start',
      'media',
      'inner-start',
      'inner',
      'after-start',
      'after',
      'root',
      'root-start'
    ]
});