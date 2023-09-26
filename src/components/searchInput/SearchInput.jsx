import styles from "./searchInput.module.css"
const SearchInput = () => {


    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <input className={styles.input} type="text" required />
                <span className={styles.bar}></span>
                <label className={styles.label}>search</label>
            </div>
        </div>
    )
}

export default SearchInput