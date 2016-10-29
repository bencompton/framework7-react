import * as Promise from 'bluebird';
import * as $ from 'jquery';

const transitionEndEvents = 'transitionend webkitTransitionEnd oTransitionEnd';
const animationEndEvents = 'animationend webkitAnimationEnd oAnimationEnd';

const listenToEvent = (element: HTMLElement, events: string) => {
    return new Promise(resolve => {
        const handleEvent = () => {
            $(element).unbind(events, handleEvent);
            resolve();
        };

        $(element).bind(events, handleEvent);
    });
};

export const transitionEnd = (element: HTMLElement) => listenToEvent(element, transitionEndEvents);
export const animationEnd = (element: HTMLElement) => listenToEvent(element, animationEndEvents);