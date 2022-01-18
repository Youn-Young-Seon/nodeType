import { template } from "./topBar-template";

export default class TopBar {
    private _template = template;
    private container: string;

    constructor(container: string){
        this.container = container;
    }

    get template(){
        return this._template;
    }
}