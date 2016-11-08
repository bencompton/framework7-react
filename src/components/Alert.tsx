import * as React from 'react';
import * as $ from 'jquery';

declare const require: any;
const Portal = require('react-portal');

export interface IAlertProps {
    visible: boolean;
    text: string;
    title: string;
    onClick: () => void;
}

export interface IAlertModalState {
    modal: any;
}

export class Alert extends React.Component<IAlertProps, any> {
    private element: HTMLElement;

    componentDidUpdate() {
        if (this.props.visible) {
            $(this.element).find('.modal').css({ display: 'block' });
            let dummy = this.element.clientLeft;
            $(this.element).find('.modal').removeClass('modal-out');
            $(this.element).find('.modal').addClass('modal-in');            
        } else {
            $(this.element).find('.modal').removeClass('modal-in');
            $(this.element).find('.modal').addClass('modal-out');            
        }
    }    

    render() {
        return (
            <Portal isOpened={true}>    
                <span ref={(element: HTMLElement) => this.element = element}>
                    <div className={`modal`}>        
                        <div className="modal-inner">
                            <div className="modal-title">
                                {this.props.title}
                            </div>
                            <div className="modal-text">
                                {this.props.text}
                            </div>
                        </div>
                        <div className="modal-buttons">
                            <span className="modal-button modal-button-bold" onClick={this.props.onClick}>OK</span>
                        </div>
                    </div>
                    <div className={`modal-overlay ${this.props.visible ? 'modal-overlay-visible' : ''}`}></div>
                </span>                       
            </Portal>
        );
    }
};