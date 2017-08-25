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
                        <FormLabel>Switch</FormLabel>
                        <FormInput type="switch" onChange={onChangeHandler} />
                    </ListItem>
                 </List>  
            </Page>
        );
    }
}
