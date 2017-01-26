import * as React from 'react';

import {convertVueComponentToClass} from './VueComponentClass';
import {
    copyMethodsToVueComponent,
    copyPropsToVueComponent,
    getComponentTag,
    copySlotsToVueComponent,
    copyArgsToVueComponent,
    handleWatchedProperties,
    handleComputedProperties,
    applyMixinToVueComponent,
    getDefaultProps,
    addCompiledTemplateFunctionsToVueComponent,
    generateCreateElementFunctionForClass,
    removePropsFromElementAndChildren,
    applyPropOverrides,
    initData
} from './ReactClassRuntime';

export const generateReactClass = <TProps>(instantiatedComponents, vueComponent, slots, tag, mixin, args) => {
    const vueComponentClass = convertVueComponentToClass(vueComponent);

    applyMixinToVueComponent(vueComponent, mixin);
    copyMethodsToVueComponent(vueComponent);
    copyArgsToVueComponent(vueComponent, args);

    const reactClass = React.createClass<TProps, any>({
        getInitialState: function() {
            this.vueComponent = new vueComponentClass(this.props, this);
            this.createElement = generateCreateElementFunctionForClass(
                this.vueComponent,
                instantiatedComponents,
                this.vueComponent
            );
            
            copyPropsToVueComponent(this.vueComponent, this.props);
            copySlotsToVueComponent(this.vueComponent, slots, this.props);                        
            const state = initData(this.vueComponent);            
            handleComputedProperties(this.vueComponent);

            addCompiledTemplateFunctionsToVueComponent(this.vueComponent, this.createElement);

            if (this.props.__onInit) {
                this.props.__onInit(this);
            }            

            return state;
        },

        componentDidUpdate: function () {
            if (this.vueComponent.updated) this.vueComponent.updated();
        },

        componentDidMount: function() {
            if (this.vueComponent.mounted) this.vueComponent.mounted();
            if (this.props.__onMount) this.props.__onMount(this);
            this.didMount = true;
        },

        componentWillUnmount: function() {
            if (vueComponent.beforeDestroy) vueComponent.beforeDestroy();
        },

        componentWillReceiveProps: function(nextProps) {
            handleWatchedProperties(this.vueComponent, this.props, nextProps);               
        },

        render: function() {  
            if (this.hasRendered) {
                //Only do this after the first render, since it happens in getInitialState the first time
                copyPropsToVueComponent(this.vueComponent, this.props);
                copySlotsToVueComponent(this.vueComponent, slots, this.props);
                handleComputedProperties(this.vueComponent);
            }

            const reactElement = this.vueComponent.render(this.createElement.bind(this));

            this.hasRendered = true;

            if (reactElement) {
                return applyPropOverrides(reactElement, tag, this);
            } else {
                return null;
            }
        },

        callVueMethod: function(methodName: string, ...args: any[]) {
            return this.vueComponent[methodName](args);
        }
    });

    (reactClass as any).tag = tag;
    (reactClass as any).vueComponent = vueComponent;
    (reactClass as any).getVueComponentInstance = () => this.vueComponent;    

    const defaultProps = getDefaultProps(vueComponent);

    if (defaultProps) (reactClass as any).defaultProps = defaultProps;

    return reactClass;
};