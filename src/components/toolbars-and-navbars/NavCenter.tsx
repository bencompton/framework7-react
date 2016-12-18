import * as React from 'react';
import * as classNames from 'classnames';

export interface INavCenterProps extends React.Props<any> {
    sliding?: boolean;
    title?: string;
}

export const NavCenter = (props: INavCenterProps) => {
    const classes = classNames('center', {
        'sliding': props.sliding
    });

    return (
        <div className={classes}>
            {props.title ? props.title : null}
            {props.children}
        </div>
    );
};