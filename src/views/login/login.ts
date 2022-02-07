import { Main } from "..";
import { template } from "./login-template";
import styles from './login.module.css';

export class Login extends Main{
    private loginEl: HTMLElement;

    constructor(container: string) {
        super(container);
        
        this.loginEl = this.container.querySelector(`${styles.login}`);
    }
    
    render = (): void => {        
        this.mainEl.innerHTML = template;
    }
}