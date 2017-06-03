import * as React from 'react';
import {object, Requireable} from 'prop-types';

import Framework7Router from '../../framework7-vue/router';
import {Framework7, IFramework7Params, Dom7} from '../../framework7/Framework7';
import {applyOverscrollFix} from '../utils/OverscrollFix';

export type ThemeTypeEnum  = 'ios' | 'material';

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
    },    
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
    stateKernel?: { setFramework7: (f7: any) => void; setRouter: (router: any) => void; }
}

export class Framework7App extends React.Component<IFramework7AppProps, Framework7> {        
    private framework7: Framework7 = null;
    private framework7InitCallbacks: ((framework7: Framework7) => void)[] = [];
    private routeChangeCallbacks: any = {};
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
                    material: this.props.themeType === 'material'
                },
                onRouteChange: this.onRouteChange.bind(this),
                unregisterRouteChange: this.unregisterRouteChange.bind(this),
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
            material: this.props.themeType === 'material',
            ...this.props
        });

        const router = this.router = new Framework7Router(this.props.routes, this.framework7, Dom7);    

        router.setRouteChangeHandler(route => {
            this.currentRoute = route;      

            if (this.props.onRouteChange) {
                this.props.onRouteChange(route);
            }

            Object.keys(this.routeChangeCallbacks).forEach(componentId => {
                //Need this if statement in case a component gets unregistered during this forEach                
                if (this.routeChangeCallbacks[componentId]) {                    
                    this.routeChangeCallbacks[componentId](route);                                       
                }                
            });

            return false;           
        });            

        if (this.props.onFramework7Init) {
            this.props.onFramework7Init(this.framework7);
        }

        this.framework7InitCallbacks.forEach(callback => {
            callback(this.framework7);
        });

        if (this.props.stateKernel) {            
            Dom7(document).on('click', 'a', e => e.preventDefault());
            this.props.stateKernel.setFramework7(this.framework7);
            this.props.stateKernel.setRouter(this.router);
        }
    }

    private getFramework7(callback: (framework7: Framework7) => void) {
        if (this.framework7) {
            callback(this.framework7);
        } else {
            this.framework7InitCallbacks.push(callback);
        }
    }

    private onRouteChange(componentId, callback: (route) => void) {
        this.routeChangeCallbacks[componentId] = callback;
    }

    private unregisterRouteChange(componentId) {
        delete this.routeChangeCallbacks[componentId];
    }
};