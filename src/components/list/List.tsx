import * as React from 'react';
import * as classNames from 'classnames';

import {VirtualList, Framework7} from '../../Framework7';
import {IFramework7AppContext} from '../Framework7App';
import {IListItemProps, ListItem} from './ListItem';
import {ListButton} from './ListButton';

import '../../less/lists.less';

export interface IListProps {
      inset?: boolean;
      mediaList?: boolean;
      grouped?: boolean;
      sortable?: boolean;
      form?: boolean;
      label?: string;
      accordion?: boolean;
      contacts?: boolean;

      noHairlines?: boolean;
      noHairlinesBetween?: boolean;

      // Tab
      tab?: boolean;
      active?: boolean;

      // Virtual List
      virtual?: boolean,
      virtualInit?: boolean,
      virtualItems?: any[] | Object;
      virtualHeight?: number | Function;
      virtualRowsBefore?: number;
      virtualRowsAfter?: number;
      virtualCols?: number;
      virtualCache?: boolean;
      virtualFilteredOnly?: boolean;
      virtualSearchByItem?: Function;
      virtualSearchAll?: Function;
      virtualRenderItem?: Function;
}

export class List extends React.Component<IListProps, any> {
    private element: HTMLElement;
    private f7VirtualList: VirtualList;

    public static defaultProps: IListProps = {
        virtualInit: true,
        virtualCols: 1,
        virtualCache: true,
        virtualFilteredOnly: false
    };

    constructor(props: IListProps, context: any) {
        super(props, context);
        this.framework7AppContext.getFramework7((f7) => this.initVirtualList(f7));
    }

    public static contextTypes = {
        framework7AppContext: React.PropTypes.object
    };

    private get framework7AppContext() {
        return (this.context as any).framework7AppContext as IFramework7AppContext;
    }

    public componentWillUnmount() {
      if (!(this.props.virtual && this.props.virtualInit && this.f7VirtualList)) return;
      if (this.f7VirtualList.destroy) this.f7VirtualList.destroy();
    }

    public render() {
        const children = React.Children.toArray(this.props.children);
        const blockChildren = this.props.grouped ? children : <ul>{children}</ul>;
        let outOfList = [];
        let ulChildren = [];

        if (children && children.length) {
            children.forEach(child => {
                const type = (child as React.ReactElement<any>).type;

                if (type && !(type === 'li' || type === ListItem || type === ListButton)) {
                    outOfList.push(child);
                } else if (type && type === ListItem) {
                    const listItem = child as React.ReactElement<IListItemProps>;

                    ulChildren.push(React.cloneElement(child as React.ReactElement<IListItemProps>, {
                        mediaList: listItem.props.mediaList || this.props.mediaList,
                        sortable: listItem.props.sortable || this.props.sortable
                    } as IListItemProps));
                } else {
                    ulChildren.push(child);
                }            
            });
        }
      
        const classes = classNames('list-block', {
            'inset': this.props.inset,
            'media-list': this.props.mediaList,
            'sortable': this.props.sortable,
            'accordion-list': this.props.accordion,
            'contacts-block': this.props.contacts,
            'virtual-list': this.props.virtual,
            'tab': this.props.tab,
            'active': this.props.active,
            'no-hairlines': this.props.noHairlines,
            'no-hairlines-between': this.props.noHairlinesBetween          
        });

        const listBlockChildren = ulChildren.length > 0 ? [<ul>{ulChildren}</ul>, ...outOfList] : outOfList

        if (this.props.form) {
            return <div className={classes}>{listBlockChildren}</div>;
        } else {
            return <form className={classes}>{listBlockChildren}</form>;
        }      
    }

    //TODO: Virtual list
    private initVirtualList(f7: Framework7) {
        if (this.props.virtual || this.props.virtualInit) {
            console.warn('Virtual list not yet implemented');
        }
    }
}