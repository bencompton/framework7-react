import * as React from 'react';
import {Page, PageContent, Navbar, Left, Right, Center, ContentBlock, ListBlock, ListItem, Icon, BackButton} from 'framework7-react';

import {routeState} from '../../utils/RouteState';

export class ListViewPage extends React.Component<any, any> {
    render() {
        return (
            <Page>
                <Navbar>
                    <Left><BackButton onClick={() => routeState.navigate('/', true)} /></Left>
                    <Center>List View</Center>
                    <Right></Right>
                </Navbar>
                <PageContent>
                    <ContentBlock>
                        <p>
                            Framework7 allows you to be flexible with list views (table views). You can make them as navigation menus, you can use their icons, inputs, and any elements inside of the list, and even make them nested:
                        </p>
                    </ContentBlock>                        
                    <ListBlock title="Data List, With Icons">
                        <ListItem title="Ivan Petrov" iconClass="icon-f7" afterTitleText="CEO" />
                        <ListItem title="John Doe" iconClass="icon-f7" />
                        <ListItem title="Jenna Smith" iconClass="icon-f7" />
                    </ListBlock>
                    <ListBlock title="Links">
                        <ListItem title="Ivan Petrov" iconClass="icon-f7" afterTitleText="CEO" showAsLink={true} />
                        <ListItem title="John Doe" iconClass="icon-f7" afterTitleText="Cleaner" showAsLink={true} />
                        <ListItem title="Jenna Smith" iconClass="icon-f7" showAsLink={true} />
                    </ListBlock>
                    <ListBlock title="Links, No Icons">
                        <ListItem title="Ivan Petrov" showAsLink={true} />
                        <ListItem title="John Doe" showAsLink={true} />
                    </ListBlock>
                </PageContent>
            </Page>
        );
    }
}