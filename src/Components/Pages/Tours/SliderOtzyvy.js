import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './SliderOtzyve.module.css'
import Otzyvy from './src/Otzyvy'

function SliderOtzyvy() {
  return (
    <div className={styles.otzyvy_container}>
      <section className={styles.otzyvy_header}>
        <h1 className={styles.header_reviews_txt1}>отзывы</h1>
        <h1 className={styles.header_reviews_txt2}>
          Впечатления наших путешественников
        </h1>
      </section>
      <div className={styles.slider_otzyvy_container}>
        <Swiper
          className="swiper-wrapper"
          style={{ gap: '32px' }}
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={{
            el: '.swiper-scrollbar',
            draggable: true,
          }}
          grabCursor={true}
          centeredSlides={true}
          slideToClickedSlide={true}
          initialSlide={1}
          speed={800}
        >
          {Otzyvy.map((el, id) => {
            return (
              <SwiperSlide
                key={id}
                className="swiper-slide "
                style={{
                  width: '352px',
                  height: '422px',
                  backgroundColor: '#F8F8F8',
                  borderRadius: '30px',
                }}
              >
                <div className={styles.slider_info_container}>
                  <img
                    src={el.Photo}
                    alt="Slider_photo"
                    className={styles.img_photo}
                  />
                  <img
                    src={el.Star}
                    alt="Slider_star"
                    className={styles.img_star}
                  />
                  <h2 className={styles.slider_info_txt1}>{el.From}</h2>
                  <h2 className={styles.slider_info_txt2}>{el.To}</h2>
                  <div className={styles.slider_info_txt3}>
                    <h2>{el.Story}</h2>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          <div
            className="swiper-scrollbar"
            style={{ height: '5px', color: 'black', cursor: 'pointer' }}
          ></div>
        </Swiper>
      </div>
      <div className={styles.otzyvy_desktop_container}>
        {Otzyvy.map((el, id) => {
          return (
            <div className={styles.otzyvy_desktop_content_container} key={id}>
              {
                <>
                  <img
                    src={el.Photo}
                    alt="Slider_photo"
                    className={styles.img_photo}
                  />
                  <img
                    src={el.Star}
                    alt="Slider_star"
                    className={styles.img_star}
                  />
                  <h2 className={styles.slider_info_txt1}>{el.From}</h2>
                  <h2 className={styles.slider_info_txt2}>{el.To}</h2>
                  <div className={styles.slider_info_txt3}>
                    <h2>{el.Story}</h2>
                  </div>
                </>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SliderOtzyvy
