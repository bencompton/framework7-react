import * as React from 'react';
import {Page, Navbar, Button, ButtonsSegmented, ContentBlock, ContentBlockTitle, GridCol, GridRow, List, ListItem, ListLabel, FormLabel, FormInput} from 'framework7-react';
import {getFramework7} from '../App';

const pStyle = {margin: '1em 0'};

export interface IFormsPageState {
    birthDate: string;
    radioSelected: number;
    name: string;
    password: string;
    switchEnabled: boolean;
    email: string;
    url: string;
    phone: string;
    dateTime: string;
    gender: string;
    range: number;
    textArea: string;
    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;
}

export class FormsPage extends React.Component<any, IFormsPageState> {
    private fw7: any;

    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            birthDate: '2014-04-30',
            radioSelected: 1,
            name: '',
            password: '',
            switchEnabled: true,
            email: '',
            url: '',
            phone: '',
            dateTime: '',
            gender: 'male',
            range: 90,
            textArea: '',
            checkbox1: true,
            checkbox2: false,
            checkbox3: false
        };

        this.fw7 = getFramework7();
    }

    private onRadioChange(value) {
        this.setState({
           ...this.state,
           radioSelected: value 
        });
    }

    private onBirthDateChange(event) {
        this.setState({
           ...this.state,
           birthDate: event.target.value
        });
    }

    private onNameChange(event) {
        this.setState({
            ...this.state,
            name: event.target.value
        });
    }

    private onSwitchChanged() {
        this.setState({
            ...this.state,
            switchEnabled: !this.state.switchEnabled
        })
    }

    private onPasswordChange(event) {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    }

    private onEmailChange(event) {
        this.setState({
            ...this.state,
            email: event.target.value
        });
    }

    private onUrlChange(event) {
        this.setState({
            ...this.state,
            url: event.target.value
        });
    }

    private onPhoneChange(event) {
        this.setState({
            ...this.state,
            phone: event.target.value
        });
    }
    
    private onDateTimeChange(event) {
        this.setState({
            ...this.state,
            dateTime: event.target.value
        });
    }    

    private onGenderChange(gender) {
        this.setState({
            ...this.state,
            gender
        });
    }
    
    private onRangeChange(event) {
        this.setState({
            ...this.state,
            range: event.target.value
        });
    }

    private onTextAreaChange(event) {
        this.setState({
            ...this.state,
            textArea: event.target.value
        });
    }

    private onCheckboxChange(checkboxNumber) {
        const checkbox = `checkbox${checkboxNumber}`;

        this.setState({
            ...this.state,
            [checkbox]: !this.state[checkbox]
        });
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Forms" sliding />

                <ContentBlockTitle>Form</ContentBlockTitle>
                <List form>
                    <ListItem>
                        <FormLabel>Name</FormLabel>  
                        <FormInput type="text" placeholder="Name" onChange={this.onNameChange.bind(this)} value={this.state.name}/>   
                    </ListItem>
                    <ListItem>
                        <FormLabel>Password</FormLabel>  
                        <FormInput type="password" placeholder="Password" onChange={this.onPasswordChange.bind(this)} value={this.state.password} />   
                    </ListItem>                
                    <ListItem>
                        <FormLabel>E-mail</FormLabel>  
                        <FormInput type="email" placeholder="E-mail" onChange={this.onEmailChange.bind(this)} value={this.state.email} /> 
                    </ListItem>
                    <ListItem>
                        <FormLabel>URL</FormLabel>  
                        <FormInput type="url" placeholder="URL" onChange={this.onUrlChange.bind(this)} value={this.state.url} />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Phone</FormLabel>  
                        <FormInput type="tel" placeholder="Phone" onChange={this.onPhoneChange.bind(this)} value={this.state.phone} />   
                    </ListItem>                
                    <ListItem>
                        <FormLabel>Birth date</FormLabel>  
                        <FormInput type="date" placeholder="Birth date" value={this.state.birthDate} onChange={this.onBirthDateChange.bind(this)} />   
                    </ListItem>
                    <ListItem>
                        <FormLabel>Date time</FormLabel>  
                        <FormInput type="datetime-local" value={this.state.dateTime} onChange={this.onDateTimeChange.bind(this)} />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Gender</FormLabel>
                        <FormInput type="select">
                            {['Male', 'Female'].map(n => {
                                return (
                                    <option
                                        key={n}
                                        value={n.toLocaleLowerCase()}
                                        selected={this.state.gender === n.toLocaleLowerCase()}
                                        onSelect={() => this.onGenderChange(n.toLocaleLowerCase())}
                                    >
                                        {n}
                                    </option>
                                )
                            })}
                        </FormInput>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Switch</FormLabel>
                        <FormInput type="switch" onChange={this.onSwitchChanged.bind(this)} checked={this.state.switchEnabled} />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Range</FormLabel>  
                        <FormInput type="range" min="0" max="100" step="1" value={this.state.range} onChange={this.onRangeChange.bind(this)} />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Textarea</FormLabel>
                        <FormInput type="textarea" placeholder="Textarea" value={this.state.textArea} onChange={this.onTextAreaChange.bind(this)} />
                    </ListItem>
                </List>

                <ContentBlockTitle>Form With Floating Labels</ContentBlockTitle>
                <List form>
                    <ListItem>
                        <FormLabel floating>Name</FormLabel>  
                        <FormInput type="text" placeholder="Name" />   
                    </ListItem>
                    <ListItem>
                        <FormLabel floating>Password</FormLabel>
                        <FormInput type="password" placeholder="Password" />
                    </ListItem>
                    <ListItem>
                        <FormLabel floating>E-mail</FormLabel>  
                        <FormInput type="email" placeholder="E-mail" />
                    </ListItem>
                </List>

                <ContentBlockTitle>Form Without Labels</ContentBlockTitle>
                <List form>
                    <ListItem> 
                        <FormInput type="text" placeholder="Name" />   
                    </ListItem>
                    <ListItem>
                        <FormInput type="password" placeholder="Password" />
                    </ListItem>
                    <ListItem> 
                        <FormInput type="email" placeholder="E-mail" />
                    </ListItem>
                </List>

                <ContentBlockTitle>Checkboxes</ContentBlockTitle>
                <List form>
                    {
                        [1, 2, 3].map(n => {
                            return (
                                <ListItem
                                    checkbox
                                    key={n}
                                    name="my-checkbox"
                                    checked={this.state['checkbox' + n]}
                                    title={`Checkbox ${n}`}
                                    onChange={() => this.onCheckboxChange(n)}
                                />
                            );
                        })
                    }
                </List>

                <ContentBlockTitle>Radios</ContentBlockTitle>
                <List form>
                    {
                        [1, 2, 3].map(n => {
                            return (
                                <ListItem
                                    radio
                                    key={n}
                                    name="my-radio"
                                    checked={n === this.state.radioSelected}
                                    value={n}
                                    title={`Radio ${n}`}                                   
                                    onClick={() => this.onRadioChange(n)}
                                />
                            );
                        })
                    }
                </List>

                <ContentBlockTitle>Buttons</ContentBlockTitle>
                <ContentBlock inner>
                    <Button style={pStyle}>Button</Button>
                    <Button round style={pStyle}>Button Round</Button>
                    <Button fill style={pStyle}>Button Fill</Button>                
                    <ButtonsSegmented style={pStyle}>
                        <Button round active>Button 1</Button>
                        <Button round>Button 2</Button>
                        <Button round>Button 3</Button>
                    </ButtonsSegmented>                         
                    <ButtonsSegmented color="orange" style={pStyle}>
                        <Button round big>Button 1</Button>
                        <Button round big active>Button 2</Button>
                        <Button round big>Button 3</Button>
                    </ButtonsSegmented>
                    <GridRow style={pStyle}>
                        <GridCol><Button big fill color="green">Send</Button></GridCol>
                        <GridCol><Button big fill color="red">Delete</Button></GridCol>
                    </GridRow>                          
                    <GridRow style={pStyle}>
                        <GridCol><Button fill raised color="green">Raised</Button></GridCol>
                        <GridCol><Button raised color="red">Raised</Button></GridCol>
                        <GridCol><Button fill raised color="pink">Raised</Button></GridCol>
                    </GridRow>                
                </ContentBlock>
            </Page>
        );
    }
}