import * as React from 'react';

import {Framework7} from '../Framework7';
import {applyOverscrollFix} from '../utils/OverscrollFix';
import {AnimationDirectionEnum} from './AnimationWrapper';
import {IFramework7Route, getPrerouteHandler} from '../utils/Router';

export enum ThemeTypeEnum {
    iOS,
    Material
}

export interface IFramework7AppContext {
    themeType: ThemeTypeEnum;
    rtl?: boolean;
    pageAnimationDirection: AnimationDirectionEnum;
    routes: IFramework7Route[];
    onF7Init: Function;
    framework7: Framework7;
}

export interface IFramework7AppProps extends React.Props<any> {
    applyOverscrollFix?: boolean;
    themeType: ThemeTypeEnum;
    rtl?: boolean;
    pageAnimationDirection: AnimationDirectionEnum;
    routes: IFramework7Route[];    
}

export class Framework7App extends React.Component<IFramework7AppProps, Framework7> {
    private f7InitEventHandlers: [Function];

    static childContextTypes = {
        framework7AppContext: React.PropTypes.object
    }

    getChildContext() {
        return {
            framework7AppContext: {
                themeType: this.props.themeType,
                rtl: this.props.rtl,
                pageAnimationDirection: this.props.pageAnimationDirection,
                framework7: this.state,
                onF7Init: this.addF7InitEventHandler.bind(this)
            }
        };
    }

    render() {
        return <span>{this.props.children}</span>;
    }

    componentDidMount() {
        this.handleOverscrollFix();

        const routeChangeCallback;

        this.setState(new Framework7({
            preroute: getPrerouteHandler(this.props.routes, routeChangeCallback)
        }), () => {
            this.f7InitEventHandlers.forEach((handler: Function) => {
                handler(this.state, routeChangeCallback);
            });
        });
    }

    private handleOverscrollFix() {
        if (this.props.applyOverscrollFix) {
            applyOverscrollFix();
        }
    }

    private addF7InitEventHandler(eventHandler: Function) {
        this.f7InitEventHandlers = this.f7InitEventHandlers as any || [];
        this.f7InitEventHandlers.push(eventHandler);
    }
};