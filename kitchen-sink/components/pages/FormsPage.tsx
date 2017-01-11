import * as React from 'react';
import {Page, Navbar, Button, ButtonsSegmented, ContentBlock, ContentBlockTitle, GridCol, GridRow, List, ListItem, ListLabel, FormLabel, FormInput} from 'framework7-react';

const onChangeHandler = (event) => {
    console.log('change');
};

export const FormsPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Forms" sliding />

            <ContentBlockTitle>Form</ContentBlockTitle>
            <List form>
                <ListItem>
                    <FormLabel>Name</FormLabel>  
                    <FormInput type="text" placeholder="Name" />   
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
                    <FormInput type="date" placeholder="Birth date" />   
                </ListItem>
                <ListItem>
                    <FormLabel>Date time</FormLabel>  
                    <FormInput type="datetime-local" />
                </ListItem>
                <ListItem>
                    <FormLabel>Gender</FormLabel>
                    <FormInput type="select" placeholder="Password">
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
                    ['1', '2', '3'].map(n => {
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
                    ['1', '2', '3'].map(n => {
                        return (
                            <ListItem
                                radio
                                key={n}
                                name="my-radio"
                                //checked={n === "1"}
                                value={n}
                                title={`Radio ${n}`}
                            />
                        );
                    })
                }
            </List>

            <ContentBlockTitle>Buttons</ContentBlockTitle>
            <ContentBlock inner>
                <p><Button>Button</Button></p>
                <p><Button round>Button Round</Button></p>
                <p><Button fill>Button Fill</Button></p>
                <p>
                    <ButtonsSegmented>
                        <Button round active>Button 1</Button>
                        <Button round>Button 2</Button>
                        <Button round>Button 3</Button>
                    </ButtonsSegmented>
                </p>
                <p>
                    <ButtonsSegmented color="orange">
                        <Button round big>Button 1</Button>
                        <Button round big active>Button 2</Button>
                        <Button round big>Button 3</Button>
                    </ButtonsSegmented>
                </p>
                <p>
                    <GridRow>
                        <GridCol><Button big fill color="green">Send</Button></GridCol>
                        <GridCol><Button big fill color="red">Delete</Button></GridCol>
                    </GridRow>
                </p>
                <p>
                    <GridRow>
                        <GridCol><Button fill raised color="green">Raised</Button></GridCol>
                        <GridCol><Button raised color="red">Raised</Button></GridCol>
                        <GridCol><Button fill raised color="pink">Raised</Button></GridCol>
                    </GridRow>
                </p>
            </ContentBlock>
        </Page>
    );
}
