import styles from './navBar.module.css';

export const template = `
<div class="${styles.content}">
    <div class="${styles.navBar}">
        <div class="${styles.container}">
            <p>DashBoard</p>
            <div class="${styles.list}">
                <div><i class="fa-solid fa-chart-line"></i></div>
                <div>DashBoard</div>
                </div>                
            <hr>
            <p>Buy</p>
            <div class="${styles.list}">
                <div><i class="fa-solid fa-chart-line"></i></div>
                <div>DashBoard</div>
            </div>
            <hr>
            <p>Buy</p>
            <div class="${styles.list}">
                <div><i class="fa-solid fa-chart-line"></i></div>
                <div>DashBoard</div>
            </div>
        </div>
    </div>
`;