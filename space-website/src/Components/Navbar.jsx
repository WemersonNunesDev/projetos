import styles from '../index.module.css';

function Nav(props) {
    return (
        <div className={styles.menu}>
            <div className={styles.container_circle}>
                CIRCU
            </div>
            <div className={styles.container_menu}>
                <nav className={styles.navbar}>
                    <a className={styles.a_pag} href="/">{props.option1}</a>
                    <a className={styles.a_pag} href="/">{props.option2}</a>
                    <a className={styles.a_pag} href="/">{props.option3}</a>
                    <a className={styles.a_pag} href="/">{props.option4}</a>
                </nav>
            </div>
        </div>
    )
}

export default Nav;