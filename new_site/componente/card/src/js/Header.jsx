import styles from '../index.module.css';

function Header() {
    return (
        <header className={styles.menu}>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">More</a>
            </nav>
        </header>
    )
}

export default Header;