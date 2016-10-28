import * as React from 'react';
import {Route, Router, hashHistory} from 'react-router';
import {Framework7App, ThemeTypeEnum, Views, View, AnimationDirectionEnum} from 'framework7-react';

import {HomePage} from './HomePage';
import {NavbarAndToolbarPage} from './NavbarAndToolbarPage';

export const App = () => {
    return (
        <Framework7App themeType={ThemeTypeEnum.iOS} pageAnimationDirection={AnimationDirectionEnum.Forward}>
            
            <Views>
                <View>
                    <Router history={hashHistory}>
                        <Route path="/" component={HomePage} />
                        <Route path="navbars-and-toolbars" component={NavbarAndToolbarPage} />
                    </Router>
                </View>
            </Views>
        </Framework7App>
    );
};