import * as React from 'react';
import {object, Requireable} from 'prop-types';
import Framework7 from 'framework7/dist/framework7.esm.bundle';

import VueRouter from 'framework7-vue/src/utils/vue-router';

import {applyOverscrollFix} from '../utils/OverscrollFix';

export type ThemeTypeEnum  = 'ios' | 'md';

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
        md: boolean;
        ios: boolean;
    },    
    routes: IFramework7Route[];    
    getFramework7: (callback: (f7: Framework7) => void) => void;
    onRouteChange: (componentId: number, callback: (to, from, router) => void) => void;
    onRouteChanged: (componentId: number, callback: (to, from, router) => void) => void;
    unregisterRouteChange: (componentId: number) => void;
    getCurrentRoute: () => any;
    getRouter: () => any;
}

export interface IFramework7AppProps extends React.Props<any> {
    applyOverscrollFix?: boolean;
    themeType: ThemeTypeEnum;
    routes: IFramework7Route[];
    onFramework7Init?: (framework7: Framework7) => void;
    onRouteChange?: (from, to, router) => void;
    onRouteChanged?: (from, to, router) => void;
    stateKernel?: { setFramework7: (f7: any) => void; setRouter: (router: any) => void; }
}

export class Framework7App extends React.Component<IFramework7AppProps, Framework7> {        
    private framework7: Framework7 = null;
    private framework7InitCallbacks: ((framework7: Framework7) => void)[] = [];
    private routeChangeCallbacks: any = {};
    private routeChangedCallbacks: any = {};
    private currentRoute;
    private router;

    public static childContextTypes = {
        framework7AppContext: object
    }

    public getChildContext() {
        return {
            framework7AppContext: {
                getFramework7: this.getFramework7.bind(this),                
                theme: {
                    ios: this.props.themeType === 'ios',
                    md: this.props.themeType === 'md'
                },
                onRouteChange: this.onRouteChange.bind(this),
                onRouteChanged: this.onRouteChanged.bind(this),
                unregisterRouteChange: this.unregisterRouteChange.bind(this),
                unregisterRouteChanged: this.unregisterRouteChanged.bind(this),
                getCurrentRoute: () => this.currentRoute,
                getRouter: () => this.router
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
        this.framework7 = new Framework7({
            md: this.props.themeType === 'md',
            ...(this.props as any)
        });

        this.initRouter();        

        if (this.props.onFramework7Init) {
            this.props.onFramework7Init(this.framework7);
        }

        this.framework7InitCallbacks.forEach(callback => {
            callback(this.framework7);
        });

        if (this.props.stateKernel) {            
            Framework7.$(document).on('click', 'a', e => e.preventDefault());
            this.props.stateKernel.setFramework7(this.framework7);
            this.props.stateKernel.setRouter(this.router);
        }
    }

    private initRouter() {
        const self = this;

        Framework7.Router
        .use(VueRouter)
        .use({
            on: {
                routeChange(to, from, router) {
                    if (self.props.onRouteChange) {
                        self.props.onRouteChange(to, from, router);
                    }
        
                    Object.keys(self.routeChangeCallbacks).forEach(componentId => {
                        //Need this if statement in case a component gets unregistered during this forEach                
                        if (self.routeChangeCallbacks[componentId]) {                    
                            self.routeChangeCallbacks[componentId](to, from, router);                                       
                        }                
                    });
                },
                routeChanged(to, from, router) {
                    if (self.props.onRouteChanged) {
                        self.props.onRouteChanged(to, from, router);
                    }
        
                    Object.keys(self.routeChangedCallbacks).forEach(componentId => {
                        //Need this if statement in case a component gets unregistered during this forEach                
                        if (self.routeChangedCallbacks[componentId]) {                    
                            self.routeChangedCallbacks[componentId](to, from, router); 
                        }                
                    });
                },
            },
        });        
    }

    private getFramework7(callback: (framework7: Framework7) => void) {
        if (this.framework7) {
            callback(this.framework7);
        } else {
            this.framework7InitCallbacks.push(callback);
        }
    }

    private onRouteChange(componentId, callback: (to, from, router) => void) {
        this.routeChangeCallbacks[componentId] = callback;
    }

    private unregisterRouteChange(componentId) {
        delete this.routeChangedCallbacks[componentId];
    }

    private onRouteChanged(componentId, callback: (to, from, router) => void) {
        this.routeChangedCallbacks[componentId] = callback;
    }

    private unregisterRouteChanged(componentId) {
        delete this.routeChangeCallbacks[componentId];
    }    
};