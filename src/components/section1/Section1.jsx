import VideoBox from "../video/VideoBox"
import GotoBtn from "../gotoBtn/GotoBtn"
import v1 from "../../assets/v1.mp4"
import styles from "./section.module.css"

const Section1 = () => {
    let src = v1
    const srcP = "https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/2924921183001/c7ce6494-d0d2-4b70-a41a-164e4711946b/main/1280x720/2s538ms/match/image.jpg"
    const label = "A video showcasing items from the Gucci Spring Summer 2024 collection."

    return (
        <div className={styles.container}>
            <VideoBox video={src} poster={srcP} ariaLabel={label} />
            <div className={styles.gotoBtnContainer}>
                <GotoBtn />
            </div>
        </div>
    )
}

export default Section1