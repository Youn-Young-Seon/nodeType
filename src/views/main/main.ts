import { template } from "./main-template";
import { STOCK_URL } from "../../config";
import { MainApi } from "../../core/api";
import { MainApiItemDetialType } from "../../types";
import styles from './main.module.css';
import { View } from "../../core/view";

export default class Main extends View {
    private _template = template;  
    private data: MainApiItemDetialType[];
    
    constructor(container: string){
        super(container);
        this.data = [];        

        // this.container.innerHTML = template;
        
        const stock = new MainApi(STOCK_URL);
        stock.getStock((response) => {  
            response.items.item.map((item) => {
                this.data.push(item);
            })
            this.render();
        });
    }

    get template(){
        return this._template;
    }

    render = () => {
        for(let i=0; i<this.data.length; i++){
            const {crno, isinCd, isinCdNm, stckDvdnRcd, stckDvdnRcdNm, stckGenrCashDvdnRt, stckIssuCmpyNm, stckParPrc, stckStacMd} = this.data[i];
            this.addHtml(`${crno}, ${isinCd}, ${isinCdNm}, ${stckDvdnRcd}, ${stckDvdnRcdNm}, ${stckGenrCashDvdnRt}, ${stckIssuCmpyNm}, ${stckParPrc}, ${stckStacMd}`);            
        }        
        document.querySelector(`.${styles.main}`).innerHTML = this.getHtml();
    }    
}