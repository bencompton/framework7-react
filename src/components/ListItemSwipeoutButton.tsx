import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueListItemSwipeoutButton} from '../../framework7-vue/framework7-vue';
import {ColorsEnum} from '../utils/Colors';

export interface IListItemSwipeoutButtonProps {
    overswipe?: boolean;
    close?: boolean;
    delete?: boolean;
    color?: ColorsEnum;
    bg?: ColorsEnum;
}

export const ListItemSwipeoutButton = reactifyF7Vue<IListItemSwipeoutButtonProps>({
    component: VueListItemSwipeoutButton,
    tag: 'f7-swipeout-button',
    events: [
        'click'
    ]
});