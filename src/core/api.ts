import styles from './param.module.css';

export function pack(){
    fetch('/api/stock')
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

export const paramBox = `<div class="${styles.box}">paramBox</div>`;