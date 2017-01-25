import * as React from 'react';
import {Page, Navbar, ContentBlock, ContentBlockTitle, GridRow, GridCol, Button, 
    PickerModal, 
    Link, 
    NavLeft, NavRight, 
    Toolbar, 
    Popup, 
    List, ListItem, ListButton, ListLabel, 
    Pages, 
    View, 
    FormInput, FormLabel,
    LoginScreen, LoginScreenTitle} from 'framework7-react';
import {getFramework7} from '../App';

import {ActionsDemo} from '../demo/ActionsDemo';
import {PopoverDemo} from '../demo/PopoverDemo';

declare const require: any;
const Portal = require('react-portal');

export interface IModalsPageState {
    pickerOpened: boolean;
    popupOpened: boolean;
    actionsOpened: boolean;
    loginScreenOpened: boolean;
}

export class ModalsPage extends React.Component<any, IModalsPageState> {
    private fw7: any;

    constructor() {
        super();

        this.fw7 = getFramework7();
        
        this.state = {
            pickerOpened: false,
            popupOpened: false,
            actionsOpened: false,
            loginScreenOpened: false
        }
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Modals" sliding></Navbar>

                <ContentBlock>
                    <GridRow>
                        <GridCol>
                            <Button onClick={this.openLoginScreen.bind(this)}>Login Screen</Button>
                        </GridCol>
                        <GridCol>
                            <Button onClick={this.openPopup.bind(this)}>Popup</Button>
                        </GridCol>
                    </GridRow>
                </ContentBlock>

                <ContentBlock>
                    <GridRow>
                        <GridCol>
                            <Button openPopover={'#demo-popover'}>Popover</Button>
                        </GridCol>
                        <GridCol>
                            <Button onClick={this.openPicker.bind(this)}>Picker</Button>
                        </GridCol>
                        <GridCol>
                            <Button onClick={this.openActions.bind(this)}>Actions</Button>
                        </GridCol>
                    </GridRow>
                </ContentBlock>

                <ContentBlock>
                    <GridRow>
                        <GridCol>
                            <Button onClick={this.openAlert.bind(this)}>Alert</Button>
                        </GridCol>
                        <GridCol>
                            <Button onClick={this.openConfirm.bind(this)}>Confirm</Button>
                        </GridCol>
                    </GridRow>
                </ContentBlock>

                <ContentBlock>
                    <GridRow>
                        <GridCol>
                            <Button onClick={this.openPrompt.bind(this)}>Prompt</Button>
                        </GridCol>
                        <GridCol>
                            <Button onClick={this.openPreloader.bind(this)}>Preloader</Button>
                        </GridCol>
                    </GridRow>
                </ContentBlock>

                {/* Anything you want rendered in the body like modals, etc. can be done using react-portal */}
                <Portal isOpened={true}>
                    <span>
                        <PopoverDemo id="demo-popover"/>

                        <PickerModal id="demo-picker" opened={this.state.pickerOpened}>
                            <Toolbar>
                                <NavLeft />
                                <NavRight>
                                    <Link onClick={this.closePicker.bind(this)}>Done</Link>      
                                </NavRight>
                            </Toolbar>
                            <ContentBlock>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iste qui architecto recusandae veniam delectus vero libero illo aliquid, fuga ratione vel facilis iure est fugiat sunt nihil, consectetur veritatis.</p>
                            </ContentBlock>
                        </PickerModal>

                        <Popup id="demo-popup" opened={this.state.popupOpened} onPopupClosed={this.closePopup.bind(this)}>
                            <View>
                                <Pages>
                                    <Page navbarFixed>
                                        <Navbar title="Demo Popup">
                                            <NavRight>
                                                <Link onClick={this.closePopup.bind(this)}>Close</Link>
                                            </NavRight>
                                        </Navbar>

                                        <ContentBlock>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iste qui architecto recusandae veniam delectus vero libero illo aliquid, fuga ratione vel facilis iure est fugiat sunt nihil, consectetur veritatis.</p>
                                            <p>Itaque impedit, nam, sed reprehenderit quaerat commodi veritatis ducimus eos nisi, at aliquam dolorum alias optio natus. Sit voluptate aperiam, cupiditate repellat quod fugiat non doloribus eveniet dolorem fugit nihil.</p>
                                            <p>Error cumque sunt dolorem aut, similique accusantium delectus. Minima, natus. Doloremque ratione veniam cupiditate modi aspernatur debitis possimus iure id delectus! Totam eveniet, impedit minus deserunt aliquid facere laboriosam dignissimos.</p>
                                            <p>Aliquid autem saepe sit cumque odit nihil eius consectetur impedit accusantium sunt, repudiandae quaerat cum! Esse autem ipsum aliquam, distinctio laborum excepturi facilis fuga vitae atque iusto eligendi, explicabo corporis.</p>
                                            <p>Necessitatibus minima quidem fugit corporis reprehenderit saepe facilis perspiciatis sit, consectetur nulla officia, pariatur accusantium quas voluptas. Illum placeat eligendi dolor nihil libero culpa, ex quas voluptas deleniti, unde id.</p>
                                        </ContentBlock>
                                    </Page>
                                </Pages>
                            </View>
                        </Popup>

                        <ActionsDemo opened={this.state.actionsOpened} onActionsClosed={this.closeActions.bind(this)} />

                        <LoginScreen id="demo-login-screen" opened={this.state.loginScreenOpened}>
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
                                            <ListButton title="Sign In" onClick={this.closeLoginScreen.bind(this)} />
                                            <ListLabel>
                                                <p>Click Sign In to close Login Screen</p>
                                            </ListLabel>
                                        </List>
                                    </Page>
                                </Pages>
                            </View>
                        </LoginScreen>
                    </span>
                </Portal>
            </Page>
        );
    }

    private openLoginScreen() {
        this.setState({
            ...this.state,
            loginScreenOpened: true
        }); 
    }

    private closeLoginScreen() {
        this.setState({
            ...this.state,
            loginScreenOpened: false
        }); 
    }

    private openPicker() {
        this.setState({
            ...this.state,
            pickerOpened: true
        }); 
    }

    private closePicker() {
        this.setState({
            ...this.state,
            pickerOpened: false
        });  
    }

    private openActions() {
        this.setState({
            ...this.state,
            actionsOpened: true
        });  
    }

    private closeActions() {
        this.setState({
            ...this.state,
            actionsOpened: false
        }); 
    }

    private openAlert() {
        this.fw7.alert('Hi, this is alert', 'Alert Title');   
    }

    private openConfirm() {
        this.fw7.confirm('Are you sure you want to do it?', 'Confirm Title', function () {
            console.log('Confirm Ok');
        }, function () {
            console.log('Confirm Cancel');
        });
    }

    private openPrompt() {
        let self = this;

        self.fw7.prompt('Your name please!', 'Prompt Title', function (value) {
          self.fw7.alert('Your name is: ' + value, 'Your name');
        });  
    }

    private openPreloader()  {
        let self = this;
        self.fw7.showPreloader('Loading text...');

        setTimeout(function () {
            self.fw7.hidePreloader();
        }, 3000);  
    }

    private openPopup() {
         this.setState({
             ...this.state,
            popupOpened: true
        });        
    }

    private closePopup() {
         this.setState({
             ...this.state,
            popupOpened: false
        });        
    }
}