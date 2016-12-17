import * as React from 'react';
import * as classNames from 'classnames';

import {Framework7, View as F7View} from '../Framework7';
import {IFramework7AppContext} from './framework7App';
import {Pages} from './Pages';

import '../less/views.less';

export interface IViewProps {
    main: boolean;
    dynamicNavbar: boolean;      
    url: string;
}

export interface IViewContext extends IViewProps {
    registerPages: (pages: Pages) => void;
 }

export class View extends React.Component<IViewProps, any> {
    private element: HTMLElement;
    private f7View: F7View;
    private pages: Pages;

    static childContextTypes = {
        viewContext: React.PropTypes.object
    }

    static contextTypes = {
        framework7AppContext: React.PropTypes.object
    }

    public get framework7View() {
        return this.f7View;
    }

    private get framework7AppContext() {
        return (this.context as any).framework7AppContext as IFramework7AppContext;
    }    

    private getChildContext() {
        return {
            viewContext: this.props
        }
    }

    constructor(props: any, context: any) {
        super(props, context);
        this.framework7AppContext.registerView(this);
    }

    render() {
        const classes = classNames('view', {
            main: this.props.main
        });

        return <div className={classes} ref={(element: HTMLElement) => this.element = element}>{this.props.children}</div>
    }

    public initializeFramework7View(f7: Framework7) {
        const params =  {
          url: this.props.url,
          dynamicNavbar: true
        }

        this.f7View = f7.addView(this.element, params);

        // if (this.f7View && this.f7View.pagesContainer.querySelectorAll('.page').length === 0) {
        //   this.f7View.router.load({ url: this.props.url, reload: true });
        // }
    }

    public changeRoute(pageComponent: React.ComponentClass<any> | React.StatelessComponent<any>) {
        this.pages.changeRoute(pageComponent);
    }
}