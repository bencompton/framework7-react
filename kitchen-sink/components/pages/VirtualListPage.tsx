import * as React from 'react';
import {Page, Navbar, List, ListItem, Searchbar, Template7Template, NavRight, Link, ContentBlock} from 'framework7-react';

const addNewItem = () => {
    console.log('addNewItem');
}

const searchAll = () => {
    console.log('searchAll');
}

export const VirtualListPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Searchbar" sliding>
                <NavRight>
                    <Link onClick={addNewItem}>New Item</Link>
                </NavRight>
            </Navbar>
            <Searchbar cancelLink="Cancel" searchList="#search-list"></Searchbar>
            <ContentBlock>
                <p>Virtual List allows to render lists with huge amount of elements without loss of performance. And it is fully compatible with all Framework7 list components such as Search Bar, Infinite Scroll, Pull To Refresh, Swipeouts (swipe-to-delete) and Sortable.</p>
                <p>Here is the example of virtual list with 10,000 items:</p>
            </ContentBlock>
            <List className="searchbar-not-found">
                <ListItem title="Nothing found" />
            </List>
            <List
                id="search-list"
                className="searchbar-found"
                media-list
                virtual
                virtualItems="items"
                virtualHeight={63}
                virtualSearchAll={searchAll}>
                {/*<Template7Template>
                    <ListItem mediaItem link="#" title={"title"} subtitle={"subtitle"} />
                </Template7Template>*/}
            </List>
        </Page>
    );
};