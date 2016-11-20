import * as React from 'react';
import {AnimationParent} from './AnimationWrapper';

import '../less/views.less';

export const Views = (props: React.Props<any>) => {
    return (
        <div className="views">
            {props.children}
        </div>
    );
};