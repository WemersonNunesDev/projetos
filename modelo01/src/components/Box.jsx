import styles from '../index.module.css';

function Box(props) {
    return (
        <div className={props.className}>
            <article className={styles.about}>
                <section className={styles.info_box}>
                    <h1 className={styles.title}>{props.title}</h1>
                    <p className={styles.text1}>{props.text1}</p>
                    <p className={styles.text2}>{props.text2}</p>
                    <p className={styles.text3}>{props.text3}</p>
                </section>
                <div className={styles.card_box}></div>
            </article>
        </div>
    )
}

export default Box;