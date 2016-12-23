import * as React from 'react';
import * as classNames from 'classnames';

import {IFramework7AppContext} from './Framework7App';
import {ColorsEnum, getColorCls} from '../utils/Colors';

export interface IIconProps {
    color?: ColorsEnum;
    material?: string; //Material Icons
    f7?: string; //Framework7 Icons
    ion?: string; //Ionicons
    fa?: string; //Font Awesome
    icon?: string; //Custom
    ifMaterial?: string;
    ifIos?: string;
    size?: string | number;
}

export class Icon extends React.Component<IIconProps, any> {
    public static contextTypes = {
        framework7AppContext: React.PropTypes.object
    };

    private get framework7AppContext() {
        return (this.context as any).framework7AppContext as IFramework7AppContext;
    }

    private get size() {
        const props = this.props;
        let size = props.size;
        
        if (typeof size === 'number' || parseFloat(size) === (parseFloat(size) as number * 1)) {
          return size + 'px';
        }

        return size;
    }

    private get classesObject() {
        let classesObject = {};
        const props = this.props;

        if (props.ifMaterial || props.ifIos) {
            const parts = props[this.framework7AppContext.theme.material ? 'ifMaterial' : 'ifIos'].split(':');
            const prop = parts[0];
            const value = parts[1];

            if (prop === 'material' || prop === 'fa' || prop === 'f7') {
                classesObject['fa'] = prop === 'fa';
                classesObject['material-icons'] = prop === 'material';
                classesObject['f7-icons'] = prop === 'f7';
            }
          
            if (prop === 'fa' || prop === 'ion') {
                classesObject[prop + '-' + value] = true;
            }
          
            if (prop === 'icon') {
                classesObject[value] = true;
            }
        } else {
            classesObject = {
                'material-icons': this.props.material,
                'f7-icons': this.props.f7,
                'fa': this.props.fa
            };

            if (this.props.ion) classesObject['ion-' + this.props.ion] = true;
            if (this.props.fa) classesObject['fa-' + this.props.fa] = true;
            if (this.props.icon) classesObject[this.props.icon] = true;
        }

        if (this.props.color) classesObject[getColorCls(this.props.color)] = true;
        
        return classesObject;
    }

    private get iconText() {
        const props = this.props;
        let text = props.material || props.f7;
        
        if (props.ifMaterial && this.framework7AppContext.theme.material && (props.ifMaterial.indexOf('material:')>=0 || props.ifMaterial.indexOf('f7:')>=0)) {
          text = props.ifMaterial.split(':')[1];
        } else if (props.ifIos && this.framework7AppContext.theme.ios && (props.ifIos.indexOf('material:')>=0 || props.ifIos.indexOf('f7:')>=0)) {
          text = props.ifIos.split(':')[1];
        }

        return text;
    }

    render() {
        return (
            <i className={classNames('icon', this.classesObject)} style={{fontSize: this.size}}>
                {this.iconText}
                {this.props.children}
            </i>
        );
    }
}