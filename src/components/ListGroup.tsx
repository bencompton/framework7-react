import * as React from 'react';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueListGroup} from '../../framework7-vue/framework7-vue';

import '../less/lists.less';

export interface IListGroupProps {
    mediaList?: boolean;
    sortable?: boolean;
}

export const ListGroup = reactifyF7Vue<IListGroupProps>({
    component: VueListGroup,
    tag: 'f7-list-group'
});