import { template } from "./main-template";
import { STOCK_URL } from "../../config";
import { MainApi } from "../../core/api";
import { MainApiItemDetialType } from "../../types";
import styles from './main.module.css';

export default class Main{
    private _template = template;
    private container: string;
    private data: MainApiItemDetialType[];
    
    constructor(container: string){
        this.container = container;
        this.data = [];
        
        const stock = new MainApi(STOCK_URL);
        stock.getStock((response) => {  
            response.items.item.map((item) => {
                this.data.push(item);
            })
            this.render();
        });
    }

    render = () => {
        for(let i=0; i<this.data.length; i++){
            const {crno, isinCd, isinCdNm, stckDvdnRcd, stckDvdnRcdNm, stckGenrCashDvdnRt, stckIssuCmpyNm, stckParPrc, stckStacMd} = this.data[i];
            console.log(crno, isinCd, isinCdNm, stckDvdnRcd, stckDvdnRcdNm, stckGenrCashDvdnRt, stckIssuCmpyNm, stckParPrc, stckStacMd);
            let template = `
                ${crno}, ${isinCd}, ${isinCdNm}, ${stckDvdnRcd}, ${stckDvdnRcdNm}, ${stckGenrCashDvdnRt}, ${stckIssuCmpyNm}, ${stckParPrc}, ${stckStacMd}
            `;
            document.querySelector(`.${styles.main}`).innerHTML = template;
        }
        
    }

    get template(){
        return this._template;
    }
}