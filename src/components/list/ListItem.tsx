import * as React from 'react';

import '../../less/lists.less';

import {ListItemContent} from './ListItemContent';

export interface IListItemProps extends React.Props<any> {
    title: string | number;
    text: string | number;
    media: string;
    subtitle: string | number;

    // Link Props
    link: string | boolean;
    linkExternal: boolean;
    linkBack: boolean;
    linkNoFastclick: boolean;

    linkForce: boolean;
    linkReload: boolean;
    linkAnimatePages: boolean;
    linkIgnoreCache: boolean;
    linkPageName: string;
    linkTemplate: string;

    linkView: string;
    linkOpenPanel: string | boolean;
    linkClosePanel: boolean;
    linkOpenPopup: string | boolean;
    linkClosePopup: boolean,
    linkOpenPopover: string | boolean;
    linkClosePopover: boolean;
    linkOpenLoginScreen: string | boolean;
    linkCloseLoginScreen: boolean,
    linkOpenPicker: string | boolean;
    linkClosePicker: boolean;

    after: string | number;
    badge: string | number;
    badgeColor: string;
    mediaItem: boolean;
    mediaListItem: boolean;
    mediaList: boolean;
    mediaListComputed: boolean;
    divider: boolean;
    groupTitle: boolean;
    dividerOrGroupTitle: boolean;
    swipeout: boolean;
    sortable: boolean;
    sortableComputed: boolean;
    accordionItem: boolean;

    // Smart Select
    smartSelect: boolean;
    smartSelectSearchbar: boolean;
    smartSelectSearchbarPlaceholder: string;
    smartSelectSearchbarCancel: string;
    smartSelectPageTitle: string;
    smartSelectBackText: string;
    smartSelectBackOnSelect: boolean;
    smartSelectVirtualList: boolean;
    smartSelectVirtualListHeight: number;
    smartSelectOpenIn: string; //popup or picker or page
    smartSelectNavbarTheme: string;
    smartSelectFormTheme: string;

    // Inputs
    checkbox: boolean;
    checked: boolean;
    radio: boolean;
    name: string;
    value: string | number;
    readonly: boolean;
    required: boolean;
    disabled: boolean;

    onClick: () => void;
    onChange: () => void;

    contentStartSlot: React.ReactElement<any>;
    contentSlot: React.ReactElement<any>;
    mediaStartSlot: React.ReactElement<any>;
    mediaSlot: React.ReactElement<any>;
    innerStartSlot: React.ReactElement<any>;
    innerSlot: React.ReactElement<any>;
    afterStartSlot: React.ReactElement<any>;
    afterSlot: React.ReactElement<any>;
    rootSlot: React.ReactElement<any>;
    rootStartSlot: React.ReactElement<any>;
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
      return React.createElement(ListItemContent, {
          title: props.title,
          text: props.text,
          media: props.media,
          subtitle: props.subtitle,
          after: props.after,
          badge: props.badge,
          badgeColor: props.badgeColor,
          mediaList: props.mediaListComputed,
          accordionItem: props.accordionItem,

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
          
          children: [
            props.contentStartSlot,
            props.contentSlot,
            props.mediaStartSlot,
            props.mediaSlot,
            props.innerStartSlot,
            props.innerSlot,
            props.afterStartSlot,
            props.afterSlot,
            (props.swipeout || props.accordionItem ? [] : props.children)]
      });
    }

    private get linkEl() {
      if (this.props.link || this.props.accordionItem || this.props.smartSelect) {
          const classes = classNames({

          });

          const props = {
            href: this.props.link === true || this.props.accordionItem || this.props.smartSelect ? '#' : this.props.link,
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
            'data-sortable': typeof this.props.linkOpenSortable === 'string' ? this.props.linkOpenSortable : (typeof this.props.linkToggleSortable === 'string' ? this.props.linkToggleSortable : false),

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
     let liChildren: (React.ReactElement<any> | string)[];
     
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
          liChildren.push(this.props.children);
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


// <script>
//   export default {
//     render: function (c) {
//       var liChildren, linkEl, itemContentEl;
//       const self = this;

//       // Item Content
//       itemContentEl = c('f7-list-item-content', {
//         props: {
//           'title': self.title,
//           'text': self.text,
//           'media': self.media,
//           'subtitle': self.subtitle,
//           'after': self.after,
//           'badge': self.badge,
//           'badge-color': self.badgeColor,
//           'media-list': self.mediaListComputed,
//           'accordion-item': self.accordionItem,

//           'checkbox': self.checkbox,
//           'checked': self.checked,
//           'radio': self.radio,
//           'name': self.name,
//           'value': self.value,
//           'readonly': self.readonly,
//           'required': self.required,
//           'disabled': self.disabled
//         },
//         on: (self.link || self.accordionItem || self.smartSelect) ? {} : {click: self.onClick, change: self.onChange}
//       }, [
//         self.$slots['content-start'], 
//         self.$slots.content,
//         self.$slots['media-start'],
//         self.$slots.media,
//         self.$slots['inner-start'],
//         self.$slots.inner,
//         self.$slots['after-start'],
//         self.$slots.after,
//         (self.swipeout || self.accordionItem ? [] : self.$slots.default)
//       ]);

//       // Link
//       if (self.link || self.accordionItem || self.smartSelect) {
//         linkEl = c('a', {
//           attrs: {
//             href: self.link === true || self.accordionItem || self.smartSelect ? '#' : self.link,
//             'data-searchbar': self.smartSelectSearchbar,
//             'data-searchbar-paceholder': self.smartSelectSearchbarPlaceholder,
//             'data-searchbar-cancel': self.smartSelectSearchbarCancel,
//             'data-page-title': self.smartSelectPageTitle,
//             'data-back-text': self.smartSelectBackText,
//             'data-back-on-select': self.smartSelectBackOnSelect,
//             'data-virtual-list': self.smartSelectVirtualList,
//             'data-virtual-list-height': self.smartSelectVirtualListHeight,
//             'data-open-in': self.smartSelectOpenIn,
//             'data-navbar-theme': self.smartSelectNavbarTheme,
//             'data-form-theme': self.smartSelectFormTheme,

//             'data-view': typeof self.linkView === 'string' ? self.linkView : false,
//             'data-panel': typeof self.linkOpenPanel === 'string' ? self.linkOpenPanel : false,
//             'data-popup': typeof self.linkOpenPopup === 'string' ? self.linkOpenPopup : false,
//             'data-popover': typeof self.linkOpenPopover === 'string' ? self.linkOpenPopover : false,
//             'data-picker': typeof self.linkOpenPicker === 'string' ? self.linkOpenPicker : false,
//             'data-login-screen': typeof self.linkOpenLoginScreen === 'string' ? self.linkOpenLoginScreen : false,
//             'data-sortable': typeof self.linkOpenSortable === 'string' ? self.linkOpenSortable : (typeof self.linkToggleSortable === 'string' ? self.linkToggleSortable : false),

//             'data-force': self.linkForce,
//             'data-reload': self.linkReload,
//             'data-animate-pages': self.linkAnimatePages,
//             'data-ignore-cache': self.linkIgnoreCache,
//             'data-page-name': typeof self.linkPageName === 'string' ? self.linkPageName : false,
//             'data-template': typeof self.linkTemplate === 'string' ? self.linkTemplate : false,
//           },
//           'class': {
//             'item-link': true,
//             'external': self.linkExternal,
//             'back': self.linkBack,
//             'no-fastclick': self.linkNoFastclick,
//             'smart-select': self.smartSelect,
//             'close-panel': self.linkClosePanel,
//             'open-panel': self.linkOpenPanel,
//             'close-popup': self.linkClosePopup,
//             'open-popup': self.linkOpenPopup,
//             'close-popover': self.linkClosePopover,
//             'open-popover': self.linkOpenPopover,
//             'close-picker': self.linkClosePicker,
//             'open-picker': self.linkOpenPicker,
//             'close-login-screen': self.linkCloseLoginScreen,
//             'open-login-screen': self.linkOpenLoginScreen,
//             'close-sortable': self.linkCloseSortable,
//             'open-sortable': self.linkOpenSortable,
//             'toggle-sortable': self.linkToggleSortable,
//           },
//           on: {
//             click: self.onClick
//           }
//         }, [itemContentEl])
//       }

//       if (self.dividerOrGroupTitle) {
//         liChildren = [c('span', self.$slots.default || self.title)]
//       }
//       else {
//         var linkItemEl = (self.link || self.smartSelect || self.accordionItem) ? linkEl : itemContentEl;
//         if (self.swipeout) {
//           liChildren = [c('div', {'class':{'swipeout-content': true}}, [linkItemEl])]
//         }
//         else {
//           liChildren = [linkItemEl];
//         }
//         if (self.sortableComputed) {
//           liChildren.push(c('div', {'class': {'sortable-handler': true}}));
//         }
//         if (self.swipeout || self.accordionItem) {
//           liChildren.push(self.$slots.default);
//         }
//         liChildren.unshift(self.$slots['root-start']);
//         liChildren.push(self.$slots.root);
//       }

//       return c(
//         'li',
//         {
//           'class': {
//             'item-divider' : self.divider,
//             'list-group-title': self.groupTitle,
//             'swipeout': self.swipeout,
//             'accordion-item': self.accordionItem
//           },
//           on: {
//             'swipeout:open': self.onSwipeoutOpen,
//             'swipeout:opened': self.onSwipeoutOpened,
//             'swipeout:close': self.onSwipeoutClose,
//             'swipeout:closed': self.onSwipeoutClosed,
//             'swipeout:delete': self.onSwipeoutDelete,
//             'swipeout:deleted': self.onSwipeoutDeleted,
//             'swipeout': self.onSwipeout,
//             'accordion:open': self.onAccOpen,
//             'accordion:opened': self.onAccOpened,
//             'accordion:close': self.onAccClose,
//             'accordion:closed': self.onAccClosed,
//           }
//         },
//         liChildren
//       )
//     },
//     props: {
//       'title': [String, Number],
//       'text': [String, Number],
//       'media': String,
//       'subtitle': [String, Number],

//       // Link Props
//       'link': [String, Boolean],
//       'link-external': Boolean,
//       'link-back': Boolean,
//       'link-no-fastclick': Boolean,

//       'link-force': Boolean,
//       'link-reload': Boolean,
//       'link-animate-pages': Boolean,
//       'link-ignore-cache': Boolean,
//       'link-page-name': String,
//       'link-template': String,

//       'link-view': String,
//       'link-open-panel': [String, Boolean],
//       'link-close-panel': Boolean,
//       'link-open-popup': [String, Boolean],
//       'link-close-popup': Boolean,
//       'link-open-popover': [String, Boolean],
//       'link-close-popover': Boolean,
//       'link-open-login-screen': [String, Boolean],
//       'link-close-login-screen': Boolean,
//       'link-open-picker': [String, Boolean],
//       'link-close-picker': Boolean,

//       'after': [String, Number],
//       'badge': [String, Number],
//       'badge-color': String,
//       'media-item': Boolean,
//       'media-list-item': Boolean,
//       'media-list': Boolean,
//       'media-list-computed': Boolean,
//       'divider': Boolean,
//       'group-title': Boolean,
//       'divider-or-group-title': Boolean,
//       'swipeout': Boolean,
//       'sortable': Boolean,
//       'sortable-computed': Boolean,
//       'accordion-item': Boolean,

//       // Smart Select
//       'smart-select': Boolean,
//       'smart-select-searchbar': Boolean,
//       'smart-select-searchbar-paceholder': String,
//       'smart-select-searchbar-cancel': String,
//       'smart-select-page-title': String,
//       'smart-select-back-text': String,
//       'smart-select-back-on-select': Boolean,
//       'smart-select-virtual-list': Boolean,
//       'smart-select-virtual-list-height': Number,
//       'smart-select-open-in': String, //popup or picker or page
//       'smart-select-navbar-theme': String,
//       'smart-select-form-theme': String,

//       // Inputs
//       'checkbox': Boolean,
//       'checked': Boolean,
//       'radio': Boolean,
//       'name': String,
//       'value': [String, Number],
//       'readonly': Boolean,
//       'required': Boolean,
//       'disabled': Boolean
//     },
//     computed: {
//       dividerOrGroupTitle: function () {
//         return this.divider || this.groupTitle;
//       },
//       sortableComputed: function () {
//         return this.sortable || this.$parent.sortable || this.$parent.sortableComputed;
//       },
//       mediaListComputed: function () {
//         return this.mediaList || this.mediaItem || this.$parent.mediaList || this.$parent.mediaListComputed;
//       }
//     },
//     methods: {
//       onClick: function (event) {
//         this.$emit('click', event)
//       },
//       onSwipeoutDeleted: function (event) {
//         this.$emit('swipeout:deleted', event)
//       },
//       onSwipeoutDelete: function (event) {
//         this.$emit('swipeout:delete', event)
//       },
//       onSwipeoutClose: function (event) {
//         this.$emit('swipeout:close', event)
//       },
//       onSwipeoutClosed: function (event) {
//         this.$emit('swipeout:closed', event)
//       },
//       onSwipeoutOpen: function (event) {
//         this.$emit('swipeout:open', event)
//       },
//       onSwipeoutOpened: function (event) {
//         this.$emit('swipeout:opened', event)
//       },
//       onSwipeout: function (event) {
//         this.$emit('swipeout', event)
//       },
//       onAccClose: function (event) {
//         this.$emit('accordion:close', event)
//       },
//       onAccClosed: function (event) {
//         this.$emit('accordion:closed', event)
//       },
//       onAccOpen: function (event) {
//         this.$emit('accordion:open', event)
//       },
//       onAccOpened: function (event) {
//         this.$emit('accordion:opened', event)
//       },
//       onChange: function (event) {
//         this.$emit('change', event)
//       }
//     }
//   }
// </script>