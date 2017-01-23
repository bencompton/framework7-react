import * as React from 'react';

import Framework7Router from '../../framework7-vue/router';
import {Framework7} from '../Framework7';
import {applyOverscrollFix} from '../utils/OverscrollFix';

export type ThemeTypeEnum  = 'ios' | 'material';

export interface ITabChildRoute {
    path: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any>;
}

export interface ITabRoute {
    tabId: string;
    component?: React.ComponentClass<any> | React.StatelessComponent<any>;
    routes?: ITabRoute;
}

export interface IFramework7Route {
    path: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any>;
    tabs?: ITabRoute;
}

export interface IFramework7AppContext {
    theme: {
        material: boolean;
        ios: boolean;
    },
    themeClass: string;
    routes: IFramework7Route[];    
    getFramework7: (callback: (f7: Framework7) => void) => void;
    onRouteChange: (componentInstance, callback: (route) => void) => void;
    unregisterRouteChange: (callback: (componentInstance) => void) => void;
    getCurrentRoute: () => any;
}

export interface IFramework7AppProps extends React.Props<any> {
    applyOverscrollFix?: boolean;
    themeType: ThemeTypeEnum;
    routes: IFramework7Route[];
    onFramework7Init?: (framework7: Framework7) => void;
}

export class Framework7App extends React.Component<IFramework7AppProps, Framework7> {        
    private framework7: Framework7 = null;
    private framework7InitCallbacks: ((framework7: Framework7) => void)[] = [];
    private routeChangeCallbacks: any = {};
    private currentRoute;

    public static childContextTypes = {
        framework7AppContext: React.PropTypes.object
    }

    public getChildContext() {
        return {
            framework7AppContext: {
                themeType: this.props.themeType,
                getFramework7: this.getFramework7.bind(this),                
                theme: {
                    ios: this.props.themeType === 'ios',
                    material: this.props.themeType === 'material'
                },
                onRouteChange: this.onRouteChange.bind(this),
                unregisterRouteChange: this.unregisterRouteChange.bind(this),
                getCurrentRoute: () => this.currentRoute
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
        this.framework7 = new Framework7();

        const router = new Framework7Router(this.props.routes, this.framework7);    

        router.setRouteChangeHandler(route => {
            this.currentRoute = route;            
            
            Object.keys(this.routeChangeCallbacks).forEach(componentInstance => {
                this.routeChangeCallbacks[componentInstance].forEach(callback => {
                    callback(route);
                });
            });
        });            

        if (this.props.onFramework7Init) {
            this.props.onFramework7Init(this.framework7);
        }

        this.framework7InitCallbacks.forEach(callback => {
            callback(this.framework7);
        });
    }

    private getFramework7(callback: (framework7: Framework7) => void) {
        if (this.framework7) {
            callback(this.framework7);
        } else {
            this.framework7InitCallbacks.push(callback);
        }
    }

    private onRouteChange(componentInstance, callback: (route) => void) {
        this.routeChangeCallbacks[componentInstance] = [
            ...(this.routeChangeCallbacks[componentInstance] || []),
            callback
        ]        
    }

    private unregisterRouteChange(componentInstance) {
        delete this.routeChangeCallbacks[componentInstance];
    }
};