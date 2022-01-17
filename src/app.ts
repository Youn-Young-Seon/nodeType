import { pack, paramBox } from "./param";
import styles from'./app.module.css';


const app = document.querySelector('#app');
const button = `<Button class="bg-indigo-500">api</Button>`;
const box = `<div class="${styles.box}">appBox</div>`;
app.innerHTML = button;

const app1 = box;
const app2 = paramBox;

app.innerHTML = app1;
app.innerHTML = app2;

pack();

