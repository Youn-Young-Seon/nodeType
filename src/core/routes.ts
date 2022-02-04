import { View } from "./view";
import { RouteInfo } from "../types";

export class Router{

    private routeTable: RouteInfo[];

    constructor(){
        window.addEventListener('hashchange', (this.route));

        this.routeTable = [];
    }    

    addRouteInfo = (path: string, page: View, params: RegExp | null = null) => {
        this.routeTable.push({path, page, params});        
    }

    private route = () => {
        const route = location.hash;
    }
}