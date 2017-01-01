import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueCardContent} from '../../framework7-vue/framework7-vue';

import '../less/cards.less';

export interface ICardProps extends React.Props<any> {
    inner?: boolean;
}

export const CardContent = reactifyF7Vue<ICardProps>({
    component: VueCardContent,
    tag: 'f7-card-content'
});