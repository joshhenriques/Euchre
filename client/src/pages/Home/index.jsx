import styles from "./styles.module.css";
import Button from "../../components/Button"
import titleImage from "../../images/euchre.png"

const Home = () => {
    return(
        <>
        
        <div className= {styles.img_container}>
            <img
                src={titleImage } alt="titleImage" className={styles.titleImage}
            />
        </div>
        <div className={styles.btn_row}>
            <div className= {styles.btn_container}>
                <Button name="Play as Guest" type = "guest"/>
            </div>
            <div className= {styles.btn_container}>
                <Button name="Login" type = "login"/>
            </div>
            <div className= {styles.btn_container}>
                <Button name="Register" type = "register"/>
            </div>
        </div>
        
        </>
    )
};

export default Home;