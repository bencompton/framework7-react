import * as React from 'react';
import {Page, Navbar, Button, ButtonsSegmented, ContentBlock, ContentBlockTitle, GridCol, GridRow, List, ListItem, ListLabel, FormLabel, FormInput} from 'framework7-react';
import {getFramework7} from '../App';

const onChangeHandler = (event) => {
    console.log('change');
};

const pStyle = {margin: '1em 0'};

export interface IFormsPageState {
    birthDate: string;
    radioSelected: number;
    name: string;
}

export class FormsPage extends React.Component<any, IFormsPageState> {
    private fw7: any;

    constructor() {
        super();

        this.state = {
            birthDate: '2014-04-30',
            radioSelected: 1,
            name: ''
        }

        this.fw7 = getFramework7();
    }

    private onRadioChange(value) {
        this.setState({
           ...this.state,
           radioSelected: value 
        });
    }

    private onBirthDateChange(event, value) {
        this.setState({
           ...this.state,
           birthDate: value 
        });
    }

    private onNameChange(event) {
        this.setState({
            ...this.state,
            name: event.target.value
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
                        <FormInput type="password" placeholder="Password" />   
                    </ListItem>                
                    <ListItem>
                        <FormLabel>E-mail</FormLabel>  
                        <FormInput type="email" placeholder="E-mail" /> 
                    </ListItem>
                    <ListItem>
                        <FormLabel>URL</FormLabel>  
                        <FormInput type="url" placeholder="URL" />   
                    </ListItem>
                    <ListItem>
                        <FormLabel>Phone</FormLabel>  
                        <FormInput type="tel" placeholder="Phone" />   
                    </ListItem>                
                    <ListItem>
                        <FormLabel>Birth date</FormLabel>  
                        <FormInput type="date" placeholder="Birth date" value={this.state.birthDate} onChange={this.onBirthDateChange.bind(this)} />   
                    </ListItem>
                    <ListItem>
                        <FormLabel>Date time</FormLabel>  
                        <FormInput type="datetime-local" />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Gender</FormLabel>
                        <FormInput type="select">
                            <option value="1">Male</option>
                            <option value="1">Female</option>
                        </FormInput>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Switch</FormLabel>
                        <FormInput type="switch" onChange={onChangeHandler} />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Range</FormLabel>  
                        <FormInput type="range" min="0" max="100" step="1" value="90" />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Textarea</FormLabel>
                        <FormInput type="textarea" placeholder="Textarea" />
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
                                    value={n}
                                    title={`Checkbox ${n}`}
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
                                    onChange={() => {this.onRadioChange(n);}}
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
