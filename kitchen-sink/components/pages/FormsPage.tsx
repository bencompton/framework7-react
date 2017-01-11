import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, ListLabel, FormLabel, FormInput} from 'framework7-react';

const onChange = (event) => {
    console.log('change');
};

export const FormsPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Forms" sliding />

            <ContentBlockTitle>Form</ContentBlockTitle>
            <List>
                <ListItem>
                    <FormLabel>Name</FormLabel>  
                    <FormInput type="text" placeholder="Name" />   
                </ListItem>
                <ListItem>
                    <FormLabel>Password</FormLabel>  
                    <FormInput type="password" placeholder="Password" />   
                </ListItem>                <ListItem>
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
                {/*<ListItem>
                    <FormLabel>Gender</FormLabel>
                    <FormInput type="select" placeholder="Password">
                        <Option value="1">Male</Option>
                        <Option value="1">Female</Option>
                    </FormInput>
                </ListItem>*/}
                {/*<ListItem>
                    <FormLabel>Switch</FormLabel>  
                    <FormInput type="switch" onChange={onChange} />   
                </ListItem>*/}
                <ListItem>
                    <FormLabel>Range</FormLabel>  
                    <FormInput type="range" min="0" max="100" step="1" value="90" />   
                </ListItem>                
                <ListItem>
                    <FormLabel>Textarea</FormLabel>  
                    <FormInput type="textarea" placeholder="Textarea" />   
                </ListItem>
            </List>
        </Page>
    );
}
