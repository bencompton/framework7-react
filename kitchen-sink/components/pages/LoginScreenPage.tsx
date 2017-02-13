import * as React from 'react';
import {Page, LoginScreenTitle, List, ListButton, ListItem, ListLabel, FormInput, FormLabel} from 'framework7-react';

export const LoginScreenPage = () => {
    return (
        <Page loginScreen noNavbar>
            <LoginScreenTitle>My App</LoginScreenTitle>
            <List form>
                <ListItem>
                    <FormLabel>Username</FormLabel>
                    <FormInput name="username" type="text" placeholder="Username" />
                </ListItem>
                <ListItem>
                    <FormLabel>Password</FormLabel>
                    <FormInput name="password" type="password" placeholder="Password" />
                </ListItem>
            </List>
            <List>
                <ListButton title="Sign In" back></ListButton>
                <ListLabel>
                    <p>Click Sign In to close Login Screen</p>
                </ListLabel>
            </List>
        </Page>
    );
}
