import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, ListLabel, FormLabel, FormInput} from 'framework7-react';

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
                    <FormInput type="date" placeholder="Birth date" value="2014-04-30" />   
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
            <List>
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
        </Page>
    );
}
