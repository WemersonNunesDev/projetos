import styles from '../index.module.css';
import Box from '../components/Box';

function Main() {
    return (
        <main className={styles.container_main}>
            <Box 
                className={styles.me_box}
                title='Olá!'
                text1='Me chamo Wemerson e sou um programador FullStack'
                text2='JS  React Node.js'
            />

            <section className={styles.projetos_sec}>
                <Box
                    className={styles.proj_box}
                    title='Projetos.'
                />
            </section>
        </main>
    )
}

export default Main;