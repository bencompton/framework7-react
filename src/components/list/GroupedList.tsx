import * as React from 'react';

export interface IGroupedListProps {
    items: any[];
    innerListItemComponent: __React.ComponentClass<any> | __React.StatelessComponent<any>;
    groupBy: string;
    searchable: boolean;
    itemIdField?: string;
    selectedItemId?: number;
    onItemSelected?: (itemId: number) => void;
    additionalClassName?: string;
    selectedClass?: string;
}

const buildGroupedItems = (items: any[], groupBy: string) => {
    let groupedItems: { [groupName: string]: any[] } = {};

    for (let i = 0; i < items.length; i++) {
        let groupName = items[i][groupBy].charAt(0).toUpperCase();

        if (!(groupName in groupedItems)) groupedItems[groupName] = [];

        groupedItems[groupName].push(items[i]);
    }

    return groupedItems;
}

export const GroupedList = (props: IGroupedListProps) => {
    let groupedItems: { [groupName: string]: any[] } = buildGroupedItems(props.items, props.groupBy);

    return (
        <div className={`page-content ${props.additionalClassName}`}>
            <div className={`list-block ${props.additionalClassName} ${props.searchable ? 'list-block-search' : ''}`}>
                {Object.keys(groupedItems).map((value) => 
                    <div className="list-group" key={value}>
                        <ul>
                            <li className="list-group-title">{value}</li>
                            {groupedItems[value].map((item: any) =>
                                <li key={item.id} className={`${(props.selectedItemId === item.id) ? props.selectedClass : ''}`}>
                                    <div className="item-content" key={item.id} onClick={ () => props.onItemSelected(item.id) }>
                                        <div className="item-inner">
                                            {React.createElement(props.innerListItemComponent, item)}
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
