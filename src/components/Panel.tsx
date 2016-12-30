import * as React from 'react';
import * as classNames from 'classnames';

import {ColorsEnum} from '../utils/Colors';
import {LayoutEnum} from '../utils/Layout';
import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VuePanel} from '../../framework7-vue/framework7-vue';

import '../less/panels.less';

declare const require: any;
const Portal = require('react-portal');

export enum PanelSideEnum {
    Left,
    Right
}

export enum PanelEffectEnum {
    Cover,
    Reveal
}

export interface IPanelProps {
    side?: PanelSideEnum;
    effect?: PanelEffectEnum;
    cover?: boolean;
    reveal?: boolean;
    left?: boolean;
    right?: boolean;
    theme?: ColorsEnum;
    layout?: LayoutEnum;
    opened?: boolean;
}

export const Panel = reactifyF7Vue<IPanelProps>({
    component: VuePanel,
    tag: 'f7-panel'
});