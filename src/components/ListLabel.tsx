import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueListLabel} from '../../framework7-vue/framework7-vue';

import '../less/lists.less';

export const ListLabel = reactifyF7Vue<void>({
    component: VueListLabel,
    tag: 'f7-list-label'
});