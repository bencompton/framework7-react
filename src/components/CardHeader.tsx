import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueCardHeader} from '../../framework7-vue/framework7-vue';

import '../less/cards.less';

export const CardHeader = reactifyF7Vue<void>({
    component: VueCardHeader,
    tag: 'f7-card-header'
});