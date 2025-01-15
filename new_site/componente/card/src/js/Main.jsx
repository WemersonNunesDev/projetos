import Card from "../component/Card";
import styles from '../index.module.css';

function Main() {
    return (
        <main className={styles.container}>
            <Card
                name='Luana Oliveira'
                age='24 anos'
            />
        </main>
    )
}

export default Main;