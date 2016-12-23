import * as React from 'react';
import * as classNames from 'classnames';

import {IFramework7AppContext} from '../Framework7App';

import '../../less/toolbars.less';

export interface IToolbarProps extends React.Props<any> {
    className?: string;
    bottom?: boolean;
    tabbar?: boolean;
    labels?: boolean;
    scrollable?: boolean;
    beforeInner?: React.ReactElement<any>;
    afterInner?: React.ReactElement<any>;
}

export const Toolbar = (props: IToolbarProps, context: any) => {
    const framework7AppContext = context.framework7AppContext as IFramework7AppContext;

    const classes = classNames('toolbar', {
          'toolbar-bottom': this.bottom,
          'tabbar': this.tabbar,
          'tabbar-labels': this.labels,
          'tabbar-scrollabel': this.scrollable
    }, 
        framework7AppContext.themeClass
    );

    return (
        <div className={classes}>
            {props.beforeInner ? props.beforeInner : null}
            <div className="toolbar-inner">
                {props.children}
            </div>
            {props.afterInner ? props.afterInner : null}
        </div>
    );
};

(Toolbar as any).contextTypes = {
    framework7AppContext: React.PropTypes.object
};