import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'
import Logo from './img/Logo..svg'
import Call from './img/Call.svg'
import Location from './img/Location.svg'
import Burger from './img/Burger.png'
import MenuDesktop from './MenuDesktop.js'

function Menu({ clseFilters, closeSort, cleanFormSearch }) {
  // state для меню десктоп
  const [menuDeskAtive, setMenuDeskAktive] = useState(false)
  return (
    <>
      <nav className={styles.container}>
        <NavLink to="." end>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </NavLink>
        <section className={styles.navigate_container}>
          <NavLink
            to="."
            end
            onClick={() => {
              clseFilters()
              closeSort()
              cleanFormSearch()
            }}
          >
            Подбор тура
          </NavLink>
          <NavLink
            to="hot_tours"
            onClick={() => {
              clseFilters()
              closeSort()
              cleanFormSearch()
            }}
          >
            Горящие туры
          </NavLink>
          <NavLink
            to="Country"
            onClick={() => {
              clseFilters()
              closeSort()
              cleanFormSearch()
            }}
          >
            Страны
          </NavLink>
          <NavLink
            to="Hotels"
            onClick={() => {
              clseFilters()
              closeSort()
              cleanFormSearch()
            }}
          >
            Отели
          </NavLink>
        </section>
        <section className={styles.navigate_container_right}>
          <button className={styles.navigate_btn}>Оставить заявку</button>
          <div className={styles.navigate_right_icon}>
            <img src={Call} alt="Call" className={styles.navigate_right_img1} />
            <img
              src={Location}
              alt="Location"
              className={styles.navigate_right_img2}
            />
          </div>
        </section>
        <div
          className={styles.menu_burger}
          onClick={() => {
            setMenuDeskAktive(!menuDeskAtive)
          }}
        >
          <img src={Burger} alt="Burger" />
        </div>
      </nav>
      {!!menuDeskAtive ? (
        <MenuDesktop className={styles.menu_desktop_container} />
      ) : (
        false
      )}
    </>
  )
}

export default Menu
