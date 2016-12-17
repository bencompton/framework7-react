import * as React from 'react';

import {Page} from './Page';
import {IViewContext} from './View';

export interface IPagesProps extends React.Props<any> {

}

export interface IPagesState {
    pages: Page[];
}

export class Pages extends React.Component<IPagesProps, any> {
    static contextTypes = {
        viewContext: React.PropTypes.object
    };

    private get viewContext() {
        return (this.context as any).pageContext as IViewContext;
    }

    constructor(props: IPagesProps, context: any) {
        super(props, context);
        this.viewContext.registerPages(this);
    }

    render() {
        return (
            <div className="pages">
                {this.state.pages || this.props.children}
            </div>
        );
    }

    componentDidMount() {
        this.viewContext.registerPages(this);
    }

    public changeRoute(pageComponent: React.ComponentClass<any> | React.StatelessComponent<any>) {
        this.setState({
            pages: [...this.state.pages, pageComponent]
        })
    }
}