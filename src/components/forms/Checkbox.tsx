import * as React from 'react';

import '../less/forms.less';

export interface ICheckboxProps extends React.Props<any> {
    id: string | number;
    text: string;
    checked: boolean;
    showAsLink?: boolean;
    onTap?: (id: string | number) => void;
}

const getCheckboxInner = (props: ICheckboxProps) => {
    return (
        <label className="label-checkbox item-content">
            <input type="checkbox" value={props.text} checked={props.checked} readOnly={true} />
            <div className="item-media">
                <i className="icon icon-form-checkbox"></i>
            </div>
            <div className="item-inner">
                <div className="item-title">{props.text}</div>
            </div>
        </label>
    );
};

export const Checkbox = (props: ICheckboxProps) => {
    return (
        <li key={props.id} onClick={(e: any) => {
            e.preventDefault();

            if (props.onTap) {
                props.onTap(props.id);
            }
        }}>
            {props.showAsLink ? <a className="item-link">{getCheckboxInner(props)}</a> : getCheckboxInner(props)}
        </li>
    );
};
