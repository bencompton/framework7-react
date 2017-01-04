import * as React from 'react';
import {Page, Navbar, NavRight, Link, ContentBlockTitle, List, ListItem} from 'framework7-react';

export interface ISortablePageState {
    items: number[];
    sorting: boolean;
}

export class SortablePage extends React.Component<any, ISortablePageState> {
    constructor() {
        super();
        this.state = {
            sorting: false,
            items: [1, 2, 3, 4, 5]
        };
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Sortable" sliding>
                    <NavRight>
                        <Link toggleSortable="#sortable">{this.state.sorting ? 'Done' : 'Open'}</Link>
                    </NavRight>
                </Navbar>

                <ContentBlockTitle>Sortable List</ContentBlockTitle>
                <List id="sortable" sortable onSortableOpen={this.onOpen.bind(this)} onSortableClose={this.onClose.bind(this)}>
                    {
                        this.state.items.map(item => {
                            return <ListItem key={item} title={`Item ${item}`} />;
                        })
                    }
                </List>
            </Page>
        );
    }

    private onOpen() {
        this.setState({
            ...this.state,
            sorting: !this.state.sorting
        });
    }

    private onClose() {
        this.setState({
            ...this.state,
            sorting: !this.state.sorting
        });
    }
};