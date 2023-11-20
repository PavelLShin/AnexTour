import { useState } from 'react'
import styles from './Filters.module.css'
import close from './img/close.png'
import submit from './img/Submit.png'
// import data from '../HotTours/data/HotTours'

function Filters({
  toggleIsActive,
  setData,
  data,
  returnArr,
  priceOneAll,
  setPriceOneAll,
  person,
}) {
  // Действия при сабмите формы. // Отменяем действия браузера по умолчанию после сабмита формы
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }
  // чеккед удобств
  const [checkOne, setCheckOne] = useState('')
  const [checkTwo, setCheckTwo] = useState('')
  const [checkThree, setCheckThree] = useState('')
  const [checkFore, setCheckFore] = useState('')
  const arr = [checkFore, checkThree, checkTwo, checkOne]
  const arrNew = arr.filter((el) => !!el)

  console.log(priceOneAll)

  //   Закрываем окно и очищаем форму
  const cleanForm = () => {
    setData(returnArr)
    setCheckOne('')
    setCheckTwo('')
    setCheckThree('')
    setCheckFore('')
    setOption('')
    setForYou('')
    setEat('')
    setClas('')
    setStart('')
    setEnd('')
    setPriceOneAll('На одного')
  }

  //  Для вас
  const [forYou, setForYou] = useState('')
  // Стейты предложения
  const [option, setOption] = useState('')

  //   Еда
  const [eat, setEat] = useState('')
  //   Дни
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const itog = end - start
  //   Рейтинг
  const [clas, setClas] = useState('')

  return (
    <div className={styles.main_filter}>
      <div className={styles.container}>
        <div className={styles.filters_head}>
          <h1>Филтьры</h1>
          <img src={close} alt="close" onClick={toggleIsActive} />
        </div>
        <div className={styles.see_price}>
          <h2>Показать цену</h2>
          <form onSubmit={onSubmitHandler}>
            <label>
              <input
                type="radio"
                name="price"
                value="На одного"
                checked={
                  !!person ? (priceOneAll === 'На одного' ? true : false) : true
                }
                onClick={() => setPriceOneAll('На одного')}
              />
              на человека
            </label>
            <label>
              <input
                type="radio"
                name="price"
                value="all"
                checked={
                  !!person ? (priceOneAll === 'all' ? true : false) : false
                }
                onClick={() =>
                  !!person ? setPriceOneAll('all') : setPriceOneAll('На одного')
                }
              />
              на всех
            </label>
          </form>
        </div>
        <div className={styles.form_offer}>
          <h2>Предложение</h2>
          <form onSubmit={onSubmitHandler}>
            <label>
              <input
                checked={option === 'Зима 2023/2024' ? true : false}
                type="radio"
                name="forYou"
                value="Зима 2023/2024"
                onClick={() => setOption('Зима 2023/2024')}
              />
              Зима 2023/2024
            </label>
            <label>
              <input
                checked={option === 'Весна 2024' ? true : false}
                type="radio"
                name="forYou"
                value="Весна 2024"
                onClick={() => setOption('Весна 2024')}
              />
              Весна 2024
            </label>
            <label>
              <input
                checked={option === 'Лето 2024' ? true : false}
                type="radio"
                name="forYou"
                value="Лето 2024"
                onClick={() => setOption('Лето 2024')}
              />
              Лето 2024
            </label>
          </form>
        </div>
        <div className={styles.form_for_you}>
          <h2>выбрано для вас</h2>
          <form onSubmit={onSubmitHandler}>
            <label>
              <input
                checked={forYou === 'All inclusive' ? true : false}
                type="radio"
                name="forYou"
                value="All inclusive"
                onClick={() => setForYou('All inclusive')}
              />
              All inclusive
            </label>
            <label>
              <input
                checked={forYou === 'Отель для взрослых' ? true : false}
                type="radio"
                name="forYou"
                value="Отель для взрослых"
                onClick={() => setForYou('Отель для взрослых')}
              />
              Отель для взрослых
            </label>
            <label>
              <input
                checked={forYou === 'Песчаный пляж' ? true : false}
                type="radio"
                name="forYou"
                value="Песчаный пляж"
                onClick={() => setForYou('Песчаный пляж')}
              />
              Песчаный пляж
            </label>
            <label>
              <input
                checked={forYou === 'СПА' ? true : false}
                type="radio"
                name="forYou"
                value="СПА"
                onClick={() => setForYou('СПА')}
              />
              СПА
            </label>
          </form>
        </div>
        <div className={styles.days_rest}>
          <h2>Продолжительность пребывания</h2>
          <form onSubmit={onSubmitHandler}>
            <h2>От</h2>
            <input
              type="number"
              value={start}
              onChange={(event) => setStart(event.target.value)}
            />
            <h2>До</h2>
            <input
              type="number"
              value={end}
              onChange={(event) => setEnd(event.target.value)}
            />
            <h2>дней</h2>
          </form>
        </div>
        <div className={styles.form_eat}>
          <h2>Еда</h2>
          <form onSubmit={onSubmitHandler}>
            <label>
              <input
                checked={eat === '2-х разовое питание' ? true : false}
                type="radio"
                name="eat"
                value="2-х разовое питание"
                onClick={() => setEat('2-х разовое питание')}
              />
              2-х разовое питание
            </label>
            <label>
              <input
                checked={eat === '3-х разовое питание' ? true : false}
                type="radio"
                name="eat"
                value="3-разовое питание"
                onClick={() => setEat('3-х разовое питание')}
              />
              3-разовое питание
            </label>
            <label>
              <input
                checked={eat === 'Без еды' ? true : false}
                type="radio"
                name="eat"
                value="Без еды"
                onClick={() => setEat('Без еды')}
              />
              Без еды
            </label>
            <label>
              <input
                checked={eat === 'Завтраки' ? true : false}
                type="radio"
                name="eat"
                value="Завтраки"
                onClick={() => setEat('Завтраки')}
              />
              Завтраки
            </label>
          </form>
        </div>
        <div className={styles.rating_hotels}>
          <h2>Рейтинг отеля</h2>
          <form onSubmit={onSubmitHandler}>
            <label>
              <input
                checked={clas === 5 ? true : false}
                type="radio"
                name="hotel"
                value="от 5"
                onClick={() => setClas(5)}
              />
              от 5
            </label>
            <label>
              <input
                checked={clas === 4 ? true : false}
                type="radio"
                name="hotel"
                value="от 4"
                onClick={() => setClas(4)}
              />
              от 4
            </label>
            <label>
              <input
                checked={clas === 3 ? true : false}
                type="radio"
                name="hotel"
                value="от 3"
                onClick={() => setClas(3)}
              />
              от 3
            </label>
            <label>
              <input
                checked={clas === 0 ? true : false}
                type="radio"
                name="hotel"
                value="любой"
                onClick={() => setClas(0)}
              />
              любой
            </label>
          </form>
        </div>
        <div className={styles.conditions}>
          <h2>Удобства</h2>
          <form onSubmit={onSubmitHandler}>
            <label>
              <input
                checked={checkOne}
                type="checkbox"
                name="conditions"
                value="Анимации для детей"
                onClick={() =>
                  checkOne ? setCheckOne('') : setCheckOne('Анимации для детей')
                }
              />
              Анимации для детей
            </label>
            <label>
              <input
                checked={checkTwo}
                type="checkbox"
                name="conditions"
                value="Никаких ночных поездок"
                onClick={() =>
                  checkTwo
                    ? setCheckTwo('')
                    : setCheckTwo('Никаких ночных поездок')
                }
              />
              Никаких ночных поездок
            </label>
            <label>
              <input
                checked={checkThree}
                type="checkbox"
                name="conditions"
                value="Близко к центру"
                onClick={() =>
                  checkThree
                    ? setCheckThree('')
                    : setCheckThree('Близко к центру')
                }
              />
              Близко к центру
            </label>
            <label>
              <input
                checked={checkFore}
                type="checkbox"
                name="conditions"
                value="Рядом с аэропортом"
                onClick={() =>
                  checkFore
                    ? setCheckFore('')
                    : setCheckFore('Рядом с аэропортом')
                }
              />
              Рядом с аэропортом
            </label>
          </form>
        </div>
      </div>
      <div className={styles.form_btn}>
        <button className={styles.clean_form} onClick={cleanForm} type="submit">
          Очистить
        </button>
        <button
          type="submit"
          className={styles.submit_form}
          onClick={() =>
            setData(
              data
                .filter((el) => (forYou ? el.fY === forYou : !!el.price))
                .filter((el) => (option ? el.season === option : !!el.price))
                .filter((el) => (eat ? el.eat === eat : !!el.price))
                .filter((el) => (clas ? el.klass === clas : !!el.price))
                .filter((el) =>
                  itog ? start <= el.day && end >= el.day : !!el.price
                )
                .filter((el) => arrNew.every((elem) => el.plus.includes(elem)))
            )
          }
        >
          <h2>применить</h2>
          <img src={submit} alt="submit" />
        </button>
      </div>
    </div>
  )
}

export default Filters
