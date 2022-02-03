import { View } from "../../core/view";
import { template } from "./topBar-template";

export default class TopBar extends View {

    constructor(container: string){
        super(container);        
        this.container.querySelector('.topBar').innerHTML = template;
    }

    render = (): void => {
        
    }
}