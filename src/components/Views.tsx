import * as React from 'react';
import {AnimationParent} from './AnimationWrapper';

import '../less/views.less';

export const Views = (props: __React.Props<any>) => {
    return (
        <AnimationParent>
            <div className="views">
                {props.children}
            </div>
        </AnimationParent>
    );
};