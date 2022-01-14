import { pack } from "./param";

const app = document.querySelector('#app');
const button = `<Button class="bg-indigo-500">api</Button>`;
app.innerHTML = button;


pack();

