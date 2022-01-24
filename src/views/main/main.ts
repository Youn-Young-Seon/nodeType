import { template } from "./main-template";
import { STOCK_URL } from "../../config";
import { MainApi } from "../../core/api";

export default class Main{
    private _template = template;
    private container: string;
    
    constructor(container: string){
        this.container = container;
        
        const stock = new MainApi(STOCK_URL);
        stock.getStock();
    }    

    get template(){
        return this._template;
    }
}