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
    framework7: Framework7;
}

export interface IFramework7AppProps extends React.Props<any> {
    applyOverscrollFix?: boolean;
    themeType: ThemeTypeEnum;
    rtl?: boolean;
    pageAnimationDirection: AnimationDirectionEnum;       
}

export class Framework7App extends React.Component<IFramework7AppProps, IFramework7AppContext> {
    static childContextTypes = {
        framework7AppContext: React.PropTypes.object
    }

    constructor(props: IFramework7AppProps) {
        super(props);
        
        this.state = {
            themeType: this.props.themeType,
            rtl: this.props.rtl,
            pageAnimationDirection: this.props.pageAnimationDirection,
            framework7: null
        }
    }

    getChildContext() {
        return {
            framework7AppContext: this.state
        };
    }

    render() {
        return <span>{this.props.children}</span>;
    }

    componentDidMount() {
        this.handleOverscrollFix();     

        //TODO: Update to TS 2.1 and use property spread instead of the hack below
        let newState = this.state;
        newState.framework7 = new Framework7();        
        this.setState(newState);
    }

    private handleOverscrollFix() {
        if (this.props.applyOverscrollFix) {
            applyOverscrollFix();
        }
    }
};