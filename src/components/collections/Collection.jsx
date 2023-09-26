import styles from "./collection.module.css"
import GotoBtn from "../../components/gotoBtn/GotoBtn"

const Collection = () => {

    const data = [
        {
            tag: "women",
            img: "https://media.gucci.com/dynamic/b3c8/qVLZh76V9UYr8fYV089o0HCXb7HPRpSC57Mi00TLaAXq00mmV22ving4ho6wjWC39nQx9rDB5brzysBQp1P8z+qu6ahwhxgkjSQHpVDOl0yz6jmKSOpx5JeMigdLHDeGnAfolHLYRQGcC3fAjfqLlJD+3jWhGWTcCvQI8vtup5QPsoEiy7oNT0K9s3vPpU+pVIC7TdzA7dhDU1eb7SOraUFkTlQaGIg1hIblFI8dER9rqJk7VH8rIeL2+ln_SXGIPyRB8mHdjTVW+wEJUYJw4A==/Portrait-HP-FallWinter-Grey-Chain-Sep23.png",
            title: "Handbags",
            btnText: "Explore the collection"
        },
        {
            tag: "men",
            img: "https://media.gucci.com/dynamic/b3c8/5AUMPlQOgkXV3qvdWyYSpllKRzd2vMQIZudObmLP6glAEfcSe2tVzViqW3LkXKsQ36Up_qdmF2QvX8bwPc5P41qEUTZY92qSsMAivrXNWwbrNrzggT+98UcpZWz6HIPzvwGTa_7xetrcd6q_iVNj0PKiVX8au_EKk3O9jCVZ2pktlzQV5ioGYMBIkX5OnTbMbVABOZiodf8Zz3tcIwcF_SYzsXzM1qdbVGw0hKXqPIIaz8xcRg7DxfVFooPs7UcbocYSLMIXOXdLt79Jff736YMwTnXXl6LrynqxdQD_v3P3f7s_gPsbRmUzv3kKgEZzV_sZSChPQKBeLUKm6dvX2g==/Portrait-Gucci-FallWinter23-Collection-July23-AsianTalent-005-modified.png",
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
                            <h1 className={styles.title}>{item.title}</h1>
                            <button className={styles.btn}>{item.btnText}</button>
                        </div>
                    </div>
            ))}

        </div>
    )
}

export default Collection