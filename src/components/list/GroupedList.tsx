import * as React from 'react';

import '../../less/lists.less';

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
    const groupedItems: { [groupName: string]: any[] } = {};

    for (let i = 0; i < items.length; i++) {
        const groupName = items[i][groupBy].charAt(0).toUpperCase();

        if (!(groupName in groupedItems)) {
            groupedItems[groupName] = [];
        }

        groupedItems[groupName].push(items[i]);
    }

    return groupedItems;
};

const getGroupItems = (groupedItems: { [groupName: string]: any[] }, value: string, props: IGroupedListProps) => {
    groupedItems[value].map((item: any) =>
        <li key={item.id} className={`${(props.selectedItemId === item.id) ? props.selectedClass : ''}`}>
            <div className="item-content" key={item.id} onClick={() => props.onItemSelected(item.id)}>
                <div className="item-inner">
                    {React.createElement(props.innerListItemComponent, item)}
                </div>
            </div>
        </li>
    );
};

const getListGroups = (props: IGroupedListProps) => {
    const groupedItems: { [groupName: string]: any[] } = buildGroupedItems(props.items, props.groupBy);

    return Object.keys(groupedItems).map((value) => (
        <div className="list-group" key={value}>
            <ul>
                <li className="list-group-title">{value}</li>
                {getGroupItems(groupedItems, value, props)}
            </ul>
        </div>
    ));
};

export const GroupedList = (props: IGroupedListProps) => {
    return (
        <div className={`list-block ${props.additionalClassName} ${props.searchable ? 'list-block-search' : ''}`}>
            {getListGroups(props)}
        </div>
    );
};
