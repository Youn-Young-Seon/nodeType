import styles from './topBar.module.css';

export const template =`
    <div class="${styles.topBar}">
        <div class="${styles.topBar__container}">
            <h2><i class="fas fa-home">&nbsp;</i>Stock</h2>
            <div><i class="fa-solid fa-right-to-bracket"></i> Login</div>
        </div>
    </div>
`;