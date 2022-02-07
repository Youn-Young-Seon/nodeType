import { TopBar, NavBar, Main } from './views/index';
import './app.module.css';
import { template } from './app.template';
import { Router } from './core/routes';
import { Login } from './views/login/login';
import { DashBoard } from './views/dashboard/dashBoard';


export class App{
    private container: string;    
    private _template: string;

    constructor(container: string){
        this.container = container;        
        this._template = template;

        this.initialize();

        const topBar = new TopBar(this.container);
        const navBar = new NavBar(this.container);
        const main = new Main(this.container);
        const dashBoard = new DashBoard(this.container);
        const login = new Login(this.container);

        const router = new Router();
        router.setDefaultRoute(main);

        router.addRouteInfo('/menu', navBar, /menu\/(\d+)/);        
        router.addRouteInfo('/dashBoard', dashBoard, /dashBoard\/(\d+)/)
        router.addRouteInfo('/login', login, /login\/(\d+)/)
    }

    initialize = () => {
        const page = document.querySelector(this.container) as HTMLElement;
        page.innerHTML = this._template;
    }    
}
