import * as React from 'react';
import {Page, PageBody, PageContent, Navbar, Left, Center, Right, ListBlock, ListItem, BackButton, AnimationDirectionEnum} from 'framework7-react';
import {hashHistory} from 'react-router';

const goBack = () => {
    hashHistory.replace('/');
};

export const NavbarAndToolbarPage = () => {
    return (
        <Page name="navbar-and-toolbar">
            <Navbar>
                <Left><BackButton onClick={goBack} /></Left>
                <Center>Navbars and Toolbars</Center>
                <Right></Right>
            </Navbar>
            <PageBody>
                <PageContent>
                    Navbar + Toolbar
                </PageContent>
            </PageBody>
        </Page>
    );
};