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

    private getMessage(props, index) {
        let messageProps = {}

        if (props) {
            messageProps = props;
        }

        return (
            <Message
                {...messageProps}
                key={index}
                onClick={this.onClick.bind(this)}
                onClickText={this.onTextClick.bind(this)}
                onClickName={this.onNameClick.bind(this)}
                onClickAvatar={this.onAvatarClick.bind(this)}>
            </Message>
        );
    }

    render() {
        return (
            <Page toolbarFixed>
                <Navbar backLink="Back" title="Messages" sliding></Navbar>
                <Subnavbar>
                    <input type="text" placeholder="Your name" defaultValue={this.state.name} onChange={this.onNameChange.bind(this)}/>
                </Subnavbar>
                <Messages>
                {
                    this.state.messages.map((message, index) => {
                        return this.getMessage(message, index);
                    })
                }
                </Messages>
                <Messagebar placeholder="Message" sendLink="Send" onSubmit={this.onSubmit.bind(this)} />
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
        
    private onSubmit(text, clear) {              
        if (text.trim().length === 0) return;

        this.setState({
            ...this.state,
            messages: [
                ...this.state.messages,
                {
                    name: this.state.name,
                    avatar: 'http://lorempixel.com/100/100/people/3',
                    text: text,
                    date: (function () {
                        let now = new Date();
                        let hours = now.getHours();
                        let hoursString = hours < 10 ? `0${hours}` : `${hours}`; 
                        let minutes = now.getMinutes();
                        let minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;    
                        return `${hours}:${minutesString}`;
                    })()
                }
            ]
        });

        clear();
      }

      private onNameChange(event) {
          this.setState({
              ...this.state,
              name: event.target.value
          });
      }
    
};