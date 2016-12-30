import * as React from 'react';
import * as classNames from 'classnames';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueNavCenter} from '../../framework7-vue/framework7-vue';

export interface INavCenterProps extends React.Props<any> {
    sliding?: boolean;
    title?: string;
}

export const NavCenter = reactifyF7Vue<INavCenterProps>({
    component: VueNavCenter,
    tag: 'f7-nav-center'
});