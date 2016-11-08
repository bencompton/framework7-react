import * as React from 'react';

import {ColorsEnum, getColorCls} from '../../utils/Colors';
import {BlockMarginTypeEnum} from '../../utils/BlockMarginType'
import {ListBlock} from '../list/ListBlock';

export enum ButtonTypeEnum {
    Standard,
    Filled
}

export enum ButtonSizeEnum {
    Normal,
    Big
}

export interface IButtonProps {
    text: string;
    onClick: Function;
    additionalClassNames?: string;
    type?: ButtonTypeEnum;
    size?: ButtonSizeEnum;
    round?: boolean;
    color?: ColorsEnum;
    inset?: boolean;
}

const getButtonSizeCls = (props: IButtonProps) => {
    return props.size === ButtonSizeEnum.Big ? 'button-big' : '';
};

const getButtonTypeCls = (props: IButtonProps) => {
    return props.type === ButtonTypeEnum.Filled ? 'button-fill' : '';
};

const getButtonRoundnessCls = (props: IButtonProps) => {
    return props.round ? 'button-round' : '';
};

const ButtonInner = (props: IButtonProps) => {
    return <a
        className={`button ${getButtonTypeCls(props)} ${getButtonSizeCls(props)} ${getButtonRoundnessCls(props)} ${getColorCls(props.color)} ${props.additionalClassNames || ''}`}
        onClick={(e: MouseEvent) => {
            e.preventDefault();
            if (props.onClick) props.onClick();
        }}>
            {props.text}
        </a>;
};

export const Button = (props: IButtonProps) => {
    if (props.inset) {
        return (
            <ListBlock marginType={BlockMarginTypeEnum.Inset}>
                <li>
                    {React.createElement(ButtonInner, props)}
                </li>
            </ListBlock>
        );
    } else {
        return React.createElement(ButtonInner, props);
    }
};