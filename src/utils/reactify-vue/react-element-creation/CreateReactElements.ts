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

const removeOuterArrayFromChildren = (children) => {
    if (children && Array.isArray(children)) {
        return children.reduce((outputArray, nextChildArray) => {
            nextChildArray = nextChildArray || [];

            if (!Array.isArray(nextChildArray)) {
                nextChildArray = [nextChildArray];
            }

            return [...outputArray, ...nextChildArray];
        }, []);
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
    children = removeOuterArrayFromChildren(children);

    if (!resolvedComponent) resolvedComponent = componentOrComponentName as React.ComponentClass<any> | React.StatelessComponent<any>;

    const propsProcessor = new PropsProcessor();
    const props = propsProcessor.getProps(args, children, componentOrComponentName, resolvedComponent, vueComponent)

    return React.createElement(resolvedComponent, props);
};