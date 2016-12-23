import * as React from 'react';

import {ThemeTypeEnum, IFramework7AppContext} from '../Framework7App';
import {NavLeft} from './NavLeft';
import {NavCenter} from './NavCenter';

import '../../less/toolbars.less';

export interface INavbarProps extends React.Props<any> {
    className?: string;
    backLink?: boolean | string;
    sliding?: boolean;
    title?: string;
    beforeInner?: React.ReactElement<any>;
    afterInner?: React.ReactElement<any>;
}

export class Navbar extends React.Component<INavbarProps, any> {
    public static contextTypes = {
        framework7AppContext: React.PropTypes.object
    };

    private get framework7AppContext() {
        return (this.context as any).framework7AppContext as IFramework7AppContext;
    }    

    public componentDidMount() {
        this.framework7AppContext.getFramework7(f7 => {
            f7.sizeNavbars();
        });
    }

    public componentWillUpdate() {
        this.framework7AppContext.getFramework7(f7 => {
            f7.sizeNavbars();
        });
    }

    public render() {
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    {this.props.backLink ? <NavLeft backLink={this.props.backLink} sliding={this.props.sliding} /> : null}
                    {this.props.title ? <NavCenter title={this.props.title} sliding={this.props.sliding} /> : null}
                    {this.props.children}
                </div>
            </div>
        );
    }
};