import { MainApiType } from "../types";

export class Api {
    private xhr: XMLHttpRequest;
    private url: string;

    constructor(url: string){
        this.url = url;
        this.xhr = new XMLHttpRequest();
    }

    getRequestXHR = <T>(cb: (data: T) => void) => {
        this.xhr.open('GET', this.url);
        this.xhr.addEventListener('load', () => {
            cb(JSON.parse(this.xhr.response));
        })
        this.xhr.send();
    }
    
    getRequestPromise = () => {
        fetch(this.url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) =>{
            console.log(error);
        })

    }
}

export class MainApi extends Api{    

    constructor(url: string){
        super(url);
    }

    getStock = (cb: (data: MainApiType) => void) => {
        return this.getRequestXHR(cb);
    }

}