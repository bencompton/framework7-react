import * as React from 'react';
import {Page, PageContent, Navbar, Left, Center, Right, BackButton, ContentBlock} from 'framework7-react';

import {routeState} from '../../utils/RouteState';

export const NavbarAndToolbarPage = () => {
    return (
        <Page>
            <Navbar>
                <Left><BackButton onClick={() => routeState.navigate('/', true)} /></Left>
                <Center>Navbars and Toolbars</Center>
                <Right></Right>
            </Navbar>
            <PageContent>
                <ContentBlock>
                    WIP
                </ContentBlock>
            </PageContent>
        </Page>
    );
};