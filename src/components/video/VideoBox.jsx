
import styles from "./video.module.css"
import video from "../../assets/pexels-cottonbro-7972153 (2160p).mp4"
import ReactPlayer from 'react-player'
const VideoBox = () => {
    return (
        <div className={styles.container}>
            <ReactPlayer
                className='react-player fixed-bottom'
                url={video}
                width='100%'
                height='100%'
                controls={true}
                playing={true}
                loop={true}
            />
        </div>
    )
}

export default VideoBox