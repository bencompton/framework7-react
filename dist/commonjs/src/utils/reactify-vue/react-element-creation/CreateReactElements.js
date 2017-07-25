"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropsProcessor_1 = require("./PropsProcessor");
var ManagedFormInput_1 = require("../../../components/inputs/ManagedFormInput");
var propsProcessor = new PropsProcessor_1.PropsProcessor();
var formElements = ['input'];
var resolveDependencyComponent = function (instantiatedComponents, componentToResolve) {
    if (instantiatedComponents && componentToResolve.indexOf('f7-') > -1) {
        //Is a Vue component that React does not know what to do with, so search for it by tag name so that we can pass the actual React component for rendering.
        var results = instantiatedComponents
            .filter(function (instantiatedComponent) {
            if (instantiatedComponent.tag) {
                return instantiatedComponent.tag === componentToResolve;
            }
            else {
                return false;
            }
        });
        if (results.length) {
            return results[0];
        }
    }
    else if (formElements.indexOf(componentToResolve) > -1) {
        //Is an input that we need to manage to control state 
        return ManagedFormInput_1.ManagedFormInput;
    }
    else {
        //Is just a plain html element like div, etc. so just return it.
        return componentToResolve;
    }
};
var flattenNestedArrayOfChildren = function (children, finalArray) {
    if (finalArray === void 0) { finalArray = []; }
    if (children && Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            if (children[i] && children[i].constructor === Array) {
                flattenNestedArrayOfChildren(children[i], finalArray);
            }
            else {
                if (finalArray.indexOf(children[i]) === -1) {
                    finalArray.push(children[i]);
                }
            }
        }
        return finalArray;
    }
    else {
        return children;
    }
};
exports.createReactElement = function (componentOrComponentName, args, children, instantiatedComponents, vueComponent) {
    var reactElement;
    if (!componentOrComponentName)
        return null;
    var resolvedComponent;
    if (args.tag !== 'component') {
        resolvedComponent = resolveDependencyComponent(instantiatedComponents, componentOrComponentName);
    }
    children = flattenNestedArrayOfChildren(children);
    if (!resolvedComponent)
        resolvedComponent = componentOrComponentName;
    var props = propsProcessor.getProps(args, children, componentOrComponentName, resolvedComponent, vueComponent);
    reactElement = React.createElement(resolvedComponent, props);
    return reactElement;
};

//# sourceMappingURL=CreateReactElements.js.map
