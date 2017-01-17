import * as React from 'react';
import {Page, Navbar, ContentBlock, ContentBlockTitle, List, ListItem, ListLabel} from 'framework7-react';

export interface IInfinitePageState {
    items: number[];
    counter: number;
}

export class InfinitePage extends React.Component<any, IInfinitePageState> {
    private timeout: any;

    constructor() {
        super();
        let itemsArr: number[] = [];

        for (let i = 0; i < 25; i++) {
            itemsArr.push(i + 1);
        }

        this.state = {
            items: itemsArr,
            counter: itemsArr.length
        };
    }

    render() {
        return (
            <Page infiniteScroll onInfinite={this.onInfiniteScroll.bind(this)}>
                <Navbar backLink="Back" title="Infinite Scroll" sliding></Navbar>
                
                <ContentBlock>Scroll list down to load new items</ContentBlock>
                <ContentBlockTitle>Infinite Scroll</ContentBlockTitle>
                <List>
                    {
                        this.state.items.map(n => {
                            return <ListItem
                                key={n}
                                title={n.toString()}
                            />;
                        })
                    }
                </List>
            </Page>
        );
    }

    private onInfiniteScroll() {
        let self = this;
        let newItems = this.state.items.slice();
        let newCounter = this.state.counter;

        if (this.timeout) {
            clearTimeout(this.timeout);
        } 
        
        this.timeout = setTimeout(function () {
            for (let i = newCounter; i < newCounter + 25; i++) {
                newItems.push(i + 1);
            }
            
            self.setState({
                counter: newCounter + 25,
                items: newItems
            });
        }, 500); 
    }       
};