import { template } from "./navBar-template";

export default class NavBar{
    private _template = template;
    private container: string;

    constructor(container: string){
        this.container = container;
    }

    get template(){
        return this._template;
    }
}