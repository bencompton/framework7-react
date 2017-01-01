import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueContentBlock} from '../../framework7-vue/framework7-vue';

import '../less/content-block.less';

export interface IBlockProps extends React.Props<any> {
    inset?: boolean,
    inner?: boolean,
    tabs?: boolean,
    tab?: boolean,
    active?: boolean,
    noHairlines?: boolean,
    noHairlinesBetween?: boolean,
}

export const ContentBlock = reactifyF7Vue<IBlockProps>({
    component: VueContentBlock,
    tag: 'f7-block',
    events: [
        'tab:show',
        'tab:hide'
    ]
});