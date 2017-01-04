import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueAccordionContent} from '../../framework7-vue/framework7-vue';

import '../less/accordion.less';

export const AccordionContent = reactifyF7Vue<void>({
    component: VueAccordionContent,
    tag: 'f7-accordion-content'
});