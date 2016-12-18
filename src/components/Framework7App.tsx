import * as React from 'react';

import {Framework7} from '../Framework7';
import {View} from './view/View';
import {applyOverscrollFix} from '../utils/OverscrollFix';
import {AnimationDirectionEnum} from './AnimationWrapper';
import {IFramework7Route, Framework7Router} from '../utils/Router';

export enum ThemeTypeEnum {
    iOS,
    Material
}

export const getThemeClass = (themeType: ThemeTypeEnum) => {
    if (themeType) {
        return '';
    } else {
        return `theme-${themeType.toString().toLowerCase()}`;
    }
};

export interface IFramework7AppContext {
    themeType: ThemeTypeEnum;
    pageAnimationDirection: AnimationDirectionEnum;
    routes: IFramework7Route[];
    registerView: (view: View) => void;
    getFramework7: () => Framework7;
}

export interface IFramework7AppProps extends React.Props<any> {
    applyOverscrollFix?: boolean;
    themeType: ThemeTypeEnum;
    pageAnimationDirection: AnimationDirectionEnum;
    routes: IFramework7Route[];    
}

export class Framework7App extends React.Component<IFramework7AppProps, Framework7> {
    private router: Framework7Router;
    private registeredViews: View[];
    private pageAnimationDirection: AnimationDirectionEnum; 
    private framework7: Framework7;      

    public static childContextTypes = {
        framework7AppContext: React.PropTypes.object
    }

    public getChildContext() {
        return {
            framework7AppContext: {
                themeType: this.props.themeType,
                pageAnimationDirection: this.props.pageAnimationDirection,
                getFramework7: () => this.state,
                registerView: this.addRegisteredView.bind(this)
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

        this.setState(new Framework7({
            preroute: this.router.preroute.bind(this.router)
        }), () => {
            this.registeredViews.forEach((view) => {
                view.initializeFramework7View(this.state);
            });
        });
    }

    private addRegisteredView(view: View) {
        this.registeredViews = this.registeredViews || [];
        this.registeredViews.push(view);
    }    
};