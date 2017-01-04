import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueAccordionItem} from '../../framework7-vue/framework7-vue';

import '../less/accordion.less';

export const AccordionItem = reactifyF7Vue<void>({
    component: VueAccordionItem,
    tag: 'f7-accordion-item',
    events: [
        'accordion:open',
        'accordion:opened',
        'accordion:close',
        'accordion:closed'
    ]
});