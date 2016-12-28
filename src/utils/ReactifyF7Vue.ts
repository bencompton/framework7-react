import * as React from 'react';
import * as camelCase from 'camelcase';

import {reactifyVue} from './ReactifyVue';

export interface IReactifyF7VueArgs {
    component: any;
    slots: string[];
}

export const reactifyF7Vue = <TProps>(args: IReactifyF7VueArgs) => {
    const innerComponent = reactifyVue<TProps>({
        component: args.component,
        slots: args.slots.reduce((slotMap, currentSlotName) => {
            return { ...slotMap, [currentSlotName]: camelCase(currentSlotName) + 'Slot' };
        }, {})
    });

    return React.createClass({
        render() {
            return React.createElement(innerComponent, this.props);
        }
    });
}