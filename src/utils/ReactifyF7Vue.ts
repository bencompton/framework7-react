import * as React from 'react';
import {camelCase} from 'change-case';

import {IFramework7AppContext} from '../components/Framework7App';
import {reactifyVue} from './reactify-vue/ReactifyVue';
import {Dom7} from '../Framework7';
import {Template7} from '../Framework7';

let nextComponentId = 0;

export interface IReactifyF7VueArgs {
    component: any;
    tag: string;
    slots?: string[];
    args?: any;
    instantiatedComponents?: (React.ComponentClass<any> | React.StatelessComponent<any>)[];
    events?: string[];
    mixin?: any;
}

export const reactifyF7Vue = <TProps>(args: IReactifyF7VueArgs) => {
    const innerComponent = reactifyVue<TProps>({
        component: args.component,
        tag: args.tag,
        slots: !args.slots ? null : args.slots.reduce((slotMap, currentSlotName) => {
            return { ...slotMap, [currentSlotName]: camelCase(currentSlotName) + 'Slot' };
        }, {}),
        events: !args.events ? null : args.events.reduce((eventMap, currentEventName) => {
            return { ...eventMap, [currentEventName]: camelCase('on-' + currentEventName.split(':').join('-')) };
        }, {}),
        instantiatedComponents: args.instantiatedComponents,
        args: {
            ...args.args,
            $$: Dom7,
            $t7: Template7
        },
        mixin: args.mixin
    });

    const reactClass = React.createClass<TProps, any>({
        getInitialState: function () {
            const framework7AppContext = (this.context as any).framework7AppContext as IFramework7AppContext;

            framework7AppContext.getFramework7(f7 => {
                this.framework7 = f7;
            });

            Object.defineProperty(args.component, '$f7', {
                get: () => this.framework7,
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(args.component, '$route', {
                get: framework7AppContext.getCurrentRoute,
                enumerable: true,
                configurable: true
            });

            this.componentId = nextComponentId++;

            return null;
        },

        componentWillUnmount: function () {
            const framework7AppContext = (this.context as any).framework7AppContext as IFramework7AppContext;
            framework7AppContext.unregisterRouteChange(this.componentId)
        },

        render: function() {
            const props = this.props;

            const innerEl = React.createElement(innerComponent, {
                ...props,
                $theme: { material: false, ios: true },
                __onMount: (self) => {
                    const framework7AppContext = (this.context as any).framework7AppContext as IFramework7AppContext;

                    framework7AppContext.getFramework7(f7 => {
                        if (self.vueComponent.onF7Init) {
                            self.vueComponent.onF7Init(f7);
                        }
                    });

                    framework7AppContext.onRouteChange(this.componentId, route => {
                        if (self.vueComponent.onRouteChange) {
                            self.vueComponent.onRouteChange(route);
                        }
                    });
                }
            });

            return innerEl;
        }
    });

    (reactClass as any).tag = args.tag;
    (reactClass as any).vueComponent = args.component;
    (reactClass as any).contextTypes = {
        framework7AppContext: React.PropTypes.object
    };

    return reactClass;
}