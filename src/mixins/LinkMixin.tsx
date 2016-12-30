import * as React from 'react';

import {ColorsEnum} from '../utils/Colors';
import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueLinkMixin} from '../../framework7-vue/framework7-vue';

export interface ILinkProps {
    noLinkClass?: boolean;
    noFastclick?: boolean;

    external?: boolean;
    color?: ColorsEnum;
    bg?: string;
    theme?: ColorsEnum;
    text?: string;
    iconOnly?: boolean;
    icon?: string;
    iconMaterial?: string;
    iconIon?: string;
    iconFa?: string;
    iconF7?: string;
    iconIfMaterial?: string;
    iconIfIos?: string;
    rippleColor?: ColorsEnum;
    href?: string;

    // Button
    round?: boolean;
    fill?: boolean;
    big?: boolean;
    raised?: boolean;

    // Router
    force?: boolean;
    reload?: boolean;
    animatePages?: boolean;
    ignoreCache?: boolean;
    pageName?: string;
    template?: string;

    // View
    view?: string;

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

    // Active
    active?: boolean;

    // Badge
    badge?: string | number;
    iconBadge?: string | number;
    badgeColor?: ColorsEnum;

    // Back Link
    back?: boolean;

    onClick?: () => void;

    className?: string;
}

export const LinkMixin = reactifyF7Vue<ILinkProps>({
    component: VueLinkMixin,
    tag: 'f7-link-mixin'
});