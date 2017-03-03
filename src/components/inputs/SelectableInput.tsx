import * as React from 'react';

export interface ISelectableInputProps {
    checked?: boolean
    onChange?: () => void
    type: string
}

export class SelectableInput extends React.Component<ISelectableInputProps, any> {
    private element: HTMLInputElement;

    private saveRef(element: HTMLInputElement) {
        this.element = element;
    }

    public componentDidMount() {
        this.element.checked = this.props.checked;
        this.element.addEventListener('change', this.props.onChange);
    }

    public componentDidUpdate() {
        setTimeout(() => {
            if (this.element) {
                this.element.checked = this.props.checked;
            }
        }, 50);
    }

    public render() {
        return <input type={this.props.type} ref={this.saveRef.bind(this)} />;
    }
}