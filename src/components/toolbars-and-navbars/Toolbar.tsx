import * as React from 'react';

interface IToolbarProps extends React.Props<any> {
    className?: string;
}

export const Toolbar = (props: IToolbarProps) => {
    return (
        <div className={`toolbar ${props.className || ''}`}>
            <div className="toolbar-inner">
                {props.children}
            </div>
        </div>
    );
};

interface IToolbarChildProps extends React.Props<any> {
    className?: string;
}

export const Left = (props: IToolbarChildProps) => <div className={`left sliding ${props.className || ''}`}>{props.children} </div>;
export const Center = (props: IToolbarChildProps) => <div className={`center sliding ${props.className || ''}`}>{props.children} </div>;
export const Right = (props: IToolbarChildProps) => <div className={`right ${props.className || ''}`}>{props.children} </div>;