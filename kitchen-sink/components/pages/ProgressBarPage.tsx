import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, Progressbar} from 'framework7-react';

export const ProgressbarPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Progress Bar" sliding />

            <ContentBlockTitle>Progressbar</ContentBlockTitle>
            <List>
                <ListItem>
                    <Progressbar progress={20} />
                </ListItem>
                <ListItem>
                    <Progressbar progress={50} color="red" />
                </ListItem>
                <ListItem>
                    <Progressbar progress={70} color="green" />
                </ListItem>
                <ListItem>
                    <Progressbar infinite color="blue" />
                </ListItem>
                <ListItem>
                    <Progressbar infinite color="multi" />
                </ListItem>
            </List>
        </Page>
    );
}