import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueStatusbar} from '../../framework7-vue/framework7-vue';

export const Statusbar = reactifyF7Vue({
    component: VueStatusbar,
    tag: 'f7-statusbar'
});