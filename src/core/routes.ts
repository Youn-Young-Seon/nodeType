import { View } from "./view";
import { RouteInfo } from "../types";

export class Router{

    private defaultRoute: RouteInfo;
    private routeTable: RouteInfo[];

    constructor(){
        window.addEventListener('hashchange', (this.route));

        this.routeTable = [];
    }

    setDefaultRoute = (page: View, params: RegExp | null = null) => {
        this.defaultRoute = {
            path: '',
            page: page,
            params: params
        }
    }

    addRouteInfo = (path: string, page: View, params: RegExp | null = null) => {
        this.routeTable.push({path, page, params});        
    }

    private route = () => {
        const routePath = location.hash;

        if(routePath === ''){
            this.defaultRoute.page.render();            
            return;
        }

        for(const routeInfo of this.routeTable){
            if(routePath.indexOf(routeInfo.path) >= 0){                
                // const pathParam = routePath.match(routeInfo.params);                
                
                routeInfo.page.render();
                return;
            }
        }
    }
}