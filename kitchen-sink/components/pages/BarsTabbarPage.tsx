import * as React from 'react';
import {Page, Navbar, ContentBlock, Tab, Toolbar, Link} from 'framework7-react';


export const BarsTabbarPage = () => {
    return (
        <Page tabbarFixed>
            <Navbar backLink="Back" title="Tab Bar" sliding />

            <ContentBlock tabs>
                <Tab id="tab1" active>
                    <p>Tab 1</p>
                </Tab>
                <Tab id="tab2">
                    <p>Tab 2</p>
                </Tab>
                <Tab id="tab3">
                    <p>Tab 3</p>
                </Tab>
            </ContentBlock>

            <Toolbar tabbar>
                <Link href="#tab1" tabLink active text="Tab 1" />
                <Link href="#tab2" tabLink text="Tab 2" />
                <Link href="#tab3" tabLink text="Tab 3" />
            </Toolbar>
        </Page>
    );
}
