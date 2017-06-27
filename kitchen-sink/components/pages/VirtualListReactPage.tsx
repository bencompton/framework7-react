import * as React from 'react';
import {Page, Navbar, NavRight, Link, Searchbar, ContentBlock, List, ListItem} from 'framework7-react';

export interface IVirtualListItem {
    title: string;
    subtitle: string;
}

export interface IVirtualListData {
    topPosition: number;
    items: IVirtualListItem[];
}

export interface IVirtualListReactPageState {
    items: IVirtualListItem[];
    vlData: IVirtualListData;
}

export class VirtualListReactPage extends React.Component<any, IVirtualListReactPageState> {
    constructor(props: any, context: any) {
        super(props, context);

        const items = (() => {
            let items = [];

            for (var i = 1; i <= 10000; i++) {
                items.push({
                    title: 'Item ' + i,
                    subtitle: 'Subtitle ' + i
                });
            }

            return items;
        })();        

        this.state = {
            items,
            vlData: {
                items: [],
                topPosition: 0
            }
        };
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Virtual List" sliding>
                    <NavRight>
                        <Link onClick="addNewItem">New Item</Link>
                    </NavRight>
                </Navbar>
                <Searchbar cancelLink="Cancel" searchList="#search-list" />
                <ContentBlock>
                    <p>Virtual List allows to render lists with huge amount of elements without loss of performance. And it is fully compatible with all Framework7 list components such as Search Bar, Infinite Scroll, Pull To Refresh, Swipeouts (swipe-to-delete) and Sortable.</p>
                    <p>Here is the example of virtual list with 10 000 items:</p>
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
                    virtualRenderExternal={this.renderVl.bind(this)}
                    virtualHeight={63}
                    virtualSearchAll={this.searchAll.bind(this)}
                >
                <ul>
                    {this.state.vlData.items.map(item => {
                        return (
                            <ListItem  
                                key={item.title}                          
                                mediaItem
                                link="#"
                                title={item.title}
                                subtitle={item.subtitle}
                                style={{top: this.state.vlData.topPosition}}
                            />
                        );
                    })}
                </ul>
                </List>
            </Page>
        );
    }

    renderVl(vl: any, renderData: IVirtualListData) {
        this.setState({
            ...this.state,
            vlData: renderData
        });
    }

    addNewItem() {
        this.setState({
            ...this.state,
            items: [...this.state.items, {
                title: 'Item ' + (this.state.items.length + 1),
                subtitle: 'Subtitle ' + (this.state.items.length + 1)        
            }]
        });            
    }

    searchAll(query: string) {
        var self = this;
        var found = [];
        
        for (var i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].title.indexOf(query) >= 0 || query.trim() === '') found.push(i);
        }

        return found;
    }
}