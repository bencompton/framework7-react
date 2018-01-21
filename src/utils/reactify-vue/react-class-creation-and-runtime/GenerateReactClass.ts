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
    addCompiledTemplateFunctionsToVueComponent,
    generateCreateElementFunctionForClass,
    applyPropOverridesToTopLevelElement,
    initData
} from './ReactClassRuntime';

export const generateReactClass = <TProps>(instantiatedComponents, vueComponent, slots, name, tag, args, defaultProps): React.ComponentClass<TProps> => {
    const vueComponentClass = convertVueComponentToClass(vueComponent);

    copyMethodsToVueComponent(vueComponent);
    copyArgsToVueComponent(vueComponent, args);

    class reactClass extends React.Component<TProps, any> {
        private vueComponent: any;
        private hasRendered: boolean;
        private didMount: boolean;
        private createElement: any;

        constructor(props, context) {
            super(props, context);

            this.vueComponent = new vueComponentClass(this.props, this);
            this.createElement = generateCreateElementFunctionForClass(
                this.vueComponent,
                instantiatedComponents,
                this.vueComponent
            );
            
            copyPropsToVueComponent(this.vueComponent, this.props, defaultProps);
            copySlotsToVueComponent(this.vueComponent, slots, this.props);                        
            const state = initData(this.vueComponent, this);
            handleComputedProperties(this.vueComponent);

            addCompiledTemplateFunctionsToVueComponent(this.vueComponent, this.createElement);

            if ((this.props as any).__onInit) {
                (this.props as any).__onInit(this);
            }            

            this.state = state;            
        }        

        componentWillUpdate() {
            if (this.vueComponent.beforeUpdate) this.vueComponent.beforeUpdate();
        }

        componentDidUpdate() {
            if (this.vueComponent.updated) this.vueComponent.updated();
        }

        componentDidMount() {
            if (this.vueComponent.mounted) this.vueComponent.mounted();
            if ((this.props as any).__onMount) (this.props as any).__onMount(this);
            this.didMount = true;
        }

        componentWillUnmount() {
            if (vueComponent.beforeDestroy) vueComponent.beforeDestroy();
        }

        componentWillReceiveProps(nextProps) {
            handleWatchedProperties(this.vueComponent, this.props, nextProps, defaultProps);               
        }

        render() {  
            if (this.hasRendered) {
                //Only do this after the first render, since it happens in getInitialState the first time
                copyPropsToVueComponent(this.vueComponent, this.props, defaultProps);
                copySlotsToVueComponent(this.vueComponent, slots, this.props);
                handleComputedProperties(this.vueComponent);
            }

            const reactElement = this.vueComponent.render(this.createElement.bind(this));

            this.hasRendered = true;

            if (reactElement) {
                return applyPropOverridesToTopLevelElement(reactElement, tag, this);
            } else {
                return null;
            }
        }

        callVueMethod(methodName: string, ...args: any[]) {
            return this.vueComponent[methodName](args);
        }
    }

    (reactClass as any).tag = tag;
    (reactClass as any).vueComponent = vueComponent;
    (reactClass as any).getVueComponentInstance = () => this.vueComponent;  
    (reactClass as any).displayName = name;
    (reactClass as any).defaultProps = defaultProps;

    return reactClass;
};