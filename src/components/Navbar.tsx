import * as React from 'react';

import {NavLeft} from './NavLeft';
import {NavCenter} from './NavCenter';
import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueNavbar} from '../../framework7-vue/framework7-vue';

import '../less/toolbars.less';

export interface INavbarProps extends React.Props<any> {
    className?: string;
    backLink?: boolean | string;
    sliding?: boolean;
    title?: string;
    beforeInner?: React.ReactElement<any>;
    afterInner?: React.ReactElement<any>;
}

export const Navbar = reactifyF7Vue<INavbarProps>({
    component: VueNavbar,
    tag: 'f7-navbar'
});