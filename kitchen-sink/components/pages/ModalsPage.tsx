import * as React from 'react';
import {Page, Navbar, ContentBlock, ContentBlockTitle, GridRow, GridCol, Button} from 'framework7-react';
import {getFramework7} from '../App';

import {ActionsDemo} from '../demo/ActionsDemo';
import {PopoverDemo} from '../demo/PopoverDemo';
import {PopupDemo} from '../demo/PopupDemo';
import {PickerModalDemo} from '../demo/PickerModalDemo';
import {LoginScreenDemo} from '../demo/LoginScreenDemo';

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
                        <PickerModalDemo opened={this.state.pickerOpened} closePicker={this.closePicker.bind(this)} />
                        <PopupDemo opened={this.state.popupOpened} closePopup={this.closePopup.bind(this)} />
                        <ActionsDemo opened={this.state.actionsOpened} onActionsClosed={this.closeActions.bind(this)} />
                        <LoginScreenDemo opened={this.state.loginScreenOpened} closeLoginScreen={this.closeLoginScreen.bind(this)} />
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