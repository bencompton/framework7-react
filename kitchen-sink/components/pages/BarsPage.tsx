import * as React from 'react';
import {Page, Navbar, List, ListItem} from 'framework7-react';

export const BarsPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Navbars And Toolbars" sliding />

            <List>
                <ListItem title="Tab Bar" link="/bars-tabbar/" />
                <ListItem title="Tab Bar With Labels" link="/bars-tabbar-labels/" />            
                <ListItem title="Hide On Scroll" link="/bars-hide/" />
                <ListItem title="Sub Navbar" link="/bars-subnavbar/" />
            </List>
        </Page>
    );
}
