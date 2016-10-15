﻿import * as React from 'react';

export interface ITab {
    id: string;
    badgeText?: string;
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
        <a className={`tab-link ${(tab.isActive) ? 'active' : ''}`} key={tab.id} onClick={() => tab.onTabSelected(tab.id) }>
            <i className={`icon ${tab.icon}`}>
                {
                    (tab.badgeText) ? <span className="badge bg-red">{tab.badgeText}</span> : null
                }
            </i>
            <span className="tabbar-label">{tab.label}</span>
        </a>
    );    
}

export const TabBar = (props: ITabBarProps) => {
    var activeTabId = props.activeTabId || props.tabs[0].id;

    return (
        <div className="toolbar tabbar tabbar-labels">
            <div className="toolbar-inner">
                {props.beforeTabsItem}
                {
                    props.tabs.map(tab => {
                        return Tab({
                            id: tab.id,
                            badgeText: tab.badgeText,
                            label: tab.label,
                            icon: tab.icon,
                            onTabSelected: props.onTabSelected,
                            isActive: tab.id === activeTabId
                        });
                    })
                }
                {props.afterTabsItem}
            </div>
        </div>        
    );
};