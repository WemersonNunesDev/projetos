import Card from './Card';
import styles from '../index.module.css';

function Main() {
    return (
        <div className={styles.main}>
            
            <div className={styles.primary_div}>
                <Card
                    title="SO, YOU WANT TO TRAVEL TO"
                    title_primary = "SPACE"
                    description = "Let's face it; if you want to go to space, you might as well genuinely go to outr space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"
                />

                <div className={styles.explore_container}>
                    <span className={styles.explore_text}>EXPLORE</span>
                </div>
            </div>
        </div>
    )
}

export default Main;