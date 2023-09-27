import styles from "./footer.module.css"
import logo from "../../assets/logoVF.svg"
const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.flex}>
                <div className={styles.felx1} >
                    <h1 className={styles.title}>Store Location</h1>
                    <div className={styles.group}>
                        <input className={styles.input} type="text" required />
                        <span className={styles.bar}></span>
                        <label className={styles.label}>Country/Region, City</label>
                    </div>
                </div>

                <div className={styles.felx1} >
                    <h1 className={styles.title}>SIGN UP FOR VELOCITY UPDATES</h1>
                    <p className={styles.desc}>By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our Privacy Policy</p>
                    <div className={styles.group}>
                        <input className={styles.input} type="email" required />
                        <span className={styles.bar}></span>
                        <label className={styles.label}>Email</label>
                    </div>
                </div>
            </div>


            <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Footer