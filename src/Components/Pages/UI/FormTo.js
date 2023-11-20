import styles from './FormTo.module.css'
import countryData from '../Country/countryData'
import { useState } from 'react'

import BtnImg from '../btn/img/BtnImg.png'

function FormTo({ setValue }) {
  const [chekRadio, setCheckRadio] = useState('')
  return (
    <div className={styles.formTo_main}>
      <div className={styles.container_formTo}>
        <div className={styles.formTo_content}>
          {countryData.map((el, id) => {
            return (
              <form>
                <label key={id}>
                  <input
                    type="radio"
                    checked={el.nameCountry === chekRadio ? true : false}
                    onClick={() => {
                      setCheckRadio(el.nameCountry)
                      setValue(el.nameCountry)
                    }}
                  />
                  {el.nameCountry}
                </label>
              </form>
            )
          })}
        </div>
      </div>
      <button
        className={styles.card_container_right_bottom_link}
        onClick={() => {
          setCheckRadio('')
          setValue('')
        }}
      >
        <h2 className={styles.main_input_btn_txt}>Очистить</h2>
        <img src={BtnImg} alt="BtnImg" className={styles.main_input_btn_img} />
      </button>
    </div>
  )
}

export default FormTo
