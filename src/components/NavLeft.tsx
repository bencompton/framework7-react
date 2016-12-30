import * as React from 'react';
import * as classNames from 'classnames';

import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {Link} from './Link';
import {VueNavLeft} from '../../framework7-vue/framework7-vue';

export interface INavLeftProps extends React.Props<any> {
    backLink?: boolean | string;
    sliding?: boolean;
}

export const NavLeft = reactifyF7Vue<INavLeftProps>({
    component: VueNavLeft,
    tag: 'f7-nav-left'
});