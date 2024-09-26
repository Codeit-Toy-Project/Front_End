import styles from "./Nav.module.css";
import icon from "../assets/logo/logo.png";

function Nav() {
    return (
        <div className={styles.nav}>
            <img src={icon} className={styles.logo} />
        </div>
    );
}

export default Nav;
