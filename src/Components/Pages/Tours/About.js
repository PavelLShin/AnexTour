import styles from './About.module.css'
import AboutGirl from './img/AboutGirl.png'
import AboutWater from './img/AboutWater.png'
import ok from './img/ok.png'
import telegram from './img/telegram.png'
import instagram from './img/instagram.png'
import facebook from './img/facebook.png'
import wahtsapp from './img/whatsapp.png'

function About() {
  return (
    <div className={styles.about_main_container}>
      <section className={styles.about_main_header}>
        <h1 className={styles.about_main_header_txt1}>o нас</h1>
        <h2 className={styles.about_main_header_txt2}>
          Вдохновляем мир на путешествия
        </h2>
      </section>
      <section className={styles.about_section_txt1}>
        <h1 className={styles.about_section_txt1_txt_head}>МЫ</h1>
        <h2 className={styles.about_section_txt1_txt_head2}>
          — команда профессионалов, влюбленных в искусство путешествий. Наша
          история началась c мечты o том, чтобы сделать каждое путешествие
          незабываемым,
        </h2>
        <h3 className={styles.about_section_txt1_txt_head3}>
          каждое приключение уникальным. Наша миссия — сделать путешествия
          доступными и незабываемыми. Мы предлагаем вам не просто туры, a
          волшебные истории, которые будут жить в вашем сердце навсегда.
          Независимо от того, ищете ли вы релакс на пляже, культурные изыски или
          экстремальные приключения, мы создадим для вас оптимальное
          путешествие, подстроенное под ваши уникальные желания.
        </h3>
      </section>
      <img
        src={AboutGirl}
        alt="About_girl"
        className={styles.about_section_head_img}
      />
      <img
        src={AboutWater}
        alt="AboutWater"
        className={styles.about_section_head_img2}
      />
      <h2 className={styles.about_section_under_txt1}>
        Мы гордимся нашей командой опытных специалистов, каждый из которых
        разделяет страсть к туризму и стремление сделать ваше путешествие
        незабываемым. Мы внимательно следим за последними тенденциями в
        индустрии, чтобы предложить вам только лучшие и самые актуальные
        варианты.
      </h2>
      <h2 className={styles.about_section_under_txt2}>
        Присоединяйтесь к нам в этом захватывающем путешествии! Мы готовы
        подарить вам моменты радости, вдохновения и удивления в каждом уголке
        нашего удивительного мира.
      </h2>
      {/* desktop */}
      <div className={styles.about_section_desktop_container}>
        <h2 className={styles.about_section_txt1_desktop}>
          Мы — команда профессионалов, влюбленных в искусство путешествий. Наша
          история началась c мечты o том, чтобы сделать каждое путешествие
          незабываемым,
        </h2>
        <h3 className={styles.about_section_txt1_txt_head3_desktop}>
          каждое приключение уникальным. Наша миссия — сделать путешествия
          доступными и незабываемыми. Мы предлагаем вам не просто туры, a
          волшебные истории, которые будут жить в вашем сердце навсегда.
          Независимо от того, ищете ли вы релакс на пляже, культурные изыски или
          экстремальные приключения, мы создадим для вас оптимальное
          путешествие, подстроенное под ваши уникальные желания.
        </h3>
        <img
          src={AboutGirl}
          alt="About_girl"
          className={styles.about_section_head_img_desktop}
        />
        <h2 className={styles.about_section_under_txt2_desktop}>
          Присоединяйтесь к нам в этом захватывающем путешествии! Мы готовы
          подарить вам моменты радости, вдохновения и удивления в каждом уголке
          нашего удивительного мира.
        </h2>
        <img
          src={AboutWater}
          alt="AboutWater"
          className={styles.about_section_head_img2_desktop}
        />
      </div>
      <section className={styles.about_section_footer}>
        <div className={styles.about_section_footer_section1}>
          <h1 className={styles.about_section_footer_section1_txt}>
            СВЯЗАТЬСЯ C НАМИ
          </h1>
          <div className={styles.about_section_footer_section1_img}>
            <img src={ok} alt="ok" />
            <img src={telegram} alt="telegram" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={wahtsapp} alt="wahtsapp" />
          </div>
        </div>
        <div className={styles.about_section_footer_section2}>
          <h1>КОНТАКТЫ</h1>
          <div className={styles.about_section_footer_section2_tel}>
            <h2>+ 8 (495) 626-26-96</h2>
            <h2> + 8 (925) 826-26-96</h2>
          </div>
          <h2>anextourchertanovo@gmail.com</h2>
        </div>
        <div className={styles.about_section_footer_section3}>
          <h1>АДРЕС</h1>
          <h2>Москва, Россошанский проезд, дом 3, (1-й этаж)</h2>
        </div>
      </section>
    </div>
  )
}

export default About
