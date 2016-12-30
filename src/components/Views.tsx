import * as React from 'react';
import * as classNames from 'classnames';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {ThemeTypeEnum} from './Framework7App';
import {LayoutEnum} from '../utils/Layout';
import {VueViews} from '../../framework7-vue/framework7-vue';

import '../less/views.less';

export interface IViewsProps extends React.Props<any> {
    navbarFixed?: boolean;
    navbarThrough?: boolean;
    toolbarFixed?: boolean;
    toolbarThrough?: boolean;
    tabbarFixed?: boolean;
    tabbarThrough?: boolean;
    tabbarLabelsFixed?: boolean;
    tabbarLabelsThrough?: boolean;
    tabs?: boolean;
    className?: string;
    theme?: ThemeTypeEnum;
    layout?: LayoutEnum;
}

export const Views = reactifyF7Vue<IViewsProps>({
    component: VueViews,
    tag: 'f7-views'
});