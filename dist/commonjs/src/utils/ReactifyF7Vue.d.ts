/// <reference types="react" />
import * as React from 'react';
export interface IReactifyF7VueArgs {
    component: any;
    name: string;
    tag: string;
    slots?: string[];
    args?: any;
    instantiatedComponents?: (React.ComponentClass<any> | React.StatelessComponent<any>)[];
    events?: string[];
    mixin?: any;
}
export declare const reactifyF7Vue: <TProps>(args: IReactifyF7VueArgs) => any;
