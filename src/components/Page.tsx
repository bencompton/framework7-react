import * as React from 'react';
import * as classNames from 'classnames';

import {VuePage} from '../../framework7-vue/framework7-vue';
import {LayoutEnum} from '../utils/Layout';
import {ColorsEnum} from '../utils/Colors';
import {reactifyF7Vue} from '../utils/ReactifyF7Vue';

import '../less/pages.less';

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

export const Page = reactifyF7Vue<IPageProps>({
    component: VuePage,
    tag: 'page'
});