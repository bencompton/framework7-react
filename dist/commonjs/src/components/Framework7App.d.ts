/// <reference types="react" />
import * as React from 'react';
import { Requireable } from 'prop-types';
import { Framework7, IFramework7Params } from '../../framework7/Framework7';
export declare type ThemeTypeEnum = 'ios' | 'material';
export interface ITabChildRoute {
    path: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any>;
}
export interface ITabRoute {
    tabId: string;
    component?: React.ComponentClass<any> | React.StatelessComponent<any>;
    routes?: ITabChildRoute[];
}
export interface IFramework7Route {
    path: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any>;
    tabs?: ITabRoute[];
}
export interface IFramework7AppContext {
    theme: {
        material: boolean;
        ios: boolean;
    };
    routes: IFramework7Route[];
    getFramework7: (callback: (f7: Framework7) => void) => void;
    onRouteChange: (componentId: number, callback: (route: IFramework7Route) => void) => void;
    unregisterRouteChange: (componentId: number) => void;
    getCurrentRoute: () => any;
    getRouter: () => any;
}
export interface IFramework7AppProps extends IFramework7Params, React.Props<any> {
    applyOverscrollFix?: boolean;
    themeType: ThemeTypeEnum;
    routes: IFramework7Route[];
    onFramework7Init?: (framework7: Framework7) => void;
    onRouteChange?: (route: IFramework7Route) => void;
    stateKernel?: {
        setFramework7: (f7: any) => void;
        setRouter: (router: any) => void;
    };
}
export declare class Framework7App extends React.Component<IFramework7AppProps, Framework7> {
    private framework7;
    private framework7InitCallbacks;
    private routeChangeCallbacks;
    private currentRoute;
    private router;
    static childContextTypes: {
        framework7AppContext: Requireable<any>;
    };
    getChildContext(): {
        framework7AppContext: {
            getFramework7: any;
            theme: {
                ios: boolean;
                material: boolean;
            };
            onRouteChange: any;
            unregisterRouteChange: any;
            getCurrentRoute: () => any;
            getRouter: () => any;
        };
    };
    render(): JSX.Element;
    componentDidMount(): void;
    private handleOverscrollFix();
    private initFramework7();
    private getFramework7(callback);
    private onRouteChange(componentId, callback);
    private unregisterRouteChange(componentId);
}
