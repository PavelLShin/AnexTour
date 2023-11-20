import { Link } from 'react-router-dom'
import styles from './MenuDesktop.module.css'
import dataCountry from '../Country/countryData'

function MenuDesktop() {
  return (
    <div className={styles.menu_desktop_container}>
      <section className={styles.menu_desktop_content_container}>
        <div className={styles.menu_burger_content1}>
          <h1>Популярыне страны</h1>
          {dataCountry
            .filter((el) => !!el.popular)
            .map((el, id) => {
              return (
                <div className={styles.menu_burger_link_container} key={id}>
                  <Link to={`Country`}>{el.nameCountry}</Link>
                </div>
              )
            })}
        </div>

        <div className={styles.menu_burger_content1}>
          <h1>Туристам</h1>
          <div className={styles.menu_burger_link_container}>
            <Link to={`Country`}>Страны</Link>
            <Link to="../Hotels">Отели</Link>
            <Link to="../search_tours">Подбор тура</Link>
            <Link to="../hot_tours">Горящие туры</Link>
          </div>
        </div>
        <div className={styles.menu_burger_content1}>
          <h1>Компания</h1>
          <div className={styles.menu_burger_link_container}>
            <Link>О нас</Link>
            <Link>Отзывы</Link>
            <Link>Контакты</Link>
            <Link>Новости</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MenuDesktop
