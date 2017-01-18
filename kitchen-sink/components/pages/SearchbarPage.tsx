import * as React from 'react';
import {Page, Navbar, List, ListItem, Searchbar} from 'framework7-react';

const onSearch = (event) => {
    console.log('search', event[0]);
}

const onClear = (event) => {
    console.log('clear');
}

const onEnable = (event) => {
    console.log('enable');
}

const onDisable = (event) => {
    console.log('disable');
}

export const SearchbarPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Searchbar" sliding></Navbar>
            <Searchbar cancelLink="Cancel" searchList="#search-list" onSearchbarSearch={onSearch} onSearchbarEnable={onEnable} onSearchbarDisable={onDisable} onSearchbarClear={onClear} />
            
            <List className="searchbar-not-found">
                <ListItem title="Nothing found" />
            </List>
            <List className="searchbar-found" id="search-list">
            {
               Array.apply(null, Array(100)).map((item, index) => {
                    return (<ListItem  key={index} title={`Item ${index + 1}`} />);
                })
            }
            </List>
        </Page>
    );
};