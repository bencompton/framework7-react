import * as React from 'react';
import {
    Page, 
    Navbar, 
    Left, 
    Right, 
    Center, 
    PageContent, 
    ContentBlock, 
    ListBlock, 
    ListItem, 
    Icon, 
    BackButton, 
    ProgressBar
 } from 'framework7-react';

import {ColorsEnum} from '../../../src/utils/Colors';
import {routeState} from '../../utils/RouteState';

export const ProgressBarPage = () => {
    return (
        <Page>
            <Navbar>
                <Left><BackButton onClick={() => routeState.navigate('/', true)} /></Left>
                <Center>Progress Bar</Center>
                <Right></Right>
            </Navbar>
            <PageContent>
                <ContentBlock>
                    <p>
                        Framework7 has two different styles of progress bars...determinate (accepts a progress percentage number to update itself) and indeterminate/infinite (when no progress number can be calculated) to indicate activity:
                    </p>
                </ContentBlock>                        
                <ListBlock title="Determinate progress bars:">
                    <ListItem>
                        <ProgressBar infinite={false} progress={25} color={ColorsEnum.Blue} />
                    </ListItem>
                    <ListItem>
                        <ProgressBar infinite={false} progress={50} color={ColorsEnum.Red} />
                    </ListItem>
                    <ListItem>
                        <ProgressBar infinite={false} progress={75} color={ColorsEnum.Green} />
                    </ListItem>
                    <ListItem>
                        <ProgressBar infinite={false} progress={100} color={ColorsEnum.Orange} />
                    </ListItem>
                </ListBlock>
                <ListBlock title="Infinite/Indeterminate progress bar:">
                    <ListItem>
                        <ProgressBar infinite={true} color={ColorsEnum.Multi} />
                    </ListItem>
                </ListBlock>
            </PageContent>
        </Page>
    );
}