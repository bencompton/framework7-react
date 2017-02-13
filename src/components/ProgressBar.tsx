import * as React from 'react';

import {ColorsEnum, getColorCls} from '../utils/Colors';

import '../less/progress-bar.less';

export interface IProgressBarProps {
    infinite: boolean;
    progress?: number;
    color?: ColorsEnum;
    animationSpeed?: number;
}

const setProgressBarClasses = (values: IProgressBarProps) => {
    return [
        ('progressbar'),
        ((values.color) ? `${getColorCls(values.color)} preloader-${getColorCls(values.color)}` : ''),
        ((values.infinite) ? 'progressbar-infinite' : '')
    ].join(' ');
};

const setProgress = (values: IProgressBarProps) => {
    if (!values.infinite) {
        return {
            transform: `translate3d(-${(100 - values.progress)}%, 0px, 0px)`,
            WebkitTransform: `translate3d(-${(100 - values.progress)}%, 0px, 0px)`,
            transitionDuration: `${values.animationSpeed}ms` || '150ms',
            WebkitTransitionDuration: `${values.animationSpeed}ms` || '150ms'
        };
    } else {
        return null;
    }

};

export const ProgressBar = (props: IProgressBarProps) => {
    return (
        <div className={setProgressBarClasses(props)}>
            <span style={setProgress(props)} />
        </div>
    );
};