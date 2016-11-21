import * as React from 'react';
import {Page, PageBody, PageContent, Navbar, Left, Center, Right, BackButton, ContentBlock} from 'framework7-react';

import {routeState} from '../../utils/RouteState';

export const NavbarAndToolbarPage = () => {
    return (
        <Page name="navbar-and-toolbar">
            <Navbar>
                <Left><BackButton onClick={() => routeState.navigate('/', true)} /></Left>
                <Center>Navbars and Toolbars</Center>
                <Right></Right>
            </Navbar>
            <PageBody>
                <PageContent>
                    <ContentBlock>
                        WIP
                    </ContentBlock>
                </PageContent>
            </PageBody>
        </Page>
    );
};