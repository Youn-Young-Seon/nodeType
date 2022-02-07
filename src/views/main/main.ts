import { template } from "./main-template";
import { View } from "../../core/view";
import styles from './main.module.css';

export default class Main extends View {    
    protected mainEl: HTMLElement;
    
    constructor(container: string){
        super(container);
        this.mainEl = this.container.querySelector('.main');

        this.mainEl.classList.add(styles.main);
        this.render();
    }    

    render = (): void => {
        this.mainEl.innerHTML = template;
    }
}