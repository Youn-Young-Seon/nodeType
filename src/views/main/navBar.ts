import { View } from "../../core/view";
import { template } from "./navBar-template";
import styles from './navBar.module.css';

export default class NavBar extends View{

    private navBarEl: HTMLElement

    constructor(container: string){
        super(container);

        this.navBarEl = this.container.querySelector('.navBar');
        this.navBarEl.classList.add(styles.navBar);
        this.navBarEl.innerHTML = template;

        this.clickMenu();        
    }
    
    clickMenu = () => {
        const menuList = this.navBarEl.querySelectorAll(`.${styles.list}`);        
        menuList.forEach(menu => {
            menu.addEventListener('click', () => {
                this.resetMenu(menuList);
                menu.classList.add(`${styles.active}`);
            })
        })        
    }

    resetMenu = (menus: NodeListOf<Element>) => {        
        menus.forEach(menu => {
            menu.classList.remove(`${styles.active}`);            
        })
    }

    render = (): void => {

    }    
}