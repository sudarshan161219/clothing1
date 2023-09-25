import styles from "./main.module.css"
import { Video, Slider } from "../components/export"

const Main = () => {
  return (
    <div className={styles.container}>
      < Video />
      <Slider />
    </div>
  )
}

export default Main