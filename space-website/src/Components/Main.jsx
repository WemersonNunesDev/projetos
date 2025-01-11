import Card from './Card';
import Nav from './Navbar';
import styles from '../index.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <Nav
                option1="00 HOME"
                option2="01 DESTINATION"
                option3="02 CREW"
                option4="03 TECHNOLOGY"
            />

            <Card 
                title="SO, YOU WANT TO TRAVEL TO"
                title_primary = "SPACE"
                description = "Let's face it; if you want to go to space, you might as well genuinely go to outr space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"
            />
        </div>
    )
}

export default Main;