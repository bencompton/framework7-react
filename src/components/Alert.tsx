import * as React from 'react';

import '../less/modals.less';

declare var Framework7: any;

export interface IAlertProps {
    visible: boolean;
    text: string;
    title: string;
    onClick: () => void;
}

export interface IAlertModalState {
    modal: any;
}

export class Alert extends React.Component<IAlertProps, IAlertModalState> {
    private fw7 = new Framework7();

    constructor(props: IAlertProps)  {
        super(props);
        this.state = {
            modal: null
        };
    }

    render(): any {
        if (this.props.visible && !this.state.modal) {
            this.showAlert();
        } else if (!this.props.visible && this.state.modal) {
            this.hideAlert();
        }

        return null;
    }

    componentWillUnmount() {
        try {
            this.hideAlert();
        } catch (err) {}
    }

    private showAlert() {
        this.state.modal = this.fw7.modal({
            text: this.props.text,
            title: this.props.title,
            buttons: [{ text: this.fw7.params.modalButtonOk, bold: true, onClick: this.props.onClick }]
        });
    }

    private hideAlert() {
        this.fw7.closeModal(this.state.modal);
        this.state.modal = null;
    }
}