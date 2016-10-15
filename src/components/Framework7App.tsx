import * as React from 'react';

import {applyOverscrollFix} from '../utilities/OverscrollFix';

export enum ThemeTypeEnum {
    iOS,
    Material
}

interface IFramework7AppContext {
    themeType: ThemeTypeEnum;
    rtl?: boolean;
}

export interface IFramework7AppProps extends IFramework7AppContext, React.Props<any> {
    applyOverscrollFix?: boolean;
}

export class Framework7App extends React.Component<IFramework7AppProps, any> {
    static childContextTypes = {
        framework7AppContext: React.PropTypes.object
    }

    getChildContext() {
        return {
            framework7AppContext: {
                themeType: this.props.themeType,
                applyOverscrollFix: this.props.applyOverscrollFix                
            }
        };
    }

    render() {
        return <span>{this.props.children}</span>;
    }

    componentDidMount() {
        this.handleOverscrollFix();
    }

    private handleOverscrollFix() {
        if (this.props.applyOverscrollFix) {
            applyOverscrollFix();
        }
    }
};