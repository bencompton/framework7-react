import * as React from 'react';

export class SelectableInput extends React.Component<any, any> {
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
        });
    }

    public render() {
        return <input type={this.props.type} ref={this.saveRef.bind(this)} {...this.props} />;
    }
}