import * as React from 'react';
import {View} from '../Framework7';

export interface IFramework7Route {
    path: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any> | string;
}

export const getPrerouteHandler = (routes: IFramework7Route[], routeChangeCallback: (component: React.ComponentClass<any> | React.StatelessComponent<any>) => {
    return (view, params) => {
        return preroute(view: View, params, routes, routeChangeCallback);
    };
};

const preroute = (view, params, routes, routeChangeCallback) => {    
    var url = params.url,
        pageElement = params.pageElement;

    if (url && pageElement || !url || url === '#') {
        return true;
    }

    var matchingRoute = findMatchingRoute(url, routes);
    
    if (!matchingRoute) {
        routeChangeCallback(matchingRoute.route.component)
        return true;
    } else {
        return false;
    }
};

const findMatchingRoute = (url, routes) => {
    let matchingRoute;

    if (!url) return matchingRoute;
        let query = ''; //$$.parseUrlQuery(url);
        let hash = url.split('#')[1];
        let params = {};
        let path = url.split('#')[0].split('?')[0];
        let urlParts = path.split('/').filter(function (part) {
        if (part !== '') return part;
    });

    let i, j, k;

    for (i = 0; i < routes.length; i++) {
        if (matchingRoute) continue;

        let route = routes[i];
        let parsedRoute = parseRoute(route.path);
        
        if (parsedRoute.length !== urlParts.length) continue;
        
        var matchedParts = 0;
        
        for (j = 0; j < parsedRoute.length; j++) {
            if (typeof parsedRoute[j] === 'string' && urlParts[j] === parsedRoute[j]) matchedParts ++;

            if (typeof parsedRoute[j] === 'object') {
                params[parsedRoute[j].name] = urlParts[j];
                matchedParts ++;
            }
        }
        
        if (matchedParts === urlParts.length) {
            matchingRoute = {
                query: query,
                hash: hash,
                params: params,
                url: url,
                path: path,
                route: route
            };
        }
    }

    return matchingRoute;
}

const parseRoute = (str: string) => {
    let parts = [];

    str.split('/').forEach(function (part) {
        if (part !== '') {
            if (part.indexOf(':') === 0) {
                parts.push({name: part.replace(':', '')});
            }
            else parts.push(part);
        }
    });

    return parts;
}