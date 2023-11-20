import styles from './Zayavka.module.css'
import BackgroundZayavka from './img/BCzayavka.png'
import BtnImg from '../btn/img/BtnImg.png'

export default function Zayavka() {
  return (
    <div
      className={styles.main_zayavka_container}
      style={{ backgroundImage: `url(${BackgroundZayavka})` }}
    >
      <div className={styles.main_zayavka_form}>
        <h1>
          не определились с <i>выбором?</i>
        </h1>
        <h2>
          Оставьте свой номер и наш специалист поможет вам с подбором тура
        </h2>
        <form>
          <input
            className={styles.main_zayavka_form_input}
            placeholder="Имя"
          ></input>
          <input
            className={styles.main_zayavka_form_input}
            placeholder="Телефон"
          ></input>
        </form>
        <button className={styles.main_input_btn}>
          <h2 className={styles.main_input_btn_txt}>ОТПРАВИТЬ</h2>
          <img
            src={BtnImg}
            alt="BtnImg"
            className={styles.main_input_btn_img}
          />
        </button>
      </div>
    </div>
  )
}
