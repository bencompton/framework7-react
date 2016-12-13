import {hashHistory} from 'react-router';
import {AnimationDirectionEnum} from 'framework7-react';

export class RouteState {
    public lastNavigationDirection: AnimationDirectionEnum;

    public navigate(path: string, goingBack: boolean) {
        hashHistory.replace(path);
        this.lastNavigationDirection = goingBack ? AnimationDirectionEnum.Back : AnimationDirectionEnum.Forward;
    }
}

export const routeState = new RouteState();