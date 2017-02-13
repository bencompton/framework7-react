import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, ListLabel} from 'framework7-react';

export interface IPullRefreshPageState {
    items: number[];
    counter: number;
}

export class PullRefreshPage extends React.Component<any, IPullRefreshPageState> {
    constructor() {
        super();
        this.state = {
            items: [1, 2, 3, 4, 5],
            counter: 5
        };
    }

    render() {
        return (
            <Page pullToRefresh onPtrRefresh={this.onRefresh.bind(this)}>
                <Navbar backLink="Back" title="Pull To Refresh" sliding></Navbar>

                <ContentBlockTitle>Pull To Refresh</ContentBlockTitle>
                <List>
                    {
                        this.state.items.map(n => {
                            return <ListItem
                                key={n}
                                title={n.toString()}
                            />;
                        })
                    }
                <ListLabel>Pull list down to refresh items</ListLabel>
                </List>
            </Page>
        );
    }

    private onRefresh(event, callBack) {
        let self = this;
        let newItems = this.state.items.slice();
        let newCounter = this.state.counter + 1;

        newItems.push(newCounter);

        setTimeout(function () {
            self.setState({
                counter: newCounter,
                items: newItems
            });

            callBack();
        }, 2000);        
    }
};