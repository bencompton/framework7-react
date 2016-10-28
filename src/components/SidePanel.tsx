import * as React from 'react';
import * as $ from 'jquery';

import {transitionEnd} from '../utilities/AnimationEnd';

declare const require: any;
const Portal = require('react-portal');

export enum PanelSideEnum {
    Left,
    Right
}

export enum PanelSlideInType {
    Cover,
    Reveal
}

export interface ISidePanelProps {
    side: PanelSideEnum;
    slideInType: PanelSlideInType;
    isOpen: boolean;
    isSwipable: boolean;
    additionalClassName?: string;
    overlayClickHandler?: () => void;
}

export class SidePanel extends React.Component<ISidePanelProps, any> {
    private elementId: string = 'side-panel';

    constructor(props: ISidePanelProps) {
        super(props);

        if (props.side === PanelSideEnum.Right) {
            throw new Error('Panels on right not currently supported!');
        }

        if (props.slideInType === PanelSlideInType.Reveal) {
            throw new Error('Panel reveal is not currently supported!');
        }
    }

    componentDidMount() {
        this.reconcilePanelOpenState();
    }

    componentWillUnmount() {
        this.reconcilePanelOpenState();
    }

    render() {
        return (
            <Portal isOpened={true}>
                <span>
                    <div className={`panel-overlay ${this.props.additionalClassName}`} onClick={this.props.overlayClickHandler}></div>
                    <div className={`panel ${this.panelSideClass} ${this.panelSlideInTypeClass} ${this.props.additionalClassName} ${this.elementId}`}>
                        {this.props.children}
                    </div>
                </span>
            </Portal>
        );
    }

    componentDidUpdate() {
        this.reconcilePanelOpenState();
    }

    private reconcilePanelOpenState() {
        if (!this.element) return;

        if (this.props.isOpen && !this.isPanelOpen) {
            this.openPanel();
        } else if (!this.props.isOpen && this.isPanelOpen) {
            this.closePanel();
        }
    }

    private get element(): HTMLElement {
        let elements = document.getElementsByClassName(this.elementId);

        if (elements.length) {
            return elements[0] as HTMLElement;
        } else {
            return null;
        }
    }

    private get panelSideClass(): string {
        return this.props.side === PanelSideEnum.Left ? 'panel-left' : 'panel-right';
    }

    private get panelSlideInTypeClass(): string {
        return this.props.slideInType === PanelSlideInType.Cover ? 'panel-cover' : 'panel-reveal';
    }

    private get additionalCls(): string {
        return this.props.additionalClassName;
    }

    private get isPanelOpen(): boolean {
        return $(document.body).hasClass('with-panel-left-cover');
    }

    private openPanel() {
        $(this.element).css({ display: 'block' });

        //Trigger re-layout
        let dummy = this.element.clientLeft;

        $(document.body).addClass('with-panel-left-cover');
    }

    private closePanel() {
        transitionEnd(this.element).then(() => {
            $(this.element).css({ display: '' });
            $(document.body).removeClass('panel-closing');            
        });
        
        $(document.body).removeClass('with-panel-left-cover');
        $(document.body).addClass('panel-closing');
    }
}