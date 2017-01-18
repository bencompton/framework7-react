import * as React from 'react';
import {camelCase} from 'change-case';
import * as classNames from 'classnames';

import {IVueComponent} from '../ReactifyVue';
import {PropsProcessor} from './PropsProcessor';

const resolveDependencyComponent = (instantiatedComponents: (React.ComponentClass<any> | React.StatelessComponent<any>)[], componentToResolve: string) => {
    if (instantiatedComponents) {
        const results = instantiatedComponents
            .filter(instantiatedComponent => {
                if ((instantiatedComponent as any).tag) {
                    return (instantiatedComponent as any).tag === componentToResolve;
                } else {
                    return false;
                }
            });

        if (results.length) { return results[0]; }
    }
};

const flattenNestedArrayOfChildren = (children: any[], finalArray: any[] = []) => {
    if (children && Array.isArray(children)) {
        for (let i = 0; i < children.length; i++) {
            if (children[i] && children[i].constructor === Array) {
                flattenNestedArrayOfChildren(children[i], finalArray);
            } else {
                if (finalArray.indexOf(children[i]) === -1) {
                    finalArray.push(children[i]);  
                }
            }
        }

        return finalArray;
    } else {
        return children;
    }
};

export const createReactElement = (
    componentOrComponentName: string | React.ComponentClass<any> | React.StatelessComponent<any>,
    args,
    children,
    instantiatedComponents,
    vueComponent: IVueComponent
) => {
    let resolvedComponent;    

    resolvedComponent = resolveDependencyComponent(instantiatedComponents, componentOrComponentName as string);
    children = flattenNestedArrayOfChildren(children);

    if (!resolvedComponent) resolvedComponent = componentOrComponentName as React.ComponentClass<any> | React.StatelessComponent<any>;

    const propsProcessor = new PropsProcessor();
    const props = propsProcessor.getProps(args, children, componentOrComponentName, resolvedComponent, vueComponent)

    return React.createElement(resolvedComponent, props);
};