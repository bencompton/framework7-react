import * as React from 'react';
import * as classNames from 'classnames';

import {ComponentWithF7AppContext} from '../../utils/ComponentWithF7AppContext';
import {LayoutEnum, getLayoutClass} from '../../utils/Layout';
import {ColorsEnum} from '../../utils/Colors';

import '../../less/pages.less';

export interface IPageProps extends React.Props<any> {
    name?: string;
    cached?: boolean;
    navbarFixed?: boolean;
    navbarThrough?: boolean;
    toolbarFixed?: boolean;
    toolbarThrough?: boolean;
    tabbarFixed?: boolean;
    tabbarThrough?: boolean;
    tabbarLabelsFixed?: boolean;
    tabbarLabelsThrough?: boolean;
    withSubnavbar?: boolean;
    subnavbar?: boolean;
    noNavbar?: boolean;
    noToolbar?: boolean;
    noTabbar?: boolean;
    pullToRefresh?: boolean;
    pullToRefreshDistance?: number;
    ptrDistance?: number;
    pullToRefreshLayer?: boolean
    ptrLayer?: boolean;
    infiniteScroll?: boolean | string
    infiniteScrollDistance?: number,
    infiniteScrollPreloader?: boolean;
    hideBarsOnScroll?: boolean,
    hideNavbarOnScroll?: boolean,
    hideToolbarOnScroll?: boolean,
    hideTabbarOnScroll?: boolean,
    messages?: boolean,
    tabs?: boolean,
    noPageContent?: boolean,
    loginScreen?: boolean,
    theme?: ColorsEnum,
    layout?: LayoutEnum,
    noSwipeBack?: boolean

    className?: string;

    fixedSlot?: React.ReactElement<any>;
    staticSlot?: React.ReactElement<any>;
}

export class Page extends ComponentWithF7AppContext<IPageProps, any> {
    public static defaultProps: IPageProps = {
        pullToRefreshLayer: true,
        ptrLayer: true,
        infiniteScrollPreloader: true
    };

    private get classesObjectPage() {
        const props = this.props;

        let classesObject = {
            'cached': props.cached,
            'navbar-fixed': props.navbarFixed || props.navbarThrough && this.Framework7AppContext.theme.material,
            'navbar-through': props.navbarThrough,
            'toolbar-fixed': props.toolbarFixed,
            'toolbar-through': props.toolbarThrough,
            'tabbar-fixed': props.tabbarFixed,
            'tabbar-through': props.tabbarThrough,
            'tabbar-labels-fixed': props.tabbarLabelsFixed,
            'tabbar-labels-through': props.tabbarLabelsThrough,
            'with-subnavbar': props.subnavbar || props.withSubnavbar,
            'no-navbar': props.noNavbar,
            'no-toolbar': props.noToolbar,
            'no-tabbar': props.noTabbar,
            'tabs': props.tabs,
            'no-swipeback': props.noSwipeBack,
            [getLayoutClass(props.layout)]: props.layout !== null
        }

        return classesObject;
    }

    private get classesObjectPageContent() {
        return {
            'pull-to-refresh-content': this.props.pullToRefresh,
            'infinite-scroll': this.props.infiniteScroll as boolean,
            'infinite-scroll-top': this.props.infiniteScroll === 'top',
            'hide-bars-on-scroll': this.props.hideBarsOnScroll,
            'hide-navbar-on-scroll': this.props.hideNavbarOnScroll,
            'hide-toolbar-on-scroll': this.props.hideToolbarOnScroll,
            'hide-tabbar-on-scroll': this.props.hideTabbarOnScroll,
            'messages-content': this.props.messages,
            'login-screen-content': this.props.loginScreen
        }
    }

    public render() {
        var pageEl, pageContentEl, ptrEl, infiniteEl, fixedList = [], staticList = [];
        const props = this.props;

        if (props.pullToRefresh && (props.ptrLayer && props.pullToRefreshLayer)) {
            ptrEl = (
                <div className="pull-to-refresh-layer">
                    <div className="preloader" />
                    <div className="pull-to-refresh-arrow" />
                </div>
            );
        }

        if (props.infiniteScroll && props.infiniteScrollPreloader) {
            infiniteEl = (
                <div className="infinite-scroll-preloader">
                    <div className="preloader" />
                </div>
            );
        }

        const fixedTags = ('Navbar Toolbar Tabbar Subnavbar Searchbar Messagebar Fab SpeedDial FloatingButton').split(' ');

        const children = React.Children.toArray(this.props.children);
      
        let withSubnavbar: boolean;
        let withMessages: boolean;
        let withSearchbar: boolean;

        if (props.children) {
            children.forEach(child => {
                const tag = (child as React.ReactElement<any>).type.toString();
                
                if (!tag) {
                    staticList.push(child);
                    return;
                }
                
                let isFixed = false;

                if (tag.indexOf('Messages') >= 0) withMessages = true;
                if (tag.indexOf('Subnavbar') >= 0) withSubnavbar = true;
                if (tag.indexOf('Searchbar') >= 0) withSearchbar = true;
                
                for (var j = 0; j < fixedTags.length; j++) {
                    if (tag.indexOf(fixedTags[j]) >= 0) {
                        isFixed = true;
                    }
                }

                if (isFixed) {
                    fixedList.push(child);
                } else {
                    staticList.push(child);
                }
            });
        }

        if (fixedList.length > 0 && withSearchbar) {
            fixedList.push(<div className="searchbar-overlay" />);
        }

        let classesObjectPageContent = this.classesObjectPageContent;
    
        if (withMessages) classesObjectPageContent['messages-content'] = true;
    
        if (!props.noPageContent) {
            pageContentEl = (
                <div className={classNames('page-content', classesObjectPageContent)} {...{
                    'data-ptr-distance': props.pullToRefreshDistance || props.ptrDistance,
                    'data-distance': props.infiniteScrollDistance
                }}>
                    {
                        (props.infiniteScroll === 'top' ? 
                            [ptrEl, infiniteEl, props.staticSlot, staticList] 
                            : 
                            [ptrEl, props.staticSlot, staticList, infiniteEl]
                        )
                    }
                </div>
            );
        } else {
            pageContentEl = props.children;
        }
    
        fixedList.push(props.fixedSlot);

        let classesObjectPage = this.classesObjectPage;

        if (withSubnavbar) classesObjectPage['with-subnavbar'] = true;
    
        pageEl = (
            <div className={classNames('page', classesObjectPage)} {...{
                'data-page': props.name
            }}>
                {[fixedList, pageContentEl]}
            </div>
        );

        return pageEl;
    }
};

