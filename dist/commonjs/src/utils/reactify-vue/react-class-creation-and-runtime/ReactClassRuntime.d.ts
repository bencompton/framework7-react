/// <reference types="react" />
import * as React from 'react';
import { IVueComponent } from '../ReactifyVue';
export declare const copyMethodsToVueComponent: (vueComponent: IVueComponent) => void;
export declare const copyPropsToVueComponent: (vueComponent: IVueComponent, props: any) => void;
export declare const getComponentTag: (component: any) => any;
export declare const copySlotsToVueComponent: (vueComponent: IVueComponent, slotMapping: any, props: any) => void;
export declare const copyArgsToVueComponent: (vueComponent: IVueComponent, args: any) => void;
export declare const handleWatchedProperties: (vueComponent: IVueComponent, currentProps: any, nextProps: any) => void;
export declare const handleComputedProperties: (vueComponent: IVueComponent) => void;
export declare const getDefaultProps: (vueComponent: IVueComponent) => {};
export declare const addCompiledTemplateFunctionsToVueComponent: (vueComponent: any, createElement: Function) => void;
export declare const generateCreateElementFunctionForClass: (classVueComponentInstance: any, instantiatedComponents: any, vueComponent: any) => (element: any, args: any, children: any) => any;
export declare const applyPropOverridesToTopLevelElement: (reactElement: React.ReactElement<any>, tag: string, self: any) => {
    props: any;
    tag: string;
    ref: (e: HTMLElement) => void;
    type: string | React.ComponentClass<any> | React.StatelessComponent<any>;
    key: string | number;
};
export declare const initData: (vueComponent: any) => any;
