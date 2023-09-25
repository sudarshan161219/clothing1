import styles from "./slider.module.css"
import Carousel from "../carousel/Carousel";


const Slider = () => {
    let images = [
        "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1685057444/764255_AACU1_1000_001_074_0000_Light.jpg",
        "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1683738049/764339_FACM2_8747_001_060_0000_Light.jpg",
        "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1683306028/764339_AACU1_1275_001_060_0000_Light.jpg",
        "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1683588638/764255_AACU1_6404_001_074_0000_Light.jpg"
    ]

    // const images = [
    //     "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    //     "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    //     "https://images.unsplash.com/photo-1505892458649-41be8480bb4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    //     "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    // ]

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>explore fall winter 2023</h1>
            <Carousel >
                {images.map((img) => <img className={styles.img} src={img} alt={img} key={img} />)}
            </Carousel>

        </div>
    )
}

export default Slider