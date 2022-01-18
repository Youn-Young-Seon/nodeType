import styles from './navBar.module.css';

export const template = `
<div class="${styles.content}">
    <div class="${styles.navBar}">
        <div class="${styles.navBar__container}">
            <p>DashBoard</p>
            <div class="${styles.navBar__List}">
                <div><i class="fa-solid fa-chart-line"></i></div>
                <div>DashBoard</div>
                </div>                
            <hr>
            <p>Buy</p>
            <div class="${styles.navBar__List}">
                <div><i class="fa-solid fa-chart-line"></i></div>
                <div>DashBoard</div>
            </div>
            <hr>
            <p>Buy</p>
            <div class="${styles.navBar__List}">
                <div><i class="fa-solid fa-chart-line"></i></div>
                <div>DashBoard</div>
            </div>
        </div>
    </div>
`;