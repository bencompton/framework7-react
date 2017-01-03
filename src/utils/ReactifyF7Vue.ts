import * as React from 'react';
import * as camelCase from 'camelcase';

import {reactifyVue} from './ReactifyVue';
import {Dom7} from '../Framework7';

export interface IReactifyF7VueArgs {
    component: any;
    tag: string;
    slots?: string[];
    args?: any;
    dependencyComponents?: (React.ComponentClass<any> | React.StatelessComponent<any>)[];
    events?: string[];
    mixin?: any;
}

export const reactifyF7Vue = <TProps>(args: IReactifyF7VueArgs) => {
    const innerComponent = reactifyVue<TProps>({
        component: args.component,
        tag: args.tag,
        slots: !args.slots ? null : args.slots.reduce((slotMap, currentSlotName) => {
            return { ...slotMap, [currentSlotName]: camelCase(currentSlotName) + 'Slot' };
        }, {}),
        events: !args.events ? null : args.events.reduce((eventMap, currentEventName) => {
            return { ...eventMap, [currentEventName]: camelCase(currentEventName) };
        }, {}),
        dependencyComponents: args.dependencyComponents,
        args: {
            ...args.args,
            $$: Dom7
        },
        mixin: args.mixin
    });

    const reactClass = React.createClass<TProps, any>({
        render: function() {
            return React.createElement(innerComponent, {
                ...this.props,
                $theme: { material: false, ios: true }
            });
        }
    });

    (reactClass as any).tag = args.tag;
    (reactClass as any).vueComponent = args.component;

    return reactClass;
}