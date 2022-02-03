import { template } from "./main-template";
import { STOCK_URL } from "../../config";
import { MainApi } from "../../core/api";
import { MainApiItemDetialType } from "../../types";
import { View } from "../../core/view";

export default class Main extends View {
    private data: MainApiItemDetialType[];
    
    constructor(container: string){
        super(container);
        this.container.querySelector('.main').innerHTML = template;
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
            this.addHtml(`${crno}, ${isinCd}, ${isinCdNm}, ${stckDvdnRcd}, ${stckDvdnRcdNm}, ${stckGenrCashDvdnRt}, ${stckIssuCmpyNm}, ${stckParPrc}, ${stckStacMd}`);            
        }        
        document.querySelector('.main').innerHTML = this.getHtml();
    }    
}