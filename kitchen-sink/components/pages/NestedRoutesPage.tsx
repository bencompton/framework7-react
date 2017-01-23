import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem} from 'framework7-react';

export const NestedRoutesPage = () => {
    return (
    <Page>
        <Navbar backLink="Back" title="Nested Routes" sliding />
        <ContentBlockTitle>Tabs</ContentBlockTitle>
        <List>
            <ListItem title="Nested Routes with Tabs" link="/nested-routes/tabs/tab-2/" />
            <ListItem title="Nested Routes with a Tabbar" link="/nested-routes/tabbar/tab-2/" />
        </List>
    </Page>
    );
};

