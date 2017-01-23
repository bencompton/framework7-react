import * as React from 'react';
import {Page, Navbar, List, ListItem, Searchbar, Template7Template, NavRight, Link, ContentBlock} from 'framework7-react';

export interface IVirtualListPageState {
    items: IVirtualListItem[]
}

export interface IVirtualListItem {
    title: string,
    subtitle: string
}

export class VirtualListPage extends React.Component<any, IVirtualListPageState> {
    constructor() {
        super();
        let defaultItems = this.getVirtualListPageDefaultState();

        this.state = {
            items: defaultItems
        };
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Searchbar" sliding>
                    <NavRight>
                        <Link onClick={this.addNewItem.bind(this)}>New Item</Link>
                    </NavRight>
                </Navbar>
                <Searchbar cancelLink="Cancel" searchList="#search-list"></Searchbar>
                <ContentBlock>
                    <p>Virtual List allows to render lists with huge amount of elements without loss of performance. And it is fully compatible with all Framework7 list components such as Search Bar, Infinite Scroll, Pull To Refresh, Swipeouts (swipe-to-delete) and Sortable.</p>
                    <p>{`Here is the example of virtual list with 10,000 items: ${this.state.items.length}`}</p>
                </ContentBlock>
                <List className="searchbar-not-found">
                    <ListItem title="Nothing found" />
                </List>
                <List
                    id="search-list"
                    className="searchbar-found"
                    mediaList
                    virtual
                    virtualItems={this.state.items}
                    virtualHeight={63}
                    virtualSearchAll={this.searchAll}>
                    <Template7Template>
                        <ListItem mediaItem link="#" title={"{{title}}"} subtitle={"{{subtitle}}"} />
                    </Template7Template>
                </List>
            </Page>
        );
    }

    private addNewItem() {
        let newItem: IVirtualListItem = {
            title: `Item ${this.state.items.length +1 }`,
            subtitle: `Subtitle ${this.state.items.length + 1}`
        };

        this.setState({
            items: [
                ...this.state.items,
                newItem
            ]
        });
    }

    private searchAll(query, items) {
        let found = [];

        for (let i = 0; i < items.length; i++) {
            if (items[i].title.indexOf(query) >= 0 || query.trim() === '') {
                found.push(i);
            }
        }

        return found;
    }

    private getVirtualListPageDefaultState() {
        let items: IVirtualListItem[] = [];

        for (let i = 1; i <= 10000; i++) {
                items.push({
                title: 'Item ' + i,
                subtitle: 'Subtitle ' + i
            })
        }       

        return items;
    }
};