import styles from "./main.module.css"
import { Section1, Slider, Collection, Featured, Navigation } from "../components/export"

const Main = () => {
  return (
    <div className={styles.container}>
      < Section1 />
      <Slider />
      <Collection />
      < Featured />
      < Navigation />
    </div>
  )
}

export default Main