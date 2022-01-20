import { TopBar, NavBar, Main } from './views/index';
import { STOCK_URL } from './core/api';
import './app.module.css';


export class App{
    private container: string;
    private components: any[];

    constructor(container: string){
        // this.container = document.querySelector(container) as HTMLElement;
        this.container = container;
        this.components = [];

        this.initialize();
    }

    initialize = () => {
        const topBar = new TopBar(this.container);
        const navBar = new NavBar(this.container);
        const main = new Main(this.container, STOCK_URL);
        main.getRequestXHR();

        this.components.push(topBar.template);    
        this.components.push(navBar.template);        
        this.components.push(main.template);

        const page = document.querySelector(this.container) as HTMLElement;
        page.innerHTML = this.components.join('');
    }

    render = () => {
        
    };
}
