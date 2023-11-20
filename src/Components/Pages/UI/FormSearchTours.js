import styles from './FormSearchTours.module.css'
import BtnImg from '../btn/img/BtnImg.png'
import { Link } from 'react-router-dom'
import datas from '../HotTours/data/HotTours'

function FormSearchTours({
  setValue,
  value,
  setFormEnabled,
  formEnabled,
  day,
  setDay,
  setPerson,
  person,
  data,
  setData,
  duration,
  setDuration,
  closeSort,
  clseFilters,
}) {
  // Действия при сабмите формы. // Отменяем действия браузера по умолчанию после сабмита формы
  const onSubmitHandlerForm = (event) => {
    event.preventDefault()
    setPerson('')
    setDay('')
  }

  return (
    <form className={styles.main_i} onSubmit={onSubmitHandlerForm}>
      <input
        className={styles.main_input}
        placeholder="Откуда"
        onClick={() => {
          setData(datas)
          setFormEnabled(false)
          clseFilters()
          closeSort()
        }}
      ></input>
      <input
        className={styles.main_input}
        placeholder="Куда"
        value={value}
        // onChange={(event) => setValue(event.target.value)}
        onClick={() => {
          setFormEnabled(!formEnabled)
          setData(datas)
          clseFilters()
          closeSort()
        }}
      ></input>
      <input
        type="date"
        className={styles.main_input}
        placeholder="Вылет"
        onChange={(event) => setDay(event.target.value)}
        value={day}
        onClick={() => {
          setFormEnabled(false)
          setData(datas)
          clseFilters()
          closeSort()
        }}
      ></input>
      <input
        className={styles.main_input_low}
        placeholder="На сколько"
        onClick={() => {
          setData(datas)
          setFormEnabled(false)
          clseFilters()
          closeSort()
        }}
        onChange={(event) => setDuration(event.target.value)}
        value={duration}
      ></input>
      <input
        onClick={() => {
          setFormEnabled(false)
          clseFilters()
          closeSort()
        }}
        className={styles.main_input_low}
        placeholder="Туристы"
        onChange={(event) => {
          setPerson(event.target.value)
        }}
        value={person}
      ></input>
      <Link to="../search_tours" className={styles.main_input_btn}>
        <h2
          className={styles.main_input_btn_txt}
          onClick={() => {
            setFormEnabled(!formEnabled)
            setData(
              data
                .filter((el) => el.daysStart >= day.replace(/-/g, '.'))
                .filter((el) => (value ? el.name === value : !!el.name))
                .filter((el) =>
                  duration ? el.day >= duration.toString() : !!el.day
                )
            )
            setFormEnabled(false)
            clseFilters()
            closeSort()
          }}
        >
          Подобрать
        </h2>
        <img src={BtnImg} alt="BtnImg" className={styles.main_input_btn_img} />
      </Link>
    </form>
  )
}

export default FormSearchTours
