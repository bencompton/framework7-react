import * as React from 'react';

export interface IFramework7Route {
    path: string;
    component: React.ComponentClass<any> | React.StatelessComponent<any> | string;
}

export const getPrerouteHandler = (routes: IFramework7Route[]) => {
    return (view, params) => {
        return preroute(view, params, routes);
    };
};

const preroute = (view, params, routes) => {
    function preroute(view, params, routes) {
      var url = params.url;
      var pageElement = params.pageElement;

      if (url && pageElement || !url || url === '#') {
        return true;
      }

      var matchingRoute = findMatchingRoute(url, routes);
      if (!matchingRoute) return true;
      var pagesVue = view.pagesContainer.__vue__;
      if (!pagesVue) return true;

      var id = new Date().getTime();
      
    //   Vue.set(pagesVue.pages, id, {component: matchingRoute.route.component});
      
    //   view.container.__vue__.$route = {
    //     route: matchingRoute.route.path,
    //     query: matchingRoute.query,
    //     hash: matchingRoute.hash,
    //     params: matchingRoute.params,
    //     url: matchingRoute.url,
    //     path: matchingRoute.path
    //   };

    //   Vue.nextTick(function () {
    //       var newPage = view.pagesContainer.querySelector('.page:last-child');
    //       pagesVue.pages[id].pageElement = newPage;
    //       params.pageElement = newPage;
          
    //       if (params.isBack) {
    //         view.router.back(params);
    //       }
    //       else {
    //         view.router.load(params);
    //       }
    //   });

      return false;
    }
};

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