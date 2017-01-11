import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, ListLabel, ListGroup, ListButton} from 'framework7-react';

export const ListsPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Lists" sliding></Navbar>

            <ContentBlockTitle>List</ContentBlockTitle>
            <List>
                {
                    [1, 2, 3, 4, 5].map(n => {
                        return <ListItem
                            key={n}
                            title={n === 3 ? 'Divider' : `Item ${n}`}
                            badge="3"
                            badgeColor="red"
                            divider={n === 3}
                        />;
                    })
                }
            <ListLabel>Hello I'm List Label</ListLabel>
            </List>

            <ContentBlockTitle>Grouped List</ContentBlockTitle>
            <List>
                {
                    [1, 2].map(n => {
                        return (
                            <ListGroup key={n}>
                                {
                                    [1, 2, 3].map(m => {
                                        return <ListItem
                                            key={m}
                                            title={m === 1 ? 'Group Title' : `Group Item ${m - 1}`}
                                            groupTitle={m === 1}
                                        />
                                    })
                                }
                            </ListGroup>
                        );
                    })
                }
                <ListLabel>Hello I'm List Label</ListLabel>
            </List>

            <ContentBlockTitle>Media List</ContentBlockTitle>
            <List mediaList>
                {
                    [1, 2].map(n => {
                        return <ListItem
                            key={n}
                            title={`Item ${n}`}
                            subtitle = {`Subtitle ${n}`}
                            media={`<img src="http://lorempixel.com/160/160/people/${n}" width="80">`}
                            text="Some text goes here"
                            after="After"
                            link="http://google.com"
                        />;
                    })
                }
            </List>

            <ContentBlockTitle>Buttons List</ContentBlockTitle>
            <List inset>
                {
                    [1, 2, 3].map(n => {
                        return <ListButton key={n} title={`List Button ${n}`} link="http://google.com" />
                    })
                }
            </List>
        </Page>
    );
};