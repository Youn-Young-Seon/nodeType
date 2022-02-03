import { View } from "../../core/view";
import { template } from "./navBar-template";
import styles from './navBar.module.css';

export default class NavBar extends View{

    constructor(container: string){
        super(container);        
        this.container.querySelector('.navBar').innerHTML = template;
    }
    
    clickMenu = () => {
        const menuList: HTMLElement = this.container.querySelector(`.${styles.list}`);        
        menuList.addEventListener('click', function(){
            menuList.classList.add('active');
        });
    }

    render = (): void => {

    }    
}