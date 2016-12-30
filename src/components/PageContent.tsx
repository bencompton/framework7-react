import * as React from 'react';

import {VuePageContent} from '../../framework7-vue/framework7-vue';
import {reactifyF7Vue} from '../utils/ReactifyF7Vue';

import '../less/pages.less';

export interface IPageContentProps extends React.Props<any> {
    className?: string;
}

export const PageContent = reactifyF7Vue<IPageContentProps>({
    component: VuePageContent,
    tag: 'f7-page-content'
});