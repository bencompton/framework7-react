import * as React from 'react';
import {Route, IndexRoute, Router, hashHistory} from 'react-router';
import {Framework7App, ThemeTypeEnum, Views, View, AnimationDirectionEnum} from 'framework7-react';

import {routeState} from '../utils/RouteState';
import {IndexPage} from './pages/IndexPage';
import {NavbarAndToolbarPage} from './pages/NavbarAndToolbarPage';
import {ListViewPage} from './pages/ListViewPage';
import {ProgressBarPage} from './pages/ProgressBarPage';

export interface IKitchenSinkPage {
    path: string;
    pageTitle: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any>;
}

export const pages: IKitchenSinkPage[] = [{
    path: '/',
    pageTitle: '',
    component: IndexPage
}, {
    path: 'list-view',
    pageTitle: 'List View',
    component: ListViewPage
}, {
    path: 'navbars-and-toolbars',
    pageTitle: 'Navbars and Toolbars',
    component: NavbarAndToolbarPage
}, {
    path: 'progress-bar',
    pageTitle: 'Progress Bar',
    component: ProgressBarPage
}];

const App = (props: React.Props<any>) => {
    return (
        <Framework7App themeType={ThemeTypeEnum.iOS} pageAnimationDirection={routeState.lastNavigationDirection}>

            <Views>
                <View>
                    {props.children}
                </View>
            </Views>
        </Framework7App>
    );
}

export const Routes = () => {
    return (
        <Router history={hashHistory}>
            <Route component={App}>
                {pages.map(pageRoute => {
                    return <Route key={pageRoute.path} path={pageRoute.path} component={pageRoute.component} />
                })}
            </Route>
        </Router>
    );
};