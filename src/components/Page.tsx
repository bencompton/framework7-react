import * as React from 'react';
import * as $ from 'jquery';

import {IFramework7AppContext} from './Framework7App';
import {AnimationWrapper, AnimationDirectionEnum} from './AnimationWrapper';
import {IViewContext} from './View';

import '../less/pages.less';

export interface IPageProps extends React.Props<any> {
    name: string;
    animationDirection?: AnimationDirectionEnum;
    className?: string;
}

export interface IPageBodyProps extends React.Props<any> {
    className?: string;
}

interface IPageInnerProps extends React.Props<any> {
    className: string;
}

export interface IPageContentProps extends React.Props<any> {
    className?: string;
}

export interface IPageContext {
    pageName: string;
    pageAnimationDirection: AnimationDirectionEnum;
}

// class PageInner extends React.Component<IPageInnerProps, any> {
//     render() {
//         return (
//             <div className={`page ${this.props.className || ''}`}>
//                 {this.props.children}
//             </div>
//         );
//     }
// };

const currentItemAnimationClasses = {
    back: {
        initialClass: 'page-on-left',
        animatingClass: 'page-from-left-to-center',
        afterAnimationClass: 'page-on-center'
    },
    forward: {
        initialClass: 'page-on-right',
        animatingClass: 'page-from-right-to-center',
        afterAnimationClass: 'page-on-center'
    },
    none: 'page-on-center'
};

const previousItemAnimationClasses = {
    back: {
        initialClass: 'page-on-center',
        animatingClass: 'page-from-center-to-right'
    },
    forward: {
        initialClass: 'page-on-center',
        animatingClass: 'page-from-center-to-left'
    },
    none: ''
};

export class Page extends React.Component<IPageProps, any> {
    static childContextTypes = {
        pageContext: React.PropTypes.object
    }

    static contextTypes = {
        viewContext: React.PropTypes.object
    }

    getChildContext() {
        return {
            pageContext: {
                pageAnimationDirection: this.props.animationDirection,
                pageName: this.props.name
            }
        }
    }

    render() {
        return (
            null
        );
    }
};

export const PageBody = (props: IPageBodyProps, context: IPageContext) => {
    const pageContext = (context as any).pageContext as IPageContext;
    const appContext = (context as any).framework7AppContext as IFramework7AppContext;

    let animationDirection = pageContext.pageAnimationDirection || appContext.pageAnimationDirection;

    return (
        null
    );
};

(PageBody as any).contextTypes = {
    pageContext: React.PropTypes.object,
    viewContext: React.PropTypes.object,
    framework7AppContext: React.PropTypes.object
};

export const PageContent = (props: IPageContentProps) => null;