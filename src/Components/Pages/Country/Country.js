import { NavLink, Link } from 'react-router-dom'

import styles from './Country.module.css'
import PagePicture from './img/PagePictures.png'
import dataCountry from './countryData'

function Country() {
  // const a = dataCountry.filter((el) => el.font === 'A')
  // console.log(a)
  return (
    <main className={styles.country_container}>
      <div
        className={styles.country_page_pictures}
        style={{ backgroundImage: `url(${PagePicture})` }}
      >
        <h1>страны</h1>
        <h2>
          Исследуйте мир: Наши лучшие направления и страны для путешествий
        </h2>
      </div>
      <div className={styles.country_page_title_container}>
        <div className={styles.country_page_content_container}>
          <div className={styles.country_page_container_navigation}>
            <NavLink
              className={({ isActive }) =>
                isActive ? '' : 'country_all_roat_h2'
              }
              to=".."
              end
            >
              Главная /
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? '' : 'country_all_roat_h2'
              }
              to="../Country"
              end
            >
              Страны
            </NavLink>
          </div>
          <h2>туры по странам</h2>
          <section className={styles.country_list}>
            <div className={styles.country_list_item}>
              <h1>A</h1>
              {dataCountry
                .filter((el) => el.font === 'A')
                .map((el, id) => {
                  return (
                    <Link
                      to={el.slug}
                      className={styles.country_list_item_data}
                      key={id}
                    >
                      <img src={el.img} alt="flag" />
                      <div className={styles.country_list_item_data_content}>
                        <h1>{el.nameCountry}</h1>
                        <h2>{el.title}</h2>
                      </div>
                    </Link>
                  )
                })}
            </div>
            <div className={styles.country_list_item}>
              <h1>Б</h1>
              {dataCountry
                .filter((el) => el.font === 'Б')
                .map((el, id) => {
                  return (
                    <Link
                      to={el.slug}
                      className={styles.country_list_item_data}
                      key={id}
                    >
                      <img src={el.img} alt="flag" />
                      <div className={styles.country_list_item_data_content}>
                        <h1>{el.nameCountry}</h1>
                        <h2>{el.title}</h2>
                      </div>
                    </Link>
                  )
                })}
            </div>
            <div className={styles.country_list_item}>
              <h1>В</h1>
              {dataCountry
                .filter((el) => el.font === 'В')
                .map((el, id) => {
                  return (
                    <Link
                      to={el.slug}
                      className={styles.country_list_item_data}
                      key={id}
                    >
                      <img src={el.img} alt="flag" />
                      <div className={styles.country_list_item_data_content}>
                        <h1>{el.nameCountry}</h1>
                        <h2>{el.title}</h2>
                      </div>
                    </Link>
                  )
                })}
            </div>
            <div className={styles.country_list_item}>
              <h1>И</h1>
              {dataCountry
                .filter((el) => el.font === 'И')
                .map((el, id) => {
                  return (
                    <Link
                      to={el.slug}
                      className={styles.country_list_item_data}
                      key={id}
                    >
                      <img src={el.img} alt="flag" />
                      <div className={styles.country_list_item_data_content}>
                        <h1>{el.nameCountry}</h1>
                        <h2>{el.title}</h2>
                      </div>
                    </Link>
                  )
                })}
            </div>
            <div className={styles.country_list_item}>
              <h1>Н</h1>
              {dataCountry
                .filter((el) => el.font === 'Н')
                .map((el, id) => {
                  return (
                    <Link
                      to={el.slug}
                      className={styles.country_list_item_data}
                      key={id}
                    >
                      <img src={el.img} alt="flag" />
                      <div className={styles.country_list_item_data_content}>
                        <h1>{el.nameCountry}</h1>
                        <h2>{el.title}</h2>
                      </div>
                    </Link>
                  )
                })}
            </div>
            <div className={styles.country_list_item}>
              <h1>К</h1>
              {dataCountry
                .filter((el) => el.font === 'К')
                .map((el, id) => {
                  return (
                    <Link
                      to={el.slug}
                      className={styles.country_list_item_data}
                      key={id}
                    >
                      <img src={el.img} alt="flag" />
                      <div className={styles.country_list_item_data_content}>
                        <h1>{el.nameCountry}</h1>
                        <h2>{el.title}</h2>
                      </div>
                    </Link>
                  )
                })}
            </div>
            <div className={styles.country_list_item}>
              <h1>П</h1>
              {dataCountry
                .filter((el) => el.font === 'П')
                .map((el, id) => {
                  return (
                    <Link
                      to={el.slug}
                      className={styles.country_list_item_data}
                      key={id}
                    >
                      <img src={el.img} alt="flag" />
                      <div className={styles.country_list_item_data_content}>
                        <h1>{el.nameCountry}</h1>
                        <h2>{el.title}</h2>
                      </div>
                    </Link>
                  )
                })}
            </div>
            <div className={styles.country_list_item}>
              <h1>С</h1>
              {dataCountry
                .filter((el) => el.font === 'С')
                .map((el, id) => {
                  return (
                    <Link
                      to={el.slug}
                      className={styles.country_list_item_data}
                      key={id}
                    >
                      <img src={el.img} alt="flag" />
                      <div className={styles.country_list_item_data_content}>
                        <h1>{el.nameCountry}</h1>
                        <h2>{el.title}</h2>
                      </div>
                    </Link>
                  )
                })}
            </div>
            <div className={styles.country_list_item}>
              <h1>Т</h1>
              {dataCountry
                .filter((el) => el.font === 'Т')
                .map((el, id) => {
                  return (
                    <Link
                      to={el.slug}
                      className={styles.country_list_item_data}
                      key={id}
                    >
                      <img src={el.img} alt="flag" />
                      <div className={styles.country_list_item_data_content}>
                        <h1>{el.nameCountry}</h1>
                        <h2>{el.title}</h2>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Country
