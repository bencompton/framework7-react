import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueCard} from '../../framework7-vue/framework7-vue';
import {CardHeader} from './CardHeader';
import {CardFooter} from './CardFooter';
import {CardContent} from './CardContent';

import '../less/cards.less';

export interface ICardProps extends React.Props<any> {
    title?: string | number;
    content?: string | number;
    footer?: string | number;
    inner?: boolean;
}

export const Card = reactifyF7Vue<ICardProps>({
    component: VueCard,
    tag: 'f7-card',
    instantiatedComponents: [
        CardHeader,
        CardFooter,
        CardContent
    ]
});