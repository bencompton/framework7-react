import * as React from 'react';

import {View as F7View} from '../Framework7';
import {View} from '../components/view/View';

export interface IFramework7Route {
    path: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any> | string;
}

export class Framework7Router {
    private routes: IFramework7Route[];
    private views: View[];

    constructor(routes: IFramework7Route[], views: View[]) {
        this.routes = routes;
        this.views = views;
    }

    public preroute(framework7View: F7View, params: any) {    
        var url = params.url,
            pageElement = params.pageElement;

        if (url && pageElement || !url || url === '#') {
            return true;
        }

        var matchingRoute = this.findMatchingRoute(url);
        
        if (!matchingRoute) {
            return true;
        } else {
            this.routeChanged(matchingRoute.route.component, framework7View);
            return false;
        }
    }

    private findMatchingRoute = (url) => {
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

        for (i = 0; i < this.routes.length; i++) {
            if (matchingRoute) continue;

            let route = this.routes[i];
            let parsedRoute = this.parseRoute(route.path);
            
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

    private parseRoute(str: string) {
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

    private routeChanged(currentRouteComponent: React.ComponentClass<any> | React.StatelessComponent<any>, framework7View: F7View) {
        this.views.forEach(view => {
            if (view.framework7View === framework7View) {
                view.changeRoute(currentRouteComponent);
            }
        });
    }   
}