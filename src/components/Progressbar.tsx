import * as React from 'react';
import * as classNames from 'classnames';

import {ColorsEnum} from '../utils/Colors';
import {VueProgressbar} from '../../framework7-vue/framework7-vue';
import {reactifyF7Vue} from '../utils/ReactifyF7Vue';

import '../less/progressbar.less';

export interface IProgressbarProps extends React.Props<any> {
      color?: ColorsEnum,
      progress?: number,
      infinite?: boolean
}

export const Progressbar = reactifyF7Vue<IProgressbarProps>({
    component: VueProgressbar,
    tag: 'f7-progressbar'
});