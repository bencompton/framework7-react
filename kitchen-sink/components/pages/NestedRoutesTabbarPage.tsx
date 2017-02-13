import * as React from 'react';
import {Page, Navbar, Toolbar, ContentBlock, ContentBlockTitle, List, ListItem, Tab, Link} from 'framework7-react';

export const NestedRoutesTabbarPage = () => {
    return (
        <Page tabbarFixed>
            <Navbar backLink="Back" title="Nested Routes with a Tab Bar" sliding />

            <ContentBlock tabs>
                <Tab routeTabId="tab1" />
                <Tab routeTabId="tab2" />
                <Tab routeTabId="tab3" />
            </ContentBlock>

            <Toolbar tabbar labels>
                <Link href="/nested-routes/tabbar/" routeTabLink="#tab1" text="Tab 1" />
                <Link href="/nested-routes/tabbar/tab-2/" routeTabLink="#tab2" text="Tab 2" />
                <Link href="/nested-routes/tabbar/tab-3/" routeTabLink="#tab3" text="Tab 3" />
            </Toolbar>
        </Page>
    );
};

