import * as React from 'react';

import '../../less/pages.less';

export interface IPageContentProps extends React.Props<any> {
    className?: string;
}

export const PageContent = (props: IPageContentProps) => {    
    return (
        <div className="page-content">
            {props.children}
        </div>
    );
};