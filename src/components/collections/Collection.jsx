import styles from "./collection.module.css"


const Collection = () => {

    const data = [
        {
            tag: "women",
            img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80",
            title: "Handbags",
            btnText: "Explore the collection"
        },
        {
            tag: "men",
            img: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            title: "Clothing",
            btnText: "Explore the collection"
        }
    ]

    return (
        <div className={styles.container}>

            {data.map((item) => (
                <div key={item.tag} className={styles.imgContainer} >
                    <div className={styles.tag}>
                        <p className={styles.desc}>{item.tag}</p>
                    </div>
                    <img className={styles.img} src={item.img} alt="img" />
                        <div className={styles.actionBtn}>
                            <strong className={styles.title}>{item.title}</strong>
                            <button className={styles.btn}>{item.btnText}</button>
                        </div>
                    </div>
            ))}

        </div>
    )
}

export default Collection