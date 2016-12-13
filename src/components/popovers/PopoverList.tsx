import * as React from 'react';

export interface IPopoverList {
    listToDisplayWithValues: IPopoverItems[];
    onClick: Function;
    listClassName: string;
}

export interface IPopoverItems {
    value: string;
    displayText: string;
}

const getListItems = (props: IPopoverList) => {
    return props.listToDisplayWithValues.map((val, index) => {
        return <li
            onClick={() => props.onClick(val.value)}
            key={`${index}-${val.value}`}
        >
            <a className="item-link list-button close-popover">{val.displayText}</a>
        </li>;
    });
};

export class PopoverList extends React.Component<IPopoverList, any> {
    public render() {
        return (
            <div className={`popover ${this.props.listClassName}`} style={{display : 'none'}}>
                <div className="popover-inner">
                    <div className="list-block">
                        <ul>
                            {getListItems(this.props)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}