import styles from './navBar.module.css';

export const template = `
    <div class="${styles.container}">
        <p>DashBoard</p>
        <div class="${styles.list}" onclick="location.href='#/api/dashBoard'">
            <div><i class="fa-solid fa-chart-line"></i></div>
            <div>DashBoard</div>
        </div>
        <hr>
        <p>Store</p>
        <div class="${styles.list}" onclick="location.href='#/api/store'">
            <div><i class="fa-solid fa-chart-line"></i></div>
            <div>Store</div>
        </div>
        <hr>
    </div>
`;