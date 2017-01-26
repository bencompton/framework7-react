import * as React from 'react';

import {generateReactClass} from './react-class-creation-and-runtime/GenerateReactClass';

export interface IVueEventToPropsMap {
    [vueEvent: string]: string;
}

export interface IVueSlotToReactElementMap {
    [slotName: string]: (React.ReactElement<any> | (React.ReactElement<any>)[])[];
}

export interface IVueSlotToReactPropNameMap {
    [slotName: string]: string;
}

export interface IVueComponent {
    render: (createElement: any) => React.ReactElement<any>;
    beforeDestroy?: () => void;
    methods?: {[methodName: string]: Function};
    $slots?: IVueSlotToReactElementMap;
    $emit?: (eventName: string, ...eventArgs: any[]) => void;
    watch?: {[watchedProp: string]: Function};
    computed?: {[computedProp: string]: () => any};
    element?: HTMLElement;
    props: any;
}

export interface IReactifyVueArgs {
    component: IVueComponent;
    tag: string;
    events?: IVueEventToPropsMap;
    instantiatedComponents?: (React.ComponentClass<any> | React.StatelessComponent<any>)[];
    slots?: IVueSlotToReactPropNameMap;
    args?: any;
    mixin?: any;
}

export const reactifyVue = <TProps>(reactifyVueArgs: IReactifyVueArgs) => {
    return generateReactClass(
        reactifyVueArgs.instantiatedComponents,
        reactifyVueArgs.component,
        reactifyVueArgs.slots,
        reactifyVueArgs.tag,
        reactifyVueArgs.mixin,
        reactifyVueArgs.args
    );
};