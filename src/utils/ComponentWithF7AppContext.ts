import * as React from 'react';

import {IFramework7AppContext} from '../components/Framework7App';

export class ComponentWithF7AppContext<P, S> extends React.Component<P, S> {
    public static contextTypes = {
        Framework7AppContext: React.PropTypes.object
    };

    protected get Framework7AppContext() {
        return (this.context as any).framework7AppContext as IFramework7AppContext;
    }
}