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
    static contextTypes = {
        framework7AppContext: React.PropTypes.object
    };

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

    private get framework7AppContext() {
        return (this.context as any).framework7AppContext as IFramework7AppContext;
    }

    private showAlert() {
        this.framework7AppContext.getFramework7(f7 => {
            this.state.modal = f7.modal({
                title: this.props.title,
                text: this.props.text,           
                buttons: [{ text: f7.params.modalButtonOk, bold: true, onClick: this.props.onClick }]
            });
        });
    }

    private hideAlert() {
        this.framework7AppContext.getFramework7(f7 => {
            f7.closeModal(this.state.modal);
            this.state.modal = null;
        });
    }
}