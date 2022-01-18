import { template } from "./main-template";

export default class Main{
    private _template = template;
    private container: string;    
    
    constructor(container: string){
        this.container = container;
    }

    get template(){
        return this._template;
    }
}