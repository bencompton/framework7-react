import * as React from 'react';

import '../../less/pages.less';

export interface IPageProps extends React.Props<any> {
    className?: string;
}

export const Page = (props: IPageProps) => {    
    return (
        <div className="page">
            {props.children}
        </div>
    );
};