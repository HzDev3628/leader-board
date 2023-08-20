import styles from './assets/App.module.scss'
import Header from './components/header/Header'
import Basic from './components/Basic inform/Basic'

import img_bg from "../public/background_moon.png"

function App() {
  return (
    <div className={styles.global}>

      <img className={styles.img} src={img_bg} alt="" />

      <div className={styles.global_info_page}>
        <Header/>
        <Basic/>
      </div>
      
    </div>
  )
}

export default App
