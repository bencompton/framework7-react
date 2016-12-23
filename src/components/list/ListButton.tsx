import * as React from 'react';
import * as classNames from 'classnames';

export interface IListButtonProps {
    title: string | number;
    link: string | boolean;
    external: boolean;
    linkExternal: boolean;
    back: boolean;
    linkBack: boolean;
    noFastclick: boolean;
    linkNoFastclick: boolean;

    // Panel
    openPanel: string | boolean;
    closePanel: boolean;

    // Popup
    openPopup: string | boolean;
    closePopup: boolean;

    // Popover
    openPopover: string | boolean;
    closePopover: boolean;

    // Login Screen
    openLoginScreen: string | boolean;
    closeLoginScreen: boolean;

    // Picker
    openPicker: string | boolean;
    closePicker: boolean;

    // Tab
    tabLink: boolean | string;

    // Sortable
    openSortable: string | boolean;
    closeSortable: boolean;
    toggleSortable: string | boolean;

    onClick: () => void;
}

export class ListButton extends React.Component<IListButtonProps, any> {
    private get classesObject() {
        const props = this.props;
        let classesObject = {
          'external': props.external || props.linkExternal,
          'back': props.back || props.linkBack,
          'no-fastclick': props.noFastclick || props.linkNoFastclick
        };

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

        return classesObject;
    }

    render() {
        let linkProps = {
            className: classNames('item-link list-button', this.classesObject),
            href: typeof this.props.link !== 'string' ? '#' : this.props.link,
            'data-panel': typeof this.props.openPanel === 'string' ? this.props.openPanel : false,
            'data-popup': typeof this.props.openPopup === 'string' ? this.props.openPopup : false,
            'data-popover': typeof this.props.openPopover === 'string' ? this.props.openPopover : false,
            'data-picker': typeof this.props.openPicker === 'string' ? this.props.openPicker : false,
            'data-login-screen': typeof this.props.openLoginScreen === 'string' ? this.props.openLoginScreen : false,
            'data-sortable': typeof this.props.openSortable === 'string' ? this.props.openSortable : (typeof this.props.toggleSortable === 'string' ? this.props.toggleSortable : false),
            'data-tab': typeof this.props.tabLink === 'string' ? this.props.tabLink : false,
            onClick: this.props.onClick,
            children: null
        };
        
        linkProps.children = this.props.title ? this.props.title : this.props.children;
        
        return (
            <li>
                <a {...linkProps} />
            </li>
        );
    }
}