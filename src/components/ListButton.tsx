import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueListButton} from '../../framework7-vue/framework7-vue';

export interface IListButtonProps {
    title?: string | number;
    link?: string | boolean;
    external?: boolean;
    linkExternal?: boolean;
    back?: boolean;
    linkBack?: boolean;
    noFastclick?: boolean;
    linkNoFastclick?: boolean;

    // Panel
    openPanel?: string | boolean;
    closePanel?: boolean;

    // Popup
    openPopup?: string | boolean;
    closePopup?: boolean;

    // Popover
    openPopover?: string | boolean;
    closePopover?: boolean;

    // Login Screen
    openLoginScreen?: string | boolean;
    closeLoginScreen?: boolean;

    // Picker
    openPicker?: string | boolean;
    closePicker?: boolean;

    // Tab
    tabLink?: boolean | string;

    // Sortable
    openSortable?: string | boolean;
    closeSortable?: boolean;
    toggleSortable?: string | boolean;

    onClick?: () => void;
}

export const ListButton = reactifyF7Vue<IListButtonProps>({
    component: VueListButton,
    tag: 'f7-list-button'
});