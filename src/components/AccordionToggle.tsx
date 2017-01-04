import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueAccordionToggle} from '../../framework7-vue/framework7-vue';

import '../less/accordion.less';

export const AccordionToggle = reactifyF7Vue<void>({
    component: VueAccordionToggle,
    tag: 'f7-accordion-toggle'
});