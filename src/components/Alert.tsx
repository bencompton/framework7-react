import * as React from 'react';

import '../less/modals.less';

import {IFramework7AppContext} from './Framework7App';

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
    public static contextTypes = {
        framework7AppContext: React.PropTypes.object
    };

    constructor(props: IAlertProps)  {
        super(props);
        this.state = {
            modal: null
        };
    }

    public render(): any {
        if (this.props.visible && !this.state.modal) {
            this.showAlert();
        } else if (!this.props.visible && this.state.modal) {
            this.hideAlert();
        }

        return null;
    }

    public componentWillUnmount() {
        try {
            this.hideAlert();
        } catch (err) {
            //Eat it
        }
    }

    private get framework7() {
        return ((this.context as any).framework7AppContext as IFramework7AppContext).getFramework7();
    }

    private showAlert() {
        setTimeout(() => {
            if (this.framework7) {
                this.state.modal = this.framework7.modal({
                    title: this.props.title,
                    text: this.props.text,
                    buttons: [{ text: this.framework7.params.modalButtonOk, bold: true, onClick: this.props.onClick }]
                });
            } else {
                this.showAlert();
            }
        }, 100);

    }

    private hideAlert() {
        this.framework7.closeModal(this.state.modal);
        this.state.modal = null;
    }
}