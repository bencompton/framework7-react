import * as React from 'react';

import {IVueComponent} from '../ReactifyVue';
import {PropsProcessor} from './PropsProcessor';
import {ManagedFormInput} from '../../../components/inputs/ManagedFormInput';

const propsProcessor = new PropsProcessor();
const formElements = ['input'];

const resolveDependencyComponent = (instantiatedComponents: (React.ComponentClass<any> | React.StatelessComponent<any>)[], componentToResolve: string) => {
    if (instantiatedComponents && componentToResolve.indexOf('f7-') > -1) {
        //Is a Vue component that React does not know what to do with, so search for it by tag name so that we can pass the actual React component for rendering.
        const results = instantiatedComponents
            .filter(instantiatedComponent => {
                if ((instantiatedComponent as any).tag) {
                    return (instantiatedComponent as any).tag === componentToResolve;
                } else {
                    return false;
                }
            });

        if (results.length) { return results[0]; }
    } else if (formElements.indexOf(componentToResolve) > -1) {
        //Is an input that we need to manage to control state 
        return ManagedFormInput;
    } else {
        //Is just a plain html element like div, etc. so just return it.
        return componentToResolve;
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
    let reactElement;

    if (!componentOrComponentName) return null;

    if (args.tag === 'component') {
        reactElement = React.createElement(componentOrComponentName as React.ComponentClass<any>);
    } else {
        let resolvedComponent;
        
        resolvedComponent = resolveDependencyComponent(instantiatedComponents, componentOrComponentName as string);               
        children = flattenNestedArrayOfChildren(children);        

        if (!resolvedComponent) resolvedComponent = componentOrComponentName as React.ComponentClass<any> | React.StatelessComponent<any>;

        const props = propsProcessor.getProps(args, children, componentOrComponentName, resolvedComponent, vueComponent);
        
        reactElement = React.createElement(resolvedComponent, props);
    }

    return reactElement;
};