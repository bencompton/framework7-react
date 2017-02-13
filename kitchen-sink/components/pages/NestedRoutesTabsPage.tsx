import * as React from 'react';
import {Page, Navbar, Subnavbar, ContentBlock, ContentBlockTitle, List, ListItem, Tabs, Tab, ButtonsSegmented, Button} from 'framework7-react';

export const NestedRoutesTabsPage = () => {
    return (
        <Page withSubnavbar>
            <Navbar backLink="Back" title="Nested Routes with Tabs" sliding>
                <Subnavbar sliding>
                    <ButtonsSegmented>
                        <Button routeTabLink="#tab1" href="/nested-routes/tabs/">Tab 1</Button>
                        <Button routeTabLink="#tab2" href="/nested-routes/tabs/tab-2/">Tab 2</Button>
                        <Button routeTabLink="#tab3" href="/nested-routes/tabs/tab-3/">Tab 3</Button>          
                    </ButtonsSegmented>
                </Subnavbar>
            </Navbar>

            <Tabs>
                <Tab routeTabId="tab1" />
                <Tab routeTabId="tab2" />
                <Tab routeTabId="tab3" />      
            </Tabs>
        </Page>
    );
};