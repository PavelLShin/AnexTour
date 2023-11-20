import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
} from 'swiper/modules'

import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import styles from './Slider.module.css'
import SwiperCard from './src/SwiperCard'

function Slider() {
  return (
    <>
      <div className={styles.swiper_container}>
        <Swiper
          className="swiper-wrapper"
          style={{ height: '700px' }}
          modules={[Navigation, Pagination, EffectCoverflow, Scrollbar]}
          spaceBetween={100}
          // loop={true}
          slidesPerView={3.5}
          navigation={{
            nextEl: '.swiper-button-nextel',
            prevEl: styles.prevEl,
            clickable: true,
          }}
          scrollbar={{
            el: '.swiper-scrollbar',
            draggable: true,
          }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 20,
            modifier: 2.5,
            slideShadows: false,
          }}
          slideToClickedSlide={true}
          initialSlide={4}
          speed={800}
        >
          {SwiperCard.map((el, id) => {
            return (
              <SwiperSlide
                className="swiper-slide "
                style={{
                  width: '500px',
                  height: '300px',
                  backgroundImage: `url(${el.photo})`,
                  borderRadius: '20px',
                }}
              >
                <div className={styles.slide_container}>
                  <img
                    src={el.star}
                    alt="star"
                    className={styles.slide_star}
                    key={id}
                  />
                  <h2 className={styles.slide_rating}>{el.rating}</h2>
                  <h2 className={styles.slide_name}>{el.name}</h2>
                  <h3 className={styles.slide_moreinfo}>{el.moreInfo}</h3>
                </div>
              </SwiperSlide>
            )
          })}
          <div
            className="swiper-scrollbar"
            style={{ top: '400px', height: '5px', cursor: 'pointer' }}
          ></div>
        </Swiper>
      </div>
      <div className={styles.swiper_container_desktop}>
        <div className={styles.swiper_desktop_content_container}>
          {SwiperCard.map((el, id) => {
            return (
              <div
                className={styles.swiper_desktop_element_container}
                style={{ backgroundImage: `url(${el.photo})` }}
              >
                <img
                  src={el.star}
                  alt="star"
                  className={styles.slide_star}
                  key={id}
                />
                <h2 className={styles.slide_rating}>{el.rating}</h2>
                <h2 className={styles.slide_name}>{el.name}</h2>
                <h3 className={styles.slide_moreinfo}>{el.moreInfo}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Slider
