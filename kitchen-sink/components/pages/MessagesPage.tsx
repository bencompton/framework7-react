import * as React from 'react';
import {Page, Navbar, Subnavbar, FormInput, Messages, Message, Messagebar} from 'framework7-react';

export interface IMessagesPageState {
    name: string;
    messages: any[];
}

export const MessagesPageDefaultState = {
    name: 'Vladimir',
    messages: [{
            day: 'Wendesday',
            time: '13:34'
        }, {
            name: 'Vladimir',
            text: 'How are you?',
            label: 'Sent in good mood :)',
            avatar: 'http://lorempixel.com/100/100/people/3',
            date: 'Yesterday 13:34'
        }, {
            name: 'Jane',
            text: 'I\'m good, thank you!',
            type: 'received',
            avatar: 'http://lorempixel.com/100/100/people/9',
            date: 'Yesterday at 13:50'
        }
    ]
}

export class MessagesPage extends React.Component<any, IMessagesPageState> {
    constructor() {
        super();
        this.state = {
            name: MessagesPageDefaultState.name,
            messages: MessagesPageDefaultState.messages
        };
    }

    private getMessage(props) {
        let messageProps = {}

        if (props) {
            messageProps = props;
        }

        return (
            <Message
                {...messageProps}
                onClick={this.onClick.bind(this)}
                onClickText={this.onTextClick.bind(this)}
                onClickName={this.onNameClick.bind(this)}
                onClickAvatar={this.onAvatarClick.bind(this)}>
            </Message>
        );
    }

    render() {
        return (
            <Page toolbar-fixed>
                <Navbar backLink="Back" title="Messages" sliding></Navbar>
                <Subnavbar>
                    <FormInput type="text" placeholder="Your name" value="name" />
                </Subnavbar>
                <Messages>
                {
                    this.state.messages.map(message => {
                        return this.getMessage(message);
                    })
                }
                </Messages>
                <Messagebar placeholder="Message" sendLink="Send" onChange={()=>{console.log('changing text')}} onSubmit={() => {console.log('submit')}} />
            </Page>
        );
    }

    private onClick() {
        console.log('click');
    }
    
    private onTextClick() {
        console.log('text click');
    }
    
    private onNameClick() {
        console.log('name click');
    }
    
    private onAvatarClick() {
        console.log('avatar click');
    }
        
    private onSubmit() {
        console.log('submit');
    }
};