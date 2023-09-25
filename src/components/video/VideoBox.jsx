import { useState, useRef } from "react"
import styles from "./video.module.css"
import GotoBtn from "../gotoBtn/GotoBtn"


import {
    BsPlayFill,
    BsPause,
    BsFillVolumeMuteFill
} from "react-icons/bs"
import { GoUnmute } from "react-icons/go"

const VideoBox = () => {

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
                src="https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/c7ce6494-d0d2-4b70-a41a-164e4711946b/2ae36649-bc35-4580-8cbf-46e2b3040a56/main.mp4?fastly_token=NjUxMTg4MjJfNDIzZjEyZDFiMGNmZTNkNTI3MzJmYjE0OWE2M2E4NWRlNTE0ZGRlNjFhOTg4NWUxNjhmOTk2YjgyYmE2OTEwNl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS9jN2NlNjQ5NC1kMGQyLTRiNzAtYTQxYS0xNjRlNDcxMTk0NmIvMmFlMzY2NDktYmMzNS00NTgwLThjYmYtNDZlMmIzMDQwYTU2L21haW4ubXA0"
                poster="https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/2924921183001/c7ce6494-d0d2-4b70-a41a-164e4711946b/main/1280x720/2s538ms/match/image.jpg"
                aria-label="A video showcasing items from the Gucci Spring Summer 2024 collection."
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
            <div className={styles.gotoBtnContainer}>
                <GotoBtn />
            </div>


        </div>
    )
}

export default VideoBox