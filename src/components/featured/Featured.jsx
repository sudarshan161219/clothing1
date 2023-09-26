import styles from "./featured.module.css"
import VideoBox from "../video/VideoBox"

const Featured = () => {
    let src = "https://house-fastly-signed-eug-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/1cc8ec49-2420-4ecd-9b0f-a484a6843f73/3cd645d8-f5b6-4a19-972c-20bd50a0b852/main.mp4?fastly_token=NjUxMjdiZmFfNzhiNzM1ZmUzMWE5ZTc2YjJkNDZiMmZhYTQ2YzU4ZDE0NGFmYTQ0MjA0NDQxNTU2OWJjYjdlYjk1YjU0NDdhNl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS8xY2M4ZWM0OS0yNDIwLTRlY2QtOWIwZi1hNDg0YTY4NDNmNzMvM2NkNjQ1ZDgtZjViNi00YTE5LTk3MmMtMjBiZDUwYTBiODUyL21haW4ubXA0"
    const srcP = "https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/2924921183001/1cc8ec49-2420-4ecd-9b0f-a484a6843f73/main/1280x720/2s538ms/match/image.jpg"
    const label = "A video showcasing items from the Gucci Fall Winter 2023 collection."
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Featured</h1>

            <div className={styles.video_textContainer}>
                <VideoBox video={src} poster={srcP} ariaLabel={label} />

                <div className={styles.textContainer} >
                    <h1 className={styles.title}>FALL WINTER 2023</h1>
                    <p className={styles.desc}>The new campaign with Vittoria Ceretti, Aboubakar Konte, and Brando Erba.</p>

                    <span className={styles.link}>DISCOVER MORE</span>
                </div>
            </div>

        </div>
    )
}

export default Featured