export interface IFramework7Params {
    // Auto init
    init?: boolean;
    preroute?: (view: View, params: any) => boolean;
    root?: string;    
    cache?: boolean;
    cacheIgnore?: string[];
    cacheIgnoreGetParameters?: boolean;
    cacheDuration?: number;
    preloadPreviousPage?: boolean;
    uniqueHistory?: boolean;
    uniqueHistoryIgnoreGetParameters?: boolean;
    dynamicPageUrl?: string;
    allowDuplicateUrls?: boolean;
    router?: boolean;
    routerRemoveTimeout?: boolean;
    routerRemoveWithTimeout?: boolean;
    // Push State
    pushState?: boolean;
    pushStateRoot?: any;
    pushStateNoAnimation?: boolean;
    pushStateSeparator?: string;
    pushStateOnLoad?: boolean;
    // Fast clicks
    fastClicks?: boolean;
    fastClicksDistanceThreshold?: number;
    fastClicksDelayBetweenClicks?: number;
    fastClicksExclude?: string;
    // Tap Hold
    tapHold?: boolean;
    tapHoldDelay?: number;
    tapHoldPreventClicks?: boolean;
    // Active State
    activeState?: boolean;
    activeStateElements?: string;
    // Animate Nav Back Icon
    animateNavBackIcon?: boolean;
    // Swipe Back
    swipeBackPage?: boolean;
    swipeBackPageThreshold?: number;
    swipeBackPageActiveArea?: number;
    swipeBackPageAnimateShadow?: boolean;
    swipeBackPageAnimateOpacity?: boolean;
    // Ajax
    ajaxLinks?: string; // or CSS selector
    // External Links
    externalLinks?: string; // CSS selector
    // Sortable
    sortable?: boolean;
    // Scroll toolbars
    hideNavbarOnPageScroll?: boolean;
    hideToolbarOnPageScroll?: boolean;
    hideTabbarOnPageScroll?: boolean;
    showBarsOnPageScrollEnd?: boolean;
    showBarsOnPageScrollTop?: boolean;
    // Swipeout
    swipeout?: boolean;
    swipeoutActionsNoFold?: boolean;
    swipeoutNoFollow?: boolean;
    swipeoutRemoveWithTimeout?: boolean;
    // Smart Select Back link template
    smartSelectOpenIn?: 'page' | 'popup' | 'picker';
    smartSelectBackText?: string;
    smartSelectPopupCloseText?: string;
    smartSelectPickerCloseText?: string;
    smartSelectSearchbar?: boolean;
    smartSelectBackOnSelect?: boolean;
    // Tap Navbar or Statusbar to scroll to top
    scrollTopOnNavbarClick?: boolean;
    scrollTopOnStatusbarClick?: boolean;
    // Panels
    swipePanel?: 'left' | 'right' | 'both' | boolean;
    swipePanelActiveArea?: number;
    swipePanelCloseOpposite?: boolean;
    swipePanelOnlyClose?: boolean;
    swipePanelNoFollow?: boolean;
    swipePanelThreshold?: number;
    panelsCloseByOutside?: boolean;
    // Modals
    modalButtonOk?: string;
    modalButtonCancel?: string;
    modalUsernamePlaceholder?: string;
    modalPasswordPlaceholder?: string;
    modalTitle?: string;
    modalCloseByOutside?: boolean;
    actionsCloseByOutside?: boolean;
    popupCloseByOutside?: boolean;
    modalPreloaderTitle?: string;
    modalStack?: boolean;
    // Lazy Load
    imagesLazyLoadThreshold?: number;
    imagesLazyLoadSequential?: boolean;
    // Name space
    viewClass?: string;
    viewMainClass?: string;
    viewsClass?: string;
    // Notifications defaults
    notificationCloseOnClick?: boolean;
    notificationCloseIcon?: boolean;
    notificationCloseButtonText?: string;
    // Animate Pages
    animatePages?: boolean;
    // Template7
    templates?: Object;
    template7Data?: Object;
    template7Pages?: boolean;
    precompileTemplates?: boolean;
    // Material
    material?: boolean;
    materialPageLoadDelay?: number;
    materialPreloaderSvg?: string;
    materialPreloaderHtml?: string;
    materialRipple?: boolean;
    materialRippleElements?: string;
}

export declare class Framework7 {
    constructor(params?: IFramework7Params);

    addView(viewElement: HTMLElement, viewParams: any): View;

    modal(parameters?: {
        title?: string;
        text?: string;
        afterText?: string;
        buttons?: IButton[];
        verticalButtons?: boolean;
        onClick?: (modalElement: HTMLElement, index: number) => void;
    }): HTMLElement;

    closeModal(modalElement: HTMLElement | string): void;

    sizeNavbars(): void;

    openPanel(animate: boolean): void;

    closePanel(animate: boolean): void;

    initPageScrollToolbars(pageContainer: HTMLElement | string): void;

    params: IFramework7Params;
}

export declare class View {
    public destroy: () => void;
    public pagesContainer: HTMLElement;
    public router: any;
}

export interface IButton {
    text: string;
    bold?: boolean;
    close?: boolean;
    onClick?: () => void;
}

export declare class VirtualList {
    destroy: () => void;
}

export declare type Dom7ReturnObject = {
    length: number;
    insertBefore(element: HTMLElement): void;
    addClass(classes: string): void;
    on(eventName: string, handler: any, useCapture?: boolean): void;
    on(eventName: string, delegatedTarget: string, handler: any, useCapture?: boolean): void;
}

export declare function Dom7(selector: string | Object): Dom7ReturnObject;
export declare function Dom7(selector: string | Object, context: string): Dom7ReturnObject;

export declare type Template7ReturnObject = {
    compile(template: string): void;
    registerHelper(name: string, helper: () => void): void;
    unregisterHelper(name: string): void;
    registerPartial(name: string, helper: string): void;
    unregisterPartial(name: string): void;
    global: Object;
}

export declare function Template7(): Template7ReturnObject
