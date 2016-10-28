import * as React from 'react';
import {hashHistory} from 'react-router';
import {Page, PageBody, PageContent, Navbar, Left, Center, Right, ListBlock, ListItem, Icon, AnimationDirectionEnum} from 'framework7-react';

export const HomePage = () => {
    return (
        <Page name="home">
            <Navbar>
                <Left></Left>
                <Center>Framework7 React</Center>
                <Right><Icon iconClass="icon-bars" showAsLink={true} /></Right>
            </Navbar>
            <PageBody>
                <PageContent>
                    <MainList />
                </PageContent>
            </PageBody>
        </Page>
    );
};

const navigateToPage = (pageId: string) => {
    hashHistory.replace(pageId);
};

const pages = [
    'Navbars and Toolbars',
    'Side Panels'
]

const MainList = () => {
    let f7Icon = <Icon iconClass="icon-f7" />;

    return (
        <ListBlock>
            {pages.map(pageTitle => {
                let pageId = pageTitle.toLowerCase().replace(/\s/g, '-')
                return <ListItem showAsLink={true} title={pageTitle} mediaElement={f7Icon} onClick={() => navigateToPage(pageId)} /> 
            })}
        </ListBlock>
    )
};