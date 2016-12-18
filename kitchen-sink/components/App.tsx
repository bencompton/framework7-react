import * as React from 'react';
import {Route, IndexRoute, Router, hashHistory} from 'react-router';
import {Framework7App, ThemeTypeEnum, Views, View, Pages, Page, PageContent, Navbar} from 'framework7-react';

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

const routes = [{
    path: '/list-view',
    component: ListViewPage
}];

export const App = (props: React.Props<any>) => {
    return (
        <Framework7App themeType={ThemeTypeEnum.iOS} pageAnimationDirection={routeState.lastNavigationDirection} routes={routes}>
            <Views navbarThrough>
                <View dynamicNavbar={true} url="/" main={true}>
                    <Navbar title="Framework7 React" sliding />
                    <Pages>
                        <Page>
                            <PageContent>
                                <div className="list-block tablet-inset">
                                    <ul>
                                        <li><a href="/list-view/" className="item-link item-content"><div className="item-media"><i className="icon icon-f7"></i></div><div className="item-inner"><div className="item-title">List View</div></div></a></li>
                                        <li><a href="/navbars-and-toolbars/" className="item-link item-content"><div className="item-media"><i className="icon icon-f7"></i></div><div className="item-inner"><div className="item-title">Navbars and Toolbars</div></div></a></li>
                                    </ul>
                                </div>
                            </PageContent>
                        </Page>
                    </Pages>
                </View>
            </Views>
        </Framework7App>
    );
}