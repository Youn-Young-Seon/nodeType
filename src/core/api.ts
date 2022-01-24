export class Api {
    private xhr: XMLHttpRequest;
    private url: string;

    constructor(url: string){
        this.url = url;
        this.xhr = new XMLHttpRequest();
    }

    getRequestXHR = () => {
        this.xhr.open('GET', this.url);
        this.xhr.addEventListener('load', () => {
            const data = JSON.parse(this.xhr.response);
            let dataString :string;
            const newData: any[] = []
            data.items.item.forEach((a:any, i:number) => {
                newData.push({...a});
            });
            console.log(newData);
            for(let i=0; i<newData.length; i++){
                dataString += newData[i].basDt;
            }
            const div = document.createElement('div');
            
            const div2 = document.querySelector('.main').appendChild(div);
            div2.innerHTML = dataString;
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

    getStock = () => {
        return this.getRequestXHR();
    }

}