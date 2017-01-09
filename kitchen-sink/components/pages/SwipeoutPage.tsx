import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, ListItemSwipeoutActions, ListItemSwipeoutButton} from 'framework7-react';

const onSwipeoutDeleted = (event) => {
    console.log('swipeout deleted');
};

export const SwipeoutPage = () => (
    <Page>
        <Navbar backLink="Back" title="Swipeout" sliding />

        <ContentBlockTitle>Swipe To Delete</ContentBlockTitle>
        <List>
        {
            [1, 2, 3].map(n => {
                return (
                    <ListItem swipeout title={`Item ${n}`} onSwipeoutDeleted={onSwipeoutDeleted} key={n}>
                        <ListItemSwipeoutActions>
                            <ListItemSwipeoutButton delete>Delete</ListItemSwipeoutButton>
                        </ListItemSwipeoutActions>
                    </ListItem>
                );
            })
        }
        </List>

        <ContentBlockTitle>Multiple Actions</ContentBlockTitle>
        <List>
        {
            [1, 2, 3].map(n => {
                return (
                    <ListItem swipeout title={`Item ${n}`} onSwipeoutDeleted={onSwipeoutDeleted} key={n}>
                        <ListItemSwipeoutActions>
                            <ListItemSwipeoutButton close color="green">Close</ListItemSwipeoutButton>
                            <ListItemSwipeoutButton delete overswipe>Delete</ListItemSwipeoutButton>
                        </ListItemSwipeoutActions>
                    </ListItem>
                );
            })
        }
        </List>

        <ContentBlockTitle>Actions On Left</ContentBlockTitle>
        <List>
        {
            [1, 2, 3].map(n => {
                return (
                    <ListItem swipeout title={`Item ${n}`} onSwipeoutDeleted={onSwipeoutDeleted} key={n}>
                        <ListItemSwipeoutActions left>
                            <ListItemSwipeoutButton close color="blue">Reply</ListItemSwipeoutButton>
                            <ListItemSwipeoutButton close color="green">Close</ListItemSwipeoutButton>
                        </ListItemSwipeoutActions>
                    </ListItem>
                );
            })
        }
        </List>

        <ContentBlockTitle>Actions On Both Sides</ContentBlockTitle>
        <List mediaList>
        {
            [1, 2].map(n => {
                return (
                    <ListItem
                        key={n}
                        swipeout
                        title={`Item ${n}`}
                        subtitle={`Subtitle ${n}`}
                        media={`<img src="http://lorempixel.com/160/160/people/${n}" width="80">`}
                        text="Some text goes here"
                        after="After"
                        link="http://google.com"
                    >
                        <ListItemSwipeoutActions left>
                            <ListItemSwipeoutButton close color="blue">Reply</ListItemSwipeoutButton>
                            <ListItemSwipeoutButton close color="green">Close</ListItemSwipeoutButton>
                        </ListItemSwipeoutActions>
                        <ListItemSwipeoutActions right>
                            <ListItemSwipeoutButton close color="orange">More</ListItemSwipeoutButton>
                            <ListItemSwipeoutButton delete overswipe>Delete</ListItemSwipeoutButton>
                        </ListItemSwipeoutActions>
                    </ListItem>
                );
            })
        }
        </List>
    </Page>
);