import * as React from 'react';

import '../../less/grid.less';

export interface IGridRowProps extends React.Props<any> {
    noGutter?: boolean;
    className?: string;
}

export const GridRow = (props: IGridRowProps) => {
    return <div className={`row ${props.noGutter ? 'no-gutter' : ''} ${props.className ? props.className : ''}`}>{props.children}</div>;
};