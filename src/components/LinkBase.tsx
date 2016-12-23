import * as React from 'react';

import {ColorsEnum, getColorCls} from '../utils/Colors';

export interface ILinkBaseProps {
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

export class LinkBase extends React.Component<ILinkBaseProps, any> {
    public static defaultProps: ILinkBaseProps = {
        href: '#'
    };
  
    public static contextTypes = {
        framework7AppContext: React.PropTypes.object
    };

    protected get classesObject() {
        const props = this.props;
        let classesObject = {};
        
        if (props.rippleColor) classesObject['ripple-color-' + props.rippleColor.toString()] = true;
        if (props.color) classesObject[getColorCls(props.color)] = true;
        if (props.theme) classesObject['theme-' + props.theme.toString()] = true;
        if (props.bg) classesObject['bg-' + props.bg] = true;

        classesObject['back'] = props.back;
        classesObject['external'] = props.external;
        classesObject['no-fastclick'] = props.noFastclick;

        // Button
        ['round', 'fill', 'big', 'raised'].forEach((prop, index) => {
          if (props[prop]) classesObject['button-' + prop] = true;
        });

        // Active
        classesObject['active'] = props.active;

        // Panel
        if (props.closePanel) classesObject['close-panel'] = true;
        if (props.openPanel) classesObject['open-panel'] = true;

        // Popup
        if (props.closePopup) classesObject['close-popup'] = true;
        if (props.openPopup) classesObject['open-popup'] = true;

        // Popover
        if (props.closePopover) classesObject['close-popover'] = true;
        if (props.openPopover) classesObject['open-popover'] = true;

        // Picker
        if (props.closePicker) classesObject['close-picker'] = true;
        if (props.openPicker) classesObject['open-picker'] = true;

        // Login Screen
        if (props.closeLoginScreen) classesObject['close-login-screen'] = true;
        if (props.openLoginScreen) classesObject['open-login-screen'] = true;

        // Sortable
        if (props.closeSortable) classesObject['close-sortable'] = true;
        if (props.openSortable) classesObject['open-sortable'] = true;
        if (props.toggleSortable) classesObject['toggle-sortable'] = true;

        // Tab
        if (props.tabLink) classesObject['tab-link'] = true;

        if (props.className) classesObject[props.className] = true;

        return classesObject;
    }

    protected get attributes() {
        const props = this.props;
        
        let attributesObject = {
          href: props.href
        };
        
        if ('force' in props) attributesObject['data-force'] = props.force;
        if ('reload' in props) attributesObject['data-reload'] = 'true';
        if ('animatePages' in props) attributesObject['data-animate-pages'] = 'true';
        if ('ignoreCache' in props) attributesObject['data-ignore-cache'] = 'true';
        if (props.pageName) attributesObject['data-page-name'] = props.pageName;
        if (props.template) attributesObject['data-template'] = props.template;
        if (props.view) attributesObject['data-view'] = props.view;

        if (typeof props.openPanel === 'string') attributesObject['data-panel'] = props.openPanel;
        if (typeof props.openPopup === 'string') attributesObject['data-popup'] = props.openPopup;
        if (typeof props.openPopover === 'string') attributesObject['data-popover'] = props.openPopover;
        if (typeof props.openPicker === 'string') attributesObject['data-picker'] = props.openPicker;
        if (typeof props.openLoginScreen === 'string') attributesObject['data-login-screen'] = props.openLoginScreen;
        if (typeof props.openSortable === 'string') attributesObject['data-sortable'] = props.openSortable;
        if (typeof props.toggleSortable === 'string') attributesObject['data-sortable'] = props.toggleSortable;
        if (typeof props.tabLink === 'string') attributesObject['data-tab'] = props.tabLink;

        return attributesObject;
    }
}