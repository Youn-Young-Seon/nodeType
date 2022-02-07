import styles from './topBar.module.css';

export const template =`
    <div class="${styles.container}">
        <h2 onclick="location.href='/#'"><i class="fas fa-home">&nbsp;</i>Stock</h2>
        <div onclick="location.href='/#/login'"><i class="fa-solid fa-right-to-bracket"></i> Login</div>
    </div>    
`;