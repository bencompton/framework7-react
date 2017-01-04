import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueContentBlockTitle} from '../../framework7-vue/framework7-vue';

import '../less/content-block.less';

export const ContentBlockTitle = reactifyF7Vue<void>({
    component: VueContentBlockTitle,
    tag: 'f7-block-title'
});