import * as React from 'react';
import * as classNames from 'classnames';

import {Framework7, View as F7View} from '../Framework7';
import {IFramework7AppContext, ThemeTypeEnum} from './Framework7App';
import {Pages} from './Pages';
import {INavbarProps} from '../../framework7-react/Navbar';

export interface IViewProps {
    main?: boolean;
    navbarFixed?: boolean;
    navbarThrough?: boolean;
    toolbarFixed?: boolean;
    toolbarThrough?: boolean;
    tabbarFixed?: boolean;
    tabbarThrough?: boolean;
    tabbarLabelsFixed?: boolean;
    tabbarLabelsThrough?: boolean;
    tab?: boolean;
    active?: boolean;
    dynamicNavbar?: boolean;
    domCache?: boolean;
    linksView?: string | Object;
    reloadPages?: boolean;
    uniqueHistory?: boolean;
    uniqueHistoryIgnoreGetParameters?: boolean;
    allowDuplicateUrls?: boolean;
    swipeBackPage?: boolean;
    swipeBackPageAnimateShadow?: boolean;
    swipeBackPageAnimateOpacity?: boolean;
    swipeBackPageActiveArea?: boolean;
    swipeBackPageThreshold?: boolean;
    animatePages?: boolean;
    preloadPreviousPage?: boolean;
    params?: Object;
    url?: string;
}

export interface IViewContext extends IViewProps {
    registerPages: (pages: Pages) => void;
    registerNavbar: (navbar: React.ReactElement<INavbarProps>) => void;
 }

export class View extends React.Component<IViewProps, any> {
    private element: HTMLElement;
    private f7View: F7View;
    private pages: Pages;
    private navbar: React.ReactElement<INavbarProps>;

    static childContextTypes = {
        viewContext: React.PropTypes.object
    };

    static contextTypes = {
        framework7AppContext: React.PropTypes.object
    };

    public get framework7View() {
        return this.f7View;
    }

    private get framework7AppContext() {
        return (this.context as any).framework7AppContext as IFramework7AppContext;
    }    

    private getChildContext() {
        return {
            viewContext: {
                registerPages: this.registerPages.bind(this)
            }
        }
    }

    constructor(props: any, context: any) {
        super(props, context);
        this.framework7AppContext.registerView(this);        
    }

    public componentWillUnmount() {
        if (this.f7View && this.f7View.destroy) this.f7View.destroy();
    }

    public componentDidMount() {
        this.framework7AppContext.getFramework7(f7 => this.initializeFramework7View(f7));
    }

    render() {
        const classes = classNames({
            'view': true,
            'view-main': this.props.main,
            'active': this.props.active,
            'tab': this.props.tab,
            'navbar-fixed': this.props.navbarFixed || this.props.navbarThrough && this.framework7AppContext.theme.material,
            'navbar-through': this.props.navbarThrough,
            'toolbar-fixed': this.props.toolbarFixed,
            'toolbar-through': this.props.toolbarThrough,
            'tabbar-fixed': this.props.tabbarFixed,
            'tabbar-through': this.props.tabbarThrough,
            'tabbar-labels-fixed': this.props.tabbarLabelsFixed,
            'tabbar-labels-through': this.props.tabbarLabelsThrough
        }, 
            this.framework7AppContext.themeClass
        );

        return (
            <div className={classes} ref={(element: HTMLElement) => this.element = element}>{this.props.children}</div>
        );
    }

    private initializeFramework7View(f7: Framework7) {
        const propsData = this.props;

        const params = {
            url: this.props.url,
            dynamicNavbar: propsData.dynamicNavbar,
            domCache: typeof propsData.domCache === 'undefined' ? true : propsData.domCache,
            linksView: propsData.linksView,
            reloadPages: propsData.reloadPages,
            uniqueHistory: propsData.uniqueHistory,
            uniqueHistoryIgnoreGetParameters: propsData.uniqueHistoryIgnoreGetParameters,
            allowDuplicateUrls: propsData.allowDuplicateUrls,
            swipeBackPage: propsData.swipeBackPage,
            swipeBackPageAnimateShadow: propsData.swipeBackPageAnimateShadow,
            swipeBackPageAnimateOpacity: propsData.swipeBackPageAnimateOpacity,
            swipeBackPageActiveArea: propsData.swipeBackPageActiveArea,
            swipeBackPageThreshold: propsData.swipeBackPageThreshold,
            animatePages: propsData.animatePages,
            preloadPreviousPage: propsData.preloadPreviousPage,
        };      

        this.f7View = f7.addView(this.element, params);

        const view: any = this.f7View;

        if (view && view.pagesContainer.querySelectorAll('.page').length === 0) {
            view.router.load({ url: this.props.url, reload: true });
        }
    }

    public changeRoute(pageComponent: React.ComponentClass<any> | React.StatelessComponent<any>) {
        this.pages.changeRoute(pageComponent);
        
        const newPage = this.f7View.pagesContainer.querySelector('.page:last-child');
        
        this.f7View.router.load({
            pageElement: newPage
        });
    }

    private registerPages(pages: Pages) {
        this.pages = pages;
        this.render();
    }
}