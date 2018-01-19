import * as React from 'react';
import { Framework7App, View } from 'framework7-react';

import { routes } from '../routes';

export const App =() => (
    <Framework7App themeType="ios" routes={routes}>
        <View url="/" main={true} />
    </Framework7App>
);