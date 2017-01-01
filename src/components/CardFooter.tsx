import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueCardFooter} from '../../framework7-vue/framework7-vue';

import '../less/cards.less';

export const CardFooter = reactifyF7Vue<void>({
    component: VueCardFooter,
    tag: 'f7-card-footer'
});