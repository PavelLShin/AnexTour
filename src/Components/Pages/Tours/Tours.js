import { Link } from 'react-router-dom'

import styles from './Tours.module.css'
import Wall from './img/Wall.png'
import BtnImg from '../btn/img/BtnImg.png'

import BCphoto from './img/BCphoto.png'
import Slider from './Slider'
import SliderOtzyvy from './SliderOtzyvy'
import SliderHotTours from './SliderHotTours'
import About from './About'
import Zayavka from './Zayavka'
import FormSearchTours from '../UI/FormSearchTours'
import FormTo from '../UI/FormTo'

function Tours({
  person,
  setPerson,
  setDay,
  day,
  value,
  setValue,
  formEnabled,
  setFormEnabled,
  data,
  setData,
  duration,
  setDuration,
  closeSort,
  clseFilters,
}) {
  return (
    <div className={styles.main_container}>
      <main
        style={{ backgroundImage: `url(${Wall})` }}
        className={styles.main_tours}
      >
        <h1 className={styles.main_txt1}>путешествия мечты</h1>
        <div className={styles.main_form}>
          <FormSearchTours
            setValue={setValue}
            value={value}
            setFormEnabled={setFormEnabled}
            formEnabled={formEnabled}
            day={day}
            setDay={setDay}
            person={person}
            setPerson={setPerson}
            data={data}
            setData={setData}
            duration={duration}
            setDuration={setDuration}
            closeSort={closeSort}
            clseFilters={clseFilters}
          />
        </div>
      </main>
      {formEnabled ? <FormTo setValue={setValue} /> : false}
      <SliderHotTours />
      <section className={styles.main_popular_hotels}>
        <Link to="../Hotels" className={styles.main_popular_hotels_txt}>
          популярные отели
        </Link>
        <h2 className={styles.main_popular_hotels_txt2}>
          уют и роскошь в лучших отелях мира
        </h2>
        <Slider />
      </section>
      <div
        className={styles.main_form_feedback}
        style={{ backgroundImage: `url(${BCphoto})` }}
      >
        <section className={styles.main_form_feedback_container}>
          <div className={styles.main_form_feedback_content}>
            <h1 className={styles.main_form_feedback_txt1}>
              Не определились <br></br> с выбором?
            </h1>
            <div className={styles.main_form_feedback_txt2}>
              <h2>
                Оставьте свой номер <br></br> и наш специалист поможет
                <br></br> вам с подбором тура
              </h2>
            </div>
            <form className={styles.main_feedback_form}>
              <input placeholder="Имя"></input>
              <input placeholder="Телефон" type="telephone"></input>
            </form>
            <button className={styles.main_input_btn}>
              <h2 className={styles.main_input_btn_txt}>Отправить</h2>
              <img
                src={BtnImg}
                alt="BtnImg"
                className={styles.main_input_btn_img}
              />
            </button>
          </div>
        </section>
      </div>
      <SliderOtzyvy />
      <About />
      <Zayavka />
    </div>
  )
}

export default Tours
