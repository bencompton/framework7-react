import * as React from 'react';
import * as classNames from 'classnames';

import {IFramework7AppContext, ThemeTypeEnum, getThemeClass, getLayoutClass} from '../Framework7App';

import '../../less/views.less';

export interface IViewsProps extends React.Props<any> {
    navbarFixed?: boolean;
    navbarThrough?: boolean;
    toolbarFixed?: boolean;
    toolbarThrough?: boolean;
    tabbarFixed?: boolean;
    tabbarThrough?: boolean;
    tabbarLabelsFixed?: boolean;
    tabbarLabelsThrough: boolean;
    tabs: boolean;
    className?: string;
}

export const Views = (props: IViewsProps, context: any) => {
    const framework7AppContext = context.framework7App as IFramework7AppContext;

    const classes = classNames('views', {
        'tabs': props.tabs,
        'navbar-fixed': props.navbarFixed || props.navbarThrough && framework7AppContext.themeType === ThemeTypeEnum.Material,
        'navbar-through': props.navbarThrough,
        'toolbar-fixed': props.toolbarFixed,
        'toolbar-through': props.toolbarThrough,
        'tabbar-fixed': props.tabbarFixed,
        'tabbar-through': props.tabbarThrough,
        'tabbar-labels-fixed': props.tabbarLabelsFixed,
        'tabbar-labels-through': props.tabbarLabelsThrough
    }, 
        getThemeClass(framework7AppContext.themeType),
        getLayoutClass(framework7AppContext.layoutType),
        props.className
    );
            
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

(Views as any).contextTypes = {
    framework7App: React.PropTypes.object
};