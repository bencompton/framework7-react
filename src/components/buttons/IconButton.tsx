import * as React from 'react';

import {Icon} from '../Icon';

import '../../less/forms.less';

export interface IIconButtonProps {
    onClick: () => void;
    iconCls: string;
    additionalClassNames?: string;
}

export const IconButton = (props: IIconButtonProps) => {
    return (
        <a className={`button ${props.additionalClassNames || ''}`} onClick={props.onClick}>
            <Icon iconClass={props.iconCls} />
        </a>
    );
};