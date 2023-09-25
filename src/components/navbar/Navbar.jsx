import { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import { AiOutlineMenu } from "react-icons/ai"
import { LuSearch } from "react-icons/lu"
import logo from "../../assets/guccilogo.svg"
const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);


    const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(position)
    }

    useEffect(() => {
        // if (toggleMobileMenu) {
        //   document.body.style.overflow = "hidden";
        // } else {
        //   document.body.style.overflow = "unset";
        // }
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                <div className={styles.iconContainer}>
                    <AiOutlineMenu className={styles.icon} />
                    < LuSearch className={styles.icon} />
                </div>
            </nav>

            <div className={
                `${scrollPosition > 20 ? `${styles.logoContainer2}` : `${styles.logoContainer}`}`
            } >
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default Navbar