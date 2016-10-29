import * as React from 'react';
import * as $ from 'jquery';

import {animationEnd} from '../utils/AnimationEnd';

export enum AnimationDirectionEnum {
    Forward,
    Back
}

export interface IAnimationClasses {
    initialClass: string;
    animatingClass: string;
    afterAnimationClass?: string;
}

export interface IItemAnimationClasses {
    back: IAnimationClasses;
    forward: IAnimationClasses;
    none: string;
}

export interface IPageAnimationWrapper extends React.Props<any> {
    currentItemAnimationClasses: IItemAnimationClasses;
    previousItemAnimationClasses: IItemAnimationClasses;
    animationDirection: AnimationDirectionEnum;
    onBeforeAnimation?: (currentPageElement: HTMLElement, previousPageElement: HTMLElement) => boolean;
    onAfterAnimation?: (currentPageElement: HTMLElement, previousPageElement: HTMLElement) => void;
    component?: React.ReactElement<any> | string;
    className?: string;
}

interface IAnimationContext {
    getPreviousItem: (elementType: React.ComponentClass<any> | React.StatelessComponent<any> | string) => React.ReactElement<any>;
    setPreviousItem: (elementType: React.ComponentClass<any> | React.StatelessComponent<any> | string, component: React.ReactElement<any>) => void;
}

export class AnimationParent extends React.Component<any, any> {
    private animationContext: IAnimationContext;
    private previousItems: any = {};

    constructor(props: React.Props<any>, context: any) {
        super(props, context);
        
        this.animationContext = {
            getPreviousItem: this.getPreviousItem.bind(this),
            setPreviousItem: this.setPreviousItem.bind(this)
        }
    }

    static childContextTypes = {
        animationContext: React.PropTypes.object
    }
    
    private getChildContext() {
        return {
            animationContext: this.animationContext
        };
    }

    render() {
        return this.props.children;
    }

    getPreviousItem(elementType: React.ComponentClass<any> | React.StatelessComponent<any> | string) {
        return this.previousItems[elementType as any] as React.ReactElement<any>;
    }

    setPreviousItem(elementType: React.ComponentClass<any> | React.StatelessComponent<any> | string, item: React.ReactElement<any>) {
        this.previousItems[elementType as any] = item;
    }
}

export class AnimationWrapper extends React.Component<IPageAnimationWrapper, any> {
    private element: HTMLElement;

    static contextTypes = {
        animationContext: React.PropTypes.object
    }

    render() {
        return React.createElement((this.props.component || 'span') as any, {
            ref: (item: HTMLElement) => this.element = item,
            children: this.currentAndPreviousItem,
            className: this.props.className
        });
    }

    componentDidMount() {
        if (this.previousItem) this.animateItems();
        this.previousItem = this.currentItem;
    }

    componentDidUpdate() {
        if (this.previousAndCurrentComponentDifferent) {
            this.animateItems();
        }

        this.previousItem = this.currentItem;
    }

    private get previousAndCurrentComponentDifferent() {
        if (!this.previousItem) {
            return true;
        } else {
            return this.previousItem.key !== this.currentItem.key;    
        }
    }

    private get currentAndPreviousItem() {
        if (this.props.animationDirection == null || !this.previousItem || !this.previousAndCurrentComponentDifferent) {
            return [this.currentItem];
        } else if (this.props.animationDirection === AnimationDirectionEnum.Forward) {
            return [this.previousItem, this.currentItem];
        } else {
            return [this.currentItem, this.previousItem];
        }
    }

    private get currentItem() {
        return this.props.children as any;
    }

    private get animationContext() {
        let context = this.context as any,
            animationContext: IAnimationContext = null;

        if (context && context.animationContext) {
            animationContext = context.animationContext;
        }

        return animationContext;
    }

    private get previousItem() {
        let previousItem: React.ReactElement<any>;

        if (this.animationContext) {
            previousItem = this.animationContext.getPreviousItem(this.currentItem.type);
        }

        return previousItem || null;
    }

    private set previousItem(item: React.ReactElement<any>) {
        if (this.animationContext) {
            this.animationContext.setPreviousItem(this.currentItem.type, item);
        }
    }

    private get currentItemInitialClassName() {
        if (this.props.animationDirection === null) {
            return this.props.currentItemAnimationClasses.none;
        } else if (this.props.animationDirection === AnimationDirectionEnum.Forward) {
            return this.props.currentItemAnimationClasses.forward.initialClass;
        } else {
            return this.props.currentItemAnimationClasses.back.initialClass;
        }
    }

    private get previousItemInitialClassName() {
        if (this.props.animationDirection === null) {
            return this.props.previousItemAnimationClasses.none;
        } else if (this.props.animationDirection === AnimationDirectionEnum.Forward) {
            return this.props.previousItemAnimationClasses.forward.initialClass;
        } else {
            return this.props.previousItemAnimationClasses.back.initialClass;
        }
    }


    private get currentItemAnimatingClassName() {
        if (this.props.animationDirection === null) {
            return this.props.currentItemAnimationClasses.none;
        } else if (this.props.animationDirection === AnimationDirectionEnum.Forward) {
            return this.props.currentItemAnimationClasses.forward.animatingClass;
        } else {
            return this.props.currentItemAnimationClasses.back.animatingClass;
        }
    }

    private get previousItemAnimatingClassName() {
        if (this.props.animationDirection === null) {
            return this.props.previousItemAnimationClasses.none;
        } else if (this.props.animationDirection === AnimationDirectionEnum.Forward) {
            return this.props.previousItemAnimationClasses.forward.animatingClass;
        } else {
            return this.props.previousItemAnimationClasses.back.animatingClass;
        }
    }

    private get currentItemFinalClassName() {
        if (this.props.animationDirection === null) {
            return this.props.currentItemAnimationClasses.none;
        } else if (this.props.animationDirection === AnimationDirectionEnum.Forward) {
            return this.props.currentItemAnimationClasses.forward.afterAnimationClass;
        } else {
            return this.props.currentItemAnimationClasses.back.afterAnimationClass;
        }
    }

    private get previousItemFinalClassName() {
        if (this.props.animationDirection === null) {
            return this.props.previousItemAnimationClasses.none;
        } else if (this.props.animationDirection === AnimationDirectionEnum.Forward) {
            return this.props.previousItemAnimationClasses.forward.afterAnimationClass;
        } else {
            return this.props.previousItemAnimationClasses.back.afterAnimationClass;
        }
    }
    
    private animateItems() {
        let allChildren = $(this.element).children(),
            currentItemElement: HTMLElement = null,
            previousItemElement: HTMLElement = null;

        if (this.props.animationDirection === AnimationDirectionEnum.Forward) {
            previousItemElement = allChildren[0];
            currentItemElement = allChildren[1];
            
        } else {
            currentItemElement = allChildren[0];
            previousItemElement = allChildren[1];            
        }

        if (currentItemElement && previousItemElement) {
            $(currentItemElement).addClass(this.currentItemInitialClassName);
            $(previousItemElement).addClass(this.previousItemInitialClassName);

            $(currentItemElement).css('display', '');
            $(previousItemElement).css('display', '');

            //Disable all events while animating
            $(previousItemElement).css('pointer-events', 'none');
            $(currentItemElement).css('pointer-events', 'none');

            if (this.props.onBeforeAnimation) {
                if (this.props.onBeforeAnimation(currentItemElement, previousItemElement) === false) return;
            }

            setTimeout(() => {
                this.animateCurrentItem(currentItemElement);
                this.animatePreviousItem(previousItemElement);
                if (this.props.onAfterAnimation) this.props.onAfterAnimation(currentItemElement, previousItemElement);
            }, 0);
        }
    }

    private animateCurrentItem(element: HTMLElement) {
        animationEnd(element).then(() => {
            $(element)
                .removeClass(this.currentItemAnimatingClassName)
                .addClass(this.currentItemFinalClassName)
                .css('pointer-events', '');
        });

        $(element)
            .removeClass(this.currentItemInitialClassName)
            .addClass(this.currentItemAnimatingClassName);
    }

    private animatePreviousItem(element: HTMLElement) {
        animationEnd(element).then(() => {
            $(element).css('display', 'none');
        });

        $(element)
            .removeClass(this.previousItemInitialClassName)
            .addClass(this.previousItemAnimatingClassName);
    }
}