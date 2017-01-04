import * as React from 'react';
import * as classNames from 'classnames';

import {ColorsEnum} from '../utils/Colors';
import {reactifyF7Vue} from '../utils/ReactifyF7Vue';
import {VueIcon} from '../../framework7-vue/framework7-vue';

export interface IIconProps {
    color?: ColorsEnum;
    material?: string; //Material Icons
    f7?: string; //Framework7 Icons
    ion?: string; //Ionicons
    fa?: string; //Font Awesome
    icon?: string; //Custom
    ifMaterial?: string;
    ifIos?: string;
    size?: string | number;
}

export const Icon = reactifyF7Vue<IIconProps>({
    component: VueIcon,
    tag: 'f7-icon'
})