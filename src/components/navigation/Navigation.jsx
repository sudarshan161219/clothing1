
import styles from "./navigation.module.css"
import logo from "../../assets/navLogo.svg"
import { useAppContext } from "../../context/Context"
import { AiOutlineClose } from "react-icons/ai"
import { GrFormNext } from "react-icons/gr"
const Navigation = () => {
    const { toggleMenu, toggleMenuFn } = useAppContext()

    const lists = [
        "gifts",
        "what's new",
        "handbags",
        "travel",
        "women",
        "men",
        "children",
        "jewellery&watches",
        "beauty",
        "decor&lifestyle",
        "vault"
    ]

    return (
        <div className={`${toggleMenu ? `${styles.show} ${styles.container}` : `${styles.container}`}`}>
            <nav className={styles.nav}>
                <img className={styles.logo} src={logo} alt="logo" />
                <div onClick={toggleMenuFn} className={styles.closeContainer} >
                    <AiOutlineClose className={styles.icons} />
                </div>
            </nav>


            <div className={styles.menu} >
                <h1 className={styles.title}>gucci ancora</h1>

                <ul className={styles.ulList}>
                    {lists.map((list) => (
                        <li key={list} className={styles.list}>{list} <GrFormNext /></li>
                    ))}
                </ul>
            </div>

            <div className={styles.links}>
                <span className={styles.link}>saved items</span>
                <span className={styles.link}>contact us</span>
            </div>

        </div>
    )
}

export default Navigation
