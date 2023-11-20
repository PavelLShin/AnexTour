import styles from './Footer.module.css'
import LogoFooter from '../Tours/img/LogoFooter.png'
import FooterConvert from '../Tours/img/FooterConvert.png'
import FooterBtn from '../Tours/img/FooterBtn.png'
import facebook from '../Tours/img/facebookF.png'
import instagram from '../Tours/img/instagramF.png'
import ok from '../Tours/img/okF.png'
import whatsapp from '../Tours/img/whatsappF.png'
import telegram from '../Tours/img/telegramF.png'
import { NavLink } from 'react-router-dom'

function Footer({ clseFilters, closeSort, cleanFormSearch }) {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_container_header}>
        <img src={LogoFooter} alt="LogoFooter" />
        <div className={styles.footer_container_header_right}>
          <h2>Узнавайте о горящих турах первыми</h2>
          <form className={styles.footer_container_header_right_form}>
            <img
              src={FooterConvert}
              alt="FooterConvert"
              className={styles.footer_container_header_right_form_img1}
            />
            <input placeholder="Введите почту"></input>
            <button className={styles.footer_container_header_right_form_img2}>
              <img src={FooterBtn} alt="FooterConvert" />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.footer_container_medium}>
        {/* className={styles.footer_container_medium_nav} */}
        <NavLink
          onClick={() => {
            clseFilters()
            closeSort()
            cleanFormSearch()
          }}
          to="."
          end
          className={({ isActive }) =>
            isActive ? 'footerBtn1 ' : 'footerBtn2'
          }
        >
          <h2>Подбор тура</h2>
        </NavLink>
        <NavLink
          onClick={() => {
            clseFilters()
            closeSort()
            cleanFormSearch()
          }}
          to="hot_tours"
          className={({ isActive }) =>
            isActive ? 'footerBtn1 ' : 'footerBtn2'
          }
        >
          <h2>Горящие туры</h2>
        </NavLink>
        <NavLink
          onClick={() => {
            clseFilters()
            closeSort()
            cleanFormSearch()
          }}
          to="Country"
          className={({ isActive }) =>
            isActive ? 'footerBtn1 ' : 'footerBtn2'
          }
        >
          <h2>Страны и отели</h2>
        </NavLink>
        <NavLink
          onClick={() => {
            clseFilters()
            closeSort()
            cleanFormSearch()
          }}
          to=""
          className={styles.footer_container_medium_nav}
        >
          <h2>Priority</h2>
        </NavLink>
        <NavLink
          onClick={() => {
            clseFilters()
            closeSort()
            cleanFormSearch()
          }}
          to=""
          className={styles.footer_container_medium_nav}
        >
          <h2>оплата</h2>
        </NavLink>
        <NavLink
          onClick={() => {
            clseFilters()
            closeSort()
            cleanFormSearch()
          }}
          to=""
          className={styles.footer_container_medium_nav}
        >
          <h2>отзывы</h2>
        </NavLink>
        <NavLink
          onClick={() => {
            clseFilters()
            closeSort()
            cleanFormSearch()
          }}
          to=""
          className={styles.footer_container_medium_nav}
        >
          <h2>О нас</h2>
        </NavLink>
        <NavLink
          onClick={() => {
            clseFilters()
            closeSort()
            cleanFormSearch()
          }}
          to=""
          className={styles.footer_container_medium_nav}
        >
          <h2>контакты</h2>
        </NavLink>
      </div>
      <div className={styles.footer_container_bottom}>
        <div className={styles.footer_container_bottom_img}>
          <img src={telegram} alt="telegram" />
          <img src={whatsapp} alt="whatsapp" />
          <img src={ok} alt="ok" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
        </div>
        <h2>2023 © Anex Tour - Туристическая компания</h2>
      </div>
    </div>
  )
}

export default Footer
