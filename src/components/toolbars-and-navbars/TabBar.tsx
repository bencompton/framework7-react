import * as React from 'react';

import {Badge} from '../Badge';
import {ColorsEnum} from '../../utils/Colors';

import '../../less/tabs.less';

export interface ITab {
    id: string;
    badgeText?: string;
    badgeColor?: ColorsEnum;
    label: string;
    icon: string;
    onTabSelected?: (tabId: string) => void;
    isActive?: boolean;
}

export interface ITabBarProps {
    tabs: ITab[];
    activeTabId: string;
    onTabSelected: (tabId: string) => void;
    beforeTabsItem?: React.ReactElement<any>;
    afterTabsItem?: React.ReactElement<any>;
}

const Tab = (tab: ITab) => {
    return (
        <a className={`tab-link ${(tab.isActive) ? 'active' : ''}`} key={tab.id} onClick={() => tab.onTabSelected(tab.id)}>
            <i className={`icon ${tab.icon}`}>
                {(tab.badgeText) ? <Badge text={tab.badgeText} color={tab.badgeColor} /> : null}
            </i>
            <span className="tabbar-label">{tab.label}</span>
        </a>
    );
};

const getTabs = (props: ITabBarProps) => {
    const activeTabId = props.activeTabId || props.tabs[0].id;

    return props.tabs.map(tab => {
        return Tab({
            id: tab.id,
            badgeText: tab.badgeText,
            label: tab.label,
            icon: tab.icon,
            onTabSelected: props.onTabSelected,
            isActive: tab.id === activeTabId
        });
    });
};

export const TabBar = (props: ITabBarProps) => {
    return (
        <div className="toolbar tabbar tabbar-labels">
            <div className="toolbar-inner">
                {props.beforeTabsItem}
                {getTabs(props)}
                {props.afterTabsItem}
            </div>
        </div>
    );
};