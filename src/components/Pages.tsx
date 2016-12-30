import * as React from 'react';

import {Page} from './Page';
import {IViewContext} from './View';

import '../less/pages.less';

export interface IPagesProps extends React.Props<any> {
    className?: string;
}

export interface IPagesState {
    pages: any[];
}

export class Pages extends React.Component<IPagesProps, any> {
    static contextTypes = {
        viewContext: React.PropTypes.object
    };

    private get viewContext() {
        return (this.context as any).viewContext as IViewContext;
    }

    private get pagesFromState() {
        return (this.state && this.state.pages) || [this.props.children];
    }

    constructor(props: IPagesProps, context: any) {
        super(props, context);
        this.viewContext.registerPages(this);
    }

    render() {
        return (
            <div className="pages">
                {this.pagesFromState}
            </div>
        );
    }

    componentDidMount() {
        this.viewContext.registerPages(this);
    }

    public changeRoute(pageComponent: React.ComponentClass<any> | React.StatelessComponent<any>) {
        this.setState({
            pages: [...this.pagesFromState, React.createElement(pageComponent, {
                key: new Date().getTime()
            })]
        })
    }
}