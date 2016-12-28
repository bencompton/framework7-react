import * as React from 'react';

import {reactifyVue} from '../../utils/ReactifyVue';
import {VueList} from '../../../framework7-vue/framework7-vue';
import {ListItem} from './ListItem';

import '../../less/lists.less';

export interface IListProps {
      inset?: boolean;
      mediaList?: boolean;
      grouped?: boolean;
      sortable?: boolean;
      form?: boolean;
      label?: string;
      accordion?: boolean;
      contacts?: boolean;

      noHairlines?: boolean;
      noHairlinesBetween?: boolean;

      // Tab
      tab?: boolean;
      active?: boolean;

      // Virtual List
      virtual?: boolean,
      virtualInit?: boolean,
      virtualItems?: any[] | Object;
      virtualHeight?: number | Function;
      virtualRowsBefore?: number;
      virtualRowsAfter?: number;
      virtualCols?: number;
      virtualCache?: boolean;
      virtualFilteredOnly?: boolean;
      virtualSearchByItem?: Function;
      virtualSearchAll?: Function;
      virtualRenderItem?: Function;
}

export const List = reactifyVue<IListProps>({
    component: VueList,
    events: {
        'sortable:open': 'onSortableOpen'
    },
    dependencyComponents: [{
        component: ListItem,
        tagName: 'list-item'
    }]
});