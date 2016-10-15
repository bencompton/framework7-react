﻿import * as React from 'react';
import * as $ from 'jquery';

import {AnimationWrapper, AnimationDirectionEnum} from '../AnimationWrapper';
import {prepareNavbar, sizeNavbars, animateNavbars} from '../../utilities/NavbarAnimationLogic';
import {IPageContext} from '../Page';

export interface INavbarProps extends React.Props<any> {
    className?: string;
}

interface INavbarInnerProps extends React.Props<any> {
    pageName: string;
}

const NavbarInner = (props: INavbarInnerProps) => {
    return (
        <div className="navbar-inner" key={props.pageName} >
            {props.children}
        </div>
    );
};

const currentItemAnimationClasses = {
    back: {
        initialClass: 'navbar-on-right',
        animatingClass: 'navbar-from-left-to-center',
        afterAnimationClass: 'navbar-on-center'
    },
    forward: {
        initialClass: 'navbar-on-left',
        animatingClass: 'navbar-from-right-to-center',
        afterAnimationClass: 'navbar-on-center'
    },
    none: 'navbar-on-center'
};

const previousItemAnimationClasses = {
    back: {
        initialClass: 'navbar-on-center',
        animatingClass: 'navbar-from-center-to-right'
    },
    forward: {
        initialClass: 'navbar-on-center',
        animatingClass: 'navbar-from-center-to-left'
    },
    none: ''
};

export class Navbar extends React.Component<INavbarProps, any> {
    static contextTypes = {
        pageContext: React.PropTypes.object
    };

    private get pageContext() {
        return (this.context as any).pageContext as IPageContext;
    }

    private get pageName() {
        return this.pageContext.pageName;
    }

    private get animationDirection() {
        return this.pageContext.pageAnimationDirection;
    }

    render() {
        return (
            <AnimationWrapper 
                component="div"
                className={`navbar ${this.props.className || ''}`}
                currentItemAnimationClasses={currentItemAnimationClasses}
                previousItemAnimationClasses={previousItemAnimationClasses}
                animationDirection={this.pageContext.pageAnimationDirection}
                onBeforeAnimation={this.onBeforeAnimation}
                onAfterAnimation={this.onAfterAnimation}
            >
                <NavbarInner pageName={this.pageName} key={this.pageName} >
                    {this.props.children}
                </NavbarInner>
            </AnimationWrapper>
        );        
    }

    private onBeforeAnimation(currentNavbar: HTMLElement, previousNavbar: HTMLElement) {
        sizeNavbars($(currentNavbar).closest('.view'));
        prepareNavbar(currentNavbar, previousNavbar, this.animationDirection === AnimationDirectionEnum.Back ? 'left' : 'right');

        return true;
    }

    private onAfterAnimation(currentNavbar: HTMLElement, previousNavbar: HTMLElement) {
        if (this.animationDirection === AnimationDirectionEnum.Back) {
            animateNavbars($(currentNavbar), $(previousNavbar), 'to-right');
        } else {
            animateNavbars($(previousNavbar), $(currentNavbar), 'to-left');
        }
    }
}