import * as React from 'react';

import '../../less/grid.less';

export interface IGridColProps extends React.Props<any> {
    width: number;
    tabletWidth: number;
}

export const GridCol = (props: IGridColProps) => {
    return <div className={`col-${props.width ? props.width : 'auto'} tablet-${props.tabletWidth ? props.tabletWidth : 'auto'}`}>{props.children}</div>;
};