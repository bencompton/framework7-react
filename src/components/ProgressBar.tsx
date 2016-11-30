import * as React from 'react';

import {ColorsEnum, getColorCls} from '../utils/Colors';

import '../less/progress-bar.less';

export interface ProgressBarProps {    
    infinite: boolean;
    progress?: number;
    color?: ColorsEnum;
    animationSpeed?: number;
}

const setProgressBarClasses = (values: ProgressBarProps) => {
    let progressBarClassNames = [
        ('progressbar'),
        ((values.color) ? `${getColorCls(values.color)} preloader-${getColorCls(values.color)}` : ''),
        ((values.infinite) ? 'progressbar-infinite' : '')
    ].join(' ');
    
    return progressBarClassNames;
}

const setProgress = (values: ProgressBarProps) => {
    if (!values.infinite) {
        return {
            'transform': `translate3d(-${(100-values.progress)}%, 0px, 0px)`,
            'WebkitTransform': `translate3d(-${(100 - values.progress)}%, 0px, 0px)`,
            'transitionDuration': `${values.animationSpeed}ms` || '150ms',
            'WebkitTransitionDuration': `${values.animationSpeed}ms` || '150ms'  
        };
    } else {
        return null;
    }

}

export const ProgressBar = (props: ProgressBarProps) => {
    return (
        <div className={setProgressBarClasses(props)}>
            <span style={setProgress(props)}></span>
        </div>
    );
}

