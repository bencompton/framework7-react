import * as React from 'react';
import * as classNames from 'classnames';

import {ColorsEnum} from '../utils/Colors';
import {LinkBase} from './LinkBase';
import {Badge} from './Badge';
import {Icon} from './Icon';

import '../less/forms.less';

export class Link extends LinkBase {
    public render() {
      let iconEl: React.ReactElement<any>;
      let textEl: React.ReactElement<any>;
      let badgeEl: React.ReactElement<any>;
      let iconBadgeEl: React.ReactElement<any>;
      let isTabbarLabel: boolean;
      let classesObject = this.classesObject;
      const props = this.props;

      //TODO: Automatically pass in isTabBarLabel when created within a tabbar
      isTabbarLabel = false; // props.tabLink && props.$parent && props.$parent.tabbar && props.$parent.labels;

      if (props.text) {
        if (props.badge) badgeEl = <Badge color={props.color}>{props.badge}</Badge>;
        textEl = <span className={classNames({'tabbar-label': isTabbarLabel})}>{[props.text, badgeEl]}</span>
      }

      if (props.icon || props.iconMaterial || props.iconIon || props.iconFa || props.iconF7  || props.iconIfMaterial || props.iconIfIos) {
        if (props.iconBadge) iconBadgeEl = <Badge color={props.badgeColor}>{props.iconBadge}</Badge>;

        iconEl = <Icon {...{
          material: props.iconMaterial,
          ion: props.iconIon,
          fa: props.iconFa,
          f7: props.iconF7,
          icon: props.icon,
          ifMaterial: props.iconIfMaterial,
          ifIos: props.iconIfIos
        }}>
            {iconBadgeEl}
        </Icon>
      }

      const children = React.Children.toArray(this.props.children);

      if (!props.text && children && children.length === 0 || props.iconOnly || !props.text && !children) {
        classesObject['icon-only'] = true;
      }

      classesObject['link'] = props.noLinkClass || isTabbarLabel ? false : true;

      return (
          <a className={classNames(classesObject)} {...this.attributes} onClick={props.onClick}>
            {[iconEl, textEl, ...children]}
          </a>
      );
    }
}