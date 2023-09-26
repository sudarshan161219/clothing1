import { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import { AiOutlineMenu } from "react-icons/ai"
import { LuSearch } from "react-icons/lu"
import logo from "../../assets/guccilogo.svg"
import { useAppContext } from "../../context/Context"
const Navbar = () => {
    const { toggleMenu, toggleMenuFn } = useAppContext()
    const [scrollPosition, setScrollPosition] = useState(0);


    const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(position)
    }

    useEffect(() => {
        if (toggleMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [toggleMenu]);

    return (
        <header className={styles.header}>
            <nav className={styles.container}>
            <span className={styles.link}>contact us</span>
                {/* <img className={styles.logoD} src={logo} alt="logo" /> */}
                <div className={styles.iconContainer}>
                    < LuSearch className={styles.icon} />
                    <AiOutlineMenu onClick={toggleMenuFn} className={styles.icon} />
                </div>
            </nav>

            <div className={
                `${scrollPosition > 20 ? `${styles.logoContainer2}` : `${styles.logoContainer}`}`
            } >
                <img className={styles.logoM} src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default Navbar