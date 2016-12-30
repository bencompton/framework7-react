import * as React from 'react';
import * as classNames from 'classnames';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueNavRight} from '../../framework7-vue/framework7-vue';

export interface INavRightProps extends React.Props<any> {
    sliding?: boolean;
}

export const NavRight = reactifyF7Vue<INavRightProps>({
    component: VueNavRight,
    tag: 'f7-nav-right'
});