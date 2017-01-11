import * as React from 'react';

import {Framework7} from '../Framework7';
import {View} from './View';
import {applyOverscrollFix} from '../utils/OverscrollFix';
import {IFramework7Route, Framework7Router} from '../utils/Router';

export type ThemeTypeEnum  = 'ios' | 'material';

export interface IFramework7AppContext {
    theme: {
        material: boolean;
        ios: boolean;
    },
    themeClass: string;
    routes: IFramework7Route[];
    registerView: (view: View) => void;
    getFramework7: (callback: (f7: Framework7) => void) => void;
}

export interface IFramework7AppProps extends React.Props<any> {
    applyOverscrollFix?: boolean;
    themeType: ThemeTypeEnum;
    routes: IFramework7Route[];
    onFramework7Init?: (framework7: Framework7) => void;
}

export class Framework7App extends React.Component<IFramework7AppProps, Framework7> {
    private router: Framework7Router;
    private registeredViews: View[];
    private framework7: Framework7 = null;
    private framework7InitCallbacks: ((framework7: Framework7) => void)[] = [];

    public static childContextTypes = {
        framework7AppContext: React.PropTypes.object
    }

    public getChildContext() {
        return {
            framework7AppContext: {
                themeType: this.props.themeType,
                getFramework7: this.getFramework7.bind(this),
                registerView: this.addRegisteredView.bind(this),
                theme: {
                    ios: this.props.themeType === 'ios',
                    material: this.props.themeType === 'material'
                }
            }
        };
    }

    public render() {
        return <span>{this.props.children}</span>;
    }

    public componentDidMount() {
        this.handleOverscrollFix();
        this.initFramework7();
    }

    private handleOverscrollFix() {
        if (this.props.applyOverscrollFix) {
            applyOverscrollFix();
        }
    }

    private initFramework7() {
        this.router = new Framework7Router(this.props.routes, this.registeredViews);

        this.framework7 = new Framework7({
            preroute: this.router.preroute.bind(this.router)
        });

        if (this.props.onFramework7Init) {
            this.props.onFramework7Init(this.framework7);
        }

        this.framework7InitCallbacks.forEach(callback => {
            callback(this.framework7);
        });
    }

    private addRegisteredView(view: View) {
        this.registeredViews = this.registeredViews || [];
        this.registeredViews.push(view);
    }

    private getFramework7(callback: (framework7: Framework7) => void) {
        if (this.framework7) {
            callback(this.framework7);
        } else {
            this.framework7InitCallbacks.push(callback);
        }
    } 
};