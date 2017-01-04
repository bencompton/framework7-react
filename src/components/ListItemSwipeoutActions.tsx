import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueListItemSwipeoutActions} from '../../framework7-vue/framework7-vue';

export interface IListItemSwipeoutActionsProps {
    left?: boolean;
    right?: boolean;
    side?: string;
}

export const ListItemSwipeoutActions = reactifyF7Vue<IListItemSwipeoutActionsProps>({
    component: VueListItemSwipeoutActions,
    tag: 'f7-swipeout-actions'
});