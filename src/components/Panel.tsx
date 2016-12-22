import * as React from 'react';

import {Framework7} from '../Framework7';
import {IFramework7AppContext} from './Framework7App';
import {ColorsEnum, getColorCls} from '../utils/Colors';
import {LayoutEnum, getLayoutCls} from '../utils/Layout';
import {Dom7 as $$} from '../Dom7';
import '../less/panels.less';

declare const require: any;
const Portal = require('react-portal');

export enum PanelSideEnum {
    Left,
    Right
}

export enum PanelEffectEnum {
    Cover,
    Reveal
}

export interface IPanelProps {
    side?: PanelSideEnum;
    effect?: PanelEffectEnum;
    cover?: boolean;
    reveal?: boolean;
    left?: boolean;
    right?: boolean;
    theme?: ColorsEnum;
    layout?: LayoutEnum;
    opened?: boolean;
}

export class Panel extends React.Component<IPanelProps, any> {
    private framework7: Framework7;
    private element: HTMLElement;

    constructor(props: IPanelProps, context: any) {
        super(props, context);

        this.framework7AppContext.getFramework7((f7) => {
            this.onF7Init();
            this.framework7 = f7;
        });
    }

    public static contextTypes = {
        framework7AppContext: React.PropTypes.object
    };

    private get framework7AppContext() {
        return (this.context as any).framework7AppContext as IFramework7AppContext;
    }

    private get classesObject() {                
        const props = this.props;
        const side = props.side.toString() || (props.left ? 'left' : 'right');
        const effect = props.effect.toString() || (props.reveal ? 'reveal' : 'cover');
        let classesObject = {};

        classesObject['panel-' + side] = true;
        classesObject['panel-' + effect] = true;
        
        if (props.layout) classesObject[getLayoutCls(props.layout)] = true;
        if (props.theme) classesObject[getColorCls(props.theme)] = true;
        
        classesObject['active'] = props.opened;
        
        return classesObject;
    }

    componentDidMount() {
        const props = this.props;
        const side = props.side.toString() || (props.left ? 'left' : 'right');
        const effect = props.effect.toString() || (props.reveal ? 'reveal' : 'cover');

        if (props.opened) {
            $$('body').addClass('with-panel-' + side + '-' + effect)
        }

        this.reconcileOpenState();
    }

    componentDidUpdate() {
        this.reconcileOpenState();
    }

    render() {
        return (
            <Portal isOpen>
                <div className={classNames('panel', this.classesObject)} 
                    style={{display: this.props.opened ? 'block' : ''}}
                    ref={(e: HTMLElement) => this.element = e}
                >
                    {this.props.children}
                </div>
            </Portal>
        );
    }

    private onF7Init() {
        if ($$('.panel-overlay').length === 0) {
          $$('<div class="panel-overlay"></div>').insertBefore(this.element)
        }
    }

    private reconcileOpenState() {
        if (!this.framework7) return;

        const opened = this.props.opened;
        const side = this.props.side.toString() || (this.props.left ? 'left' : 'right');

        if (opened) {
          this.framework7.openPanel(side);
        }
        else {
          this.framework7.closePanel(side);
        }
    }
}