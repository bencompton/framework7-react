import * as React from 'react';
import {object} from 'prop-types';
import {camelCase} from 'change-case';

import {IFramework7AppContext} from '../components/Framework7App';
import {reactifyVue} from './reactify-vue/ReactifyVue';
import {Dom7} from '../../framework7/Framework7';
import {Template7, Framework7} from '../../framework7/Framework7';

let nextComponentId = 0;

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

export const reactifyF7Vue = <TProps>(args: IReactifyF7VueArgs): React.ComponentClass<TProps> => {
    const innerComponent = reactifyVue<TProps>({
        component: args.component,
        name: `F7${args.name}`,
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

    class reactClass extends React.Component<TProps, any> {
        private framework7: Framework7;
        private componentId: number;

        constructor(props: TProps, context: any) {
            super(props, context);

            const framework7AppContext = (this.context as any).framework7AppContext as IFramework7AppContext;

            framework7AppContext.getFramework7(f7 => {
                this.framework7 = f7;
            });

            Object.defineProperty(args.component, '$f7Router', {
                get: framework7AppContext.getRouter,
                enumerable: true,
                configurable: true
            });            

            Object.defineProperty(args.component, '$route', {
                get: framework7AppContext.getCurrentRoute,
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(args.component, '$f7', {
                get: () => this.framework7,
                enumerable: true,
                configurable: true
            });            

            this.componentId = nextComponentId++;
        }

        componentWillUnmount() {
            const framework7AppContext = (this.context as any).framework7AppContext as IFramework7AppContext;
            framework7AppContext.unregisterRouteChange(this.componentId)
        }

        render() {
            const props = this.props as any;
            const framework7AppContext = (this.context as any).framework7AppContext as IFramework7AppContext;
            
            const innerEl = React.createElement(innerComponent, {
                ...props,
                $theme: framework7AppContext.theme,
                __onMount: (self) => {
                    const tag = args.tag;

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
    }

    (reactClass as any).tag = args.tag;
    (reactClass as any).vueComponent = args.component;
    (reactClass as any).contextTypes = {
        framework7AppContext: object
    };

    return reactClass;
}