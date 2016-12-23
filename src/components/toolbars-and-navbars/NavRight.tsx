import * as React from 'react';
import * as classNames from 'classnames';

export interface INavRightProps extends React.Props<any> {
    sliding?: boolean;
}

export const NavRight = (props: INavRightProps) => {
    const classes = classNames('right', {
        'sliding': props.sliding
    });

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};