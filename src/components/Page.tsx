import * as React from 'react';
import * as $ from 'jquery';

import {IFramework7AppContext} from './Framework7App';
import {IViewContext} from './View';

import '../less/pages.less';

export interface IPageProps extends React.Props<any> {
    className?: string;
}

export class Page extends React.Component<IPageProps, any> {
    render() {
        return (
            <div className="page">
                {this.props.children}
            </div>
        );
    }
}