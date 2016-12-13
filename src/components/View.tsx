import * as React from 'react';
import * as invariant from 'invariant';
import {Page} from './Page';

import '../less/views.less';

export interface IViewProps {
    dockLeft?: boolean;
}

/* tslint:disable-next-line */
export interface IViewContext extends IViewProps {

}

export class View extends React.Component<IViewProps, any> {
    public static childContextTypes = {
        viewContext: React.PropTypes.object
    };

    public getChildContext() {
        return {
            viewContext: {
                dockLeft: this.props.dockLeft
            }
        };
    }

    public render() {
        const children = React.Children.toArray(this.props.children);
        const page = children.length ? children[0] as React.ReactElement<any> : null;

        invariant(
            !page || (page.type !== typeof Page && children.length > 0),
            'A View is expected to have one Page component within it'
        );

        return page;
    }
}

export class ViewInner extends React.Component<any, any> {
    public static contextTypes = {
        viewContext: React.PropTypes.object
    };

    private get viewContext() {
        return (this.context as any).viewContext as IViewContext;
    }

    private get containsNavbar() {
        return true;
    }

    public render() {
        return (
            <div className={`view${this.containsNavbar ? ' navbar-through' : ''}${this.viewContext.dockLeft ? ' view-left' : ''}`}>
                {this.props.children}
            </div>
        );
    }
}