import * as React from 'react';

import {ColorsEnum} from '../utils/Colors';
import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueBadge} from '../../framework7-vue/framework7-vue';

import '../less/badges.less';

export interface IBadgeProps extends React.Props<any> {
    color?: ColorsEnum;
}

export const Badge = reactifyF7Vue<IBadgeProps>({
    component: VueBadge,
    tag: 'f7-badge'
});