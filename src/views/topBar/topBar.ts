import { View } from "../../core/view";
import { template } from "./topBar-template";
import styles from './topBar.module.css';

export default class TopBar extends View {

    private topBarEl: HTMLElement

    constructor(container: string){
        super(container);

        this.topBarEl = this.container.querySelector('.topBar');
        this.topBarEl.classList.add(styles.topBar);
        this.topBarEl.innerHTML = template;
    }

    render = (): void => {
        
    }
}