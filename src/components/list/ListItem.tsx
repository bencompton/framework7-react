import * as React from 'react';
import * as classNames from 'classnames';

import '../../less/lists.less';

import {ListItemContent} from './ListItemContent';
import {ColorsEnum} from '../../utils/Colors';

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

    onClick?: () => void;
    onChange?: () => void;

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
}

export class ListItem extends React.Component<IListItemProps, any> {
    private get dividerOrGroupTitle() {
        return this.props.divider || this.props.groupTitle;
    }

    private get mediaListComputed() {
        return this.props.mediaList || this.props.mediaItem;
    }

    private get itemContentEl() {
      const props = this.props;

      // Item Content
      return <ListItemContent {...{
          title: props.title,
          text: props.text,
          media: props.media,
          subtitle: props.subtitle,
          after: props.after,
          badge: props.badge,
          badgeColor: props.badgeColor,
          mediaList: this.mediaListComputed,

          checkbox: props.checkbox,
          checked: props.checked,
          radio: props.radio,
          name: props.name,
          value: props.value,
          readonly: props.readonly,
          required: props.required,
          disabled: props.disabled,

          onClick: props.onClick,
          onChange: props.onChange,
        
          contentStartSlot: props.contentStartSlot,
          contentSlot: props.contentSlot,
          mediaStartSlot: props.mediaStartSlot,
          mediaSlot: props.mediaSlot,
          innerStartSlot: props.innerStartSlot,
          innerSlot: props.innerSlot,
          afterStartSlot: props.afterStartSlot,
          afterSlot: props.afterSlot
      }}>
        {props.swipeout || props.accordionItem ? [] : props.children}
      </ListItemContent>
    }

    private get linkEl() {
      if (this.props.link || this.props.accordionItem || this.props.smartSelect) {
          const classes = classNames({

          });

          const props = {
            href: this.props.link === true || this.props.accordionItem || this.props.smartSelect ? '#' : this.props.link as string,
            'data-searchbar': this.props.smartSelectSearchbar,
            'data-searchbar-paceholder': this.props.smartSelectSearchbarPlaceholder,
            'data-searchbar-cancel': this.props.smartSelectSearchbarCancel,
            'data-page-title': this.props.smartSelectPageTitle,
            'data-back-text': this.props.smartSelectBackText,
            'data-back-on-select': this.props.smartSelectBackOnSelect,
            'data-virtual-list': this.props.smartSelectVirtualList,
            'data-virtual-list-height': this.props.smartSelectVirtualListHeight,
            'data-open-in': this.props.smartSelectOpenIn,
            'data-navbar-theme': this.props.smartSelectNavbarTheme,
            'data-form-theme': this.props.smartSelectFormTheme,

            'data-view': typeof this.props.linkView === 'string' ? this.props.linkView : false,
            'data-panel': typeof this.props.linkOpenPanel === 'string' ? this.props.linkOpenPanel : false,
            'data-popup': typeof this.props.linkOpenPopup === 'string' ? this.props.linkOpenPopup : false,
            'data-popover': typeof this.props.linkOpenPopover === 'string' ? this.props.linkOpenPopover : false,
            'data-picker': typeof this.props.linkOpenPicker === 'string' ? this.props.linkOpenPicker : false,
            'data-login-screen': typeof this.props.linkOpenLoginScreen === 'string' ? this.props.linkOpenLoginScreen : false,
            //'data-sortable': typeof this.props.linkOpenSortable === 'string' ? this.props.linkOpenSortable : (typeof this.props.linkToggleSortable === 'string' ? this.props.linkToggleSortable : false),

            'data-force': this.props.linkForce,
            'data-reload': this.props.linkReload,
            'data-animate-pages': this.props.linkAnimatePages,
            'data-ignore-cache': this.props.linkIgnoreCache,
            'data-page-name': typeof this.props.linkPageName === 'string' ? this.props.linkPageName : false,
            'data-template': typeof this.props.linkTemplate === 'string' ? this.props.linkTemplate : false,

            className: classes,
            children: this.itemContentEl,
            onClick: this.props.onClick
          };

          return <a {...props} />
      }
    }

    public render() {
     let liChildren: (React.ReactElement<any> | string | number)[];
     
      if (this.props.dividerOrGroupTitle) {
        liChildren = [this.props.children ? <span>{this.props.children}</span> : this.props.title];
      } else {
        const linkItemEl = (this.props.link || this.props.smartSelect || this.props.accordionItem) ? this.linkEl : this.itemContentEl;
        
        if (this.props.swipeout) {
          liChildren = [<div className="swipeout-content">{linkItemEl}</div>];
        } else {
          liChildren = [linkItemEl];
        }

        if (this.props.sortable) {
          liChildren.push(<div className="sortable-handler"></div>);
        }

        if (this.props.swipeout || this.props.accordionItem) {
          liChildren.concat(React.Children.toArray(this.props.children));
        }

        liChildren.unshift(this.props.rootStartSlot);
        liChildren.push(this.props.rootSlot);
      }

      const classes = classNames({
        'item-divider' : this.props.divider,
        'list-group-title': this.props.groupTitle,
        'swipeout': this.props.swipeout,
        'accordion-item': this.props.accordionItem
      });

      return <li className={classes}>{liChildren}</li>;
    }
}