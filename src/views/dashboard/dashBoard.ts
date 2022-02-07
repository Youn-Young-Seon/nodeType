import { Main } from "..";
import { STOCK_URL } from "../../config";
import { MainApi } from "../../core/api";
import { MainApiItemDetialType } from "../../types";
import { template } from "./dashBoard-template";
import styles from './dashBoard.module.css';

export class DashBoard extends Main{
    private data: MainApiItemDetialType[];
    private dashBoardEl: HTMLElement;

    constructor(container: string){
        super(container);
        this.data = [];
        
        const stock = new MainApi(STOCK_URL);
        stock.getStock((response) => {
            response.items.item.map((item) => {
                this.data.push(item);
            })            
        });
    }
    
    render = () => {        
        this.mainEl.innerHTML = template;
        this.dashBoardEl = this.mainEl.querySelector(`.${styles.container}`);
        for(let i=0; i<this.data.length; i++){
            const {crno, isinCd, isinCdNm, stckDvdnRcd, stckDvdnRcdNm, stckGenrCashDvdnRt, stckIssuCmpyNm, stckParPrc, stckStacMd} = this.data[i];
            this.addHtml(`${crno}, ${isinCd}, ${isinCdNm}, ${stckDvdnRcd}, ${stckDvdnRcdNm}, ${stckGenrCashDvdnRt}, ${stckIssuCmpyNm}, ${stckParPrc}, ${stckStacMd}`);            
        }
        this.dashBoardEl.innerHTML = this.getHtml();
    }
}