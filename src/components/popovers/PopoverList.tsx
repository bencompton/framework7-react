import * as React from 'react';

interface IPopoverList {
    listToDisplayWithValues: IPopoverItems[];
    onClick: Function;
    listClassName: string;
}

export interface IPopoverItems {
    value: string;
    displayText: string;
}

export class PopoverList extends React.Component<IPopoverList, any> {
    render() {
        return (
            <div className={`popover ${this.props.listClassName}`} style={{display : 'none'}}>
                <div className="popover-inner">
                    <div className="list-block">
                        <ul>
                            {this.props.listToDisplayWithValues.map((val, index) => {
                                return <li onClick={() => this.props.onClick(val.value)} key={`${index}-${val.value}`}><a className="item-link list-button close-popover">{val.displayText}</a></li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>         
        );
    }
}