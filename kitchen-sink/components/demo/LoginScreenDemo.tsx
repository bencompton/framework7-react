import * as React from 'react';

import {LoginScreen, View, Pages, Page, LoginScreenTitle, List, ListItem, FormLabel, FormInput, ListButton, ListLabel} from 'framework7-react';

export interface ILoginScreenDemoProps {
    opened: boolean;
    closeLoginScreen: () => void;
}

export const LoginScreenDemo = (props: ILoginScreenDemoProps) => {
    return (
        <LoginScreen opened={props.opened}>
            <View>
                <Pages>
                    <Page loginScreen>
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
                            <ListButton title="Sign In" onClick={props.closeLoginScreen} />
                            <ListLabel>
                                <p>Click Sign In to close Login Screen</p>
                            </ListLabel>
                        </List>
                    </Page>
                </Pages>
            </View>
        </LoginScreen>
    );
};