import styles from '../index.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{props.title}</h2>
            <h1 className={styles.title_primary}>{props.title_primary}</h1>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}

export default Card;