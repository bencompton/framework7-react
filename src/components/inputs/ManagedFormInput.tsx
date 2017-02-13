import * as React from 'react';

export interface IManagedFormInputState {
    currentValue?: string
}

export class ManagedFormInput extends React.Component<any, IManagedFormInputState> {
    constructor(props: any) {
        super(props);

        this.state = {
            currentValue: this.props.value || ""
        }
    }

    render() {
        return (
            <input {...this.props} onChange={this.onInput.bind(this)} value={this.state.currentValue}/>
        );
    }

    private onInput(event) {
        if (this.props.type === "radio" || this.props.type === "checkbox") {
            this.props.onChange();
        } else {
            this.setState({
                currentValue: event.target.value
            });
        }
    }
};