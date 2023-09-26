import { useState, useRef } from "react"
import styles from "./video.module.css"


import {
    BsPlayFill,
    BsPause,
    BsFillVolumeMuteFill
} from "react-icons/bs"
import { GoUnmute } from "react-icons/go"

// eslint-disable-next-line react/prop-types
const VideoBox = ({ video,  poster, ariaLabel }) => {

    const [pause, setPause] = useState(false)
    const [unMute, setUnMute] = useState(true)
    const myRef = useRef(null);

    const handlePlay = () => {
        setPause(!pause)
        if (pause) {
            myRef.current.play()
        } else {
            myRef.current.pause()
        }
    }

    const handleSound = () => {
        setUnMute(!unMute)
    }

    return (
        <div className={styles.container}>
            <video
                ref={myRef}
                data-testid="FhVideo"
                width="100%"
                loop
                autoPlay
                muted={unMute}
                src={video}
                poster={poster}
                aria-label={ariaLabel }
                className={styles.video}
            >
                <track kind="captions" />

            </video>
            <div className={styles.controlls}>
                <div onClick={handlePlay} className={styles.palyContainer}>
                    {pause ?
                        <BsPlayFill className={styles.icon} />
                        :
                        <BsPause className={styles.icon} />
                    }
                </div>
                <div onClick={handleSound} className={styles.muteContainer}>
                    {unMute ? <BsFillVolumeMuteFill className={styles.icon} /> :
                        <GoUnmute className={styles.icon} />
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoBox