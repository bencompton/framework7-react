import * as React from 'react';

import {ColorsEnum, getColorCls} from '../utils/Colors';

import '../less/badges.less';

export interface IBadgeProps {    
    text: string;
    color?: ColorsEnum;
}

export const Badge = (props: IBadgeProps) => {
    return <span className={`badge ${getColorCls(props.color ? props.color : ColorsEnum.Red)}`}>{props.text}</span>
};