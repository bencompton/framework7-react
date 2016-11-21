import * as React from 'react';
import * as invariant from 'invariant';
import {AnimationDirectionEnum} from './AnimationWrapper';
import {Navbar} from './toolbars-and-navbars/Navbar';
import {Page} from './Page';

import '../less/views.less';

export interface IViewProps {
    dockLeft?: boolean;
}

export interface IViewContext extends IViewProps { }

export class View extends React.Component<IViewProps, any> {
    static childContextTypes = {
        viewContext: React.PropTypes.object
    }

    private getChildContext() {
        return {
            viewContext: {
                dockLeft: this.props.dockLeft
            }
        }
    }

    render() {
        let children = React.Children.toArray(this.props.children),
            page = children.length ? children[0] as React.ReactElement<any> : null;

        invariant(
            !page || (page.type !== typeof Page && children.length > 0),
            'A View is expected to have one Page component within it'
        );

        return page;
    }
}

export class ViewInner extends React.Component<any, any> {
    static contextTypes = {
        viewContext: React.PropTypes.object
    }

    private get viewContext() {
        return (this.context as any).viewContext as IViewContext;
    }

    private get containsNavbar() {
        //TODO: Actually check for Navbar
        return true;
    }

    render() {
        return (
            <div className={`view${this.containsNavbar ? ' navbar-through' : ''}${this.viewContext.dockLeft ? ' view-left' : ''}`}>
                {this.props.children}
            </div>
        );
    }
};