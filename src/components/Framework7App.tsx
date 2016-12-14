import * as React from 'react';

import {Framework7} from '../Framework7';
import {applyOverscrollFix} from '../utils/OverscrollFix';
import {AnimationDirectionEnum} from './AnimationWrapper';

export enum ThemeTypeEnum {
    iOS,
    Material
}

export interface IFramework7AppContext {
    themeType: ThemeTypeEnum;
    rtl?: boolean;
    pageAnimationDirection: AnimationDirectionEnum;
    getFramework7: () => Framework7;
}

export interface IFramework7AppProps extends React.Props<any> {
    applyOverscrollFix?: boolean;
    themeType: ThemeTypeEnum;
    rtl?: boolean;
    pageAnimationDirection: AnimationDirectionEnum;
}

export class Framework7App extends React.Component<IFramework7AppProps, Framework7> {
    public static childContextTypes = {
        framework7AppContext: React.PropTypes.object
    };

    public getChildContext() {
        return {
            framework7AppContext: {
                themeType: this.props.themeType,
                rtl: this.props.rtl,
                pageAnimationDirection: this.props.pageAnimationDirection,
                getFramework7: () => this.state
            }
        };
    }

    public render() {
        return <span>{this.props.children}</span>;
    }

    public componentDidMount() {
        this.handleOverscrollFix();
        this.setState(new Framework7());
    }

    private handleOverscrollFix() {
        if (this.props.applyOverscrollFix) {
            applyOverscrollFix();
        }
    }
}