import * as React from 'react';
import * as classNames from 'classnames';

import {ColorsEnum} from '../../utils/Colors';
import {IFramework7AppContext} from '../Framework7App';
import {Badge} from '../Badge';

import '../../less/lists.less';

export interface IListItemContentProps extends React.Props<any> {
    title?: string | number;
    text?: string | number;
    media?: string;
    subtitle?: string | number;
    after?: string | number;
    badge?: string | number;
    badgeColor?: ColorsEnum;
    mediaList?: boolean;

    checkbox?: boolean;
    checked?: boolean;
    radio?: boolean;
    name?: string;
    value?: string | number;
    readonly?: boolean;
    required?: boolean;
    disabled?: boolean;

    onChange?: () => void;
    onClick?: () => void;

    contentStartSlot?: React.ReactElement<any>;
    contentSlot?: React.ReactElement<any>;
    mediaStartSlot?: React.ReactElement<any>;
    mediaSlot?: React.ReactElement<any>;
    innerStartSlot?: React.ReactElement<any>;
    innerSlot?: React.ReactElement<any>;
    afterStartSlot?: React.ReactElement<any>;
    afterSlot?: React.ReactElement<any>;
}

export class ListItemContent extends React.Component<IListItemContentProps, any> {
  public static contextTypes = {
    framework7AppContext: React.PropTypes.object
  };

  private get framework7AppContext() {
    return (this.context as any).framework7AppContext as IFramework7AppContext;
  }

  private get inputEl() {
    const props = this.props;
    
    if (props.radio || props.checkbox) {
      return <input {...{
          value: props.value as string,
          name: props.name,
          checked: props.checked,
          readonly: props.readonly,
          disabled: props.disabled,
          required: props.required,
          type: props.radio ? 'radio' : 'checkbox',
          onChange: props.onChange
        }}
      />
    } else {
      return null;
    }
  }

  private get mediaEl() {
    const props = this.props;
    let inputIconEl: React.ReactElement<any>;

    if (props.media || 
      props.checkbox || 
      props.radio && this.framework7AppContext.theme.material || 
      props.mediaStartSlot || props.mediaSlot
    ) {
      if (props.checkbox || props.radio && this.framework7AppContext.theme.material) {
        if (props.media) {
          inputIconEl = <i className={`icon icon-form-${props.radio ? 'radio' : 'checkbox'}`} />;
          return <div className="item-media">{[inputIconEl, (props.media ? props.media : '')]}</div>;
        }
        else {
          const iconClasses = {'icon': true};
          iconClasses['icon-form-' + (props.radio ? 'radio' : 'checkbox')] = true;
          inputIconEl = <i className={classNames(iconClasses)} />
          return <div className="item-media">{[props.mediaStartSlot, inputIconEl, props.mediaSlot]}</div>;
        }
      }
      else {
        if (props.media) {
          return <div className="item-media">{props.media}</div>
        } else {
          return <div className="item-media">{[props.mediaStartSlot, props.mediaSlot]}</div>;
        }
      }
    }    
  }

  render() {
    var titleEl, afterWrapEl, afterEl, badgeEl, innerEl, titleRowEl, subtitleEl, textEl;
    const props = this.props;
    
    if (props.title) {
      titleEl = <div className="item-title">{props.title}</div>;
    }

    if (props.subtitle) {
      subtitleEl = <div className="item-subtitle">>{props.subtitle}</div>;
    }

    if (props.text) {
      textEl = <div className="item-text">{props.text}</div>;
    }

    if (props.after || props.badge || props.afterSlot) {
      if (props.after) {
        afterEl = <span>{props.after}</span>;
      }

      if (props.badge) {
        badgeEl = <Badge color={props.badgeColor}>{props.badge}</Badge>;
      }

      afterWrapEl = <div className="item-after">{[props.afterStartSlot, afterEl, badgeEl, props.afterSlot]}</div>;
    }

    if (props.mediaList) {
      titleRowEl = <div className="item-title-row">{[titleEl, afterWrapEl]}</div>;
    }

    innerEl = <div className="item-inner">
      {props.mediaList ? [
        props.innerStartSlot,
        titleRowEl,
        subtitleEl,
        textEl,
        props.innerSlot
      ] : [
        props.innerStartSlot,
        titleEl,
        afterWrapEl,
        props.innerSlot
      ]}
    </div>;
    
    // Finalize
    const children = [props.contentStartSlot, this.inputEl, this.mediaEl, innerEl, props.contentStartSlot];
    const classes = classNames('item-content', {
      'label-checkbox': props.checkbox,
      'label-radio': props.radio
    });

    if (props.checkbox || props.radio) {
      return <label className={classes} onClick={props.onClick}>{children}</label>
    } else {
      return <div className={classes} onClick={props.onClick}>{children}</div>;
    }
  }
}