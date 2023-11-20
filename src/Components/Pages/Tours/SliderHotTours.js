import styles from './SliderHotTours.module.css'
import ImgCard from './src/ImgCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

import 'swiper/css/scrollbar'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link, NavLink } from 'react-router-dom'

function SliderHotTours() {
  // const [sliderHotToursNav, setSliderHotTOursNav] = useState(false)
  // const over = () => {
  //   setSliderHotTOursNav(true)
  // }

  // const out = () => {
  //   setSliderHotTOursNav(false)
  // }

  return (
    <div className={styles.main_hot_tours}>
      <div className={styles.main_hot_tours_header}>
        <Link to="../hot_tours" className={styles.main_hot_tours_header_txt1}>
          горящие туры
        </Link>
        <h2 className={styles.main_hot_tours_header_txt2}>Поймайте момент</h2>
      </div>

      <div
        className={styles.slider_hottours_container}

        // onMouseOver={over}
        // onMouseOut={out}
      >
        <Swiper
          className="swiper-wrapper"
          style={{ gap: '32px', height: '350px' }}
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={80}
          slidesPerView="auto"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          scrollbar={{
            el: '.swiper-scrollbar',
            draggable: true,
          }}
          grabCursor={true}
          centeredSlides={true}
          // slideToClickedSlide={true}
          initialSlide={2}
          speed={800}
        >
          {ImgCard.map((el, id) => {
            return (
              <SwiperSlide
                key={id}
                className="swiper-slide"
                style={{
                  margin: '0px',
                  width: '340px',
                  height: '256px',
                  borderRadius: '30px',
                }}
              >
                <div
                  className={styles.hottours_container_slide}
                  style={{
                    backgroundImage: `url(${el.img})`,
                    borderRadius: '30px',
                  }}
                >
                  <div className={styles.main_hot_tours_head}>
                    <div className={styles.main_hot_tours_days_container}>
                      <h2 className={styles.main_hot_tours_days}>{el.days}</h2>
                    </div>
                    <div className={styles.main_hot_tours_price_container}>
                      <h2 className={styles.main_hot_tours_price}>
                        {el.price}
                      </h2>
                    </div>
                  </div>
                  <h2 className={styles.main_hot_tours_from}>{el.from}</h2>
                  <h2 className={styles.main_hot_tours_date}>{el.date}</h2>
                  <button className={styles.main_hot_tours_link_container}>
                    <NavLink
                      to={`hot_tours/${el.slug}`}
                      className={styles.main_hot_tours_link}
                    >
                      {el.link}
                    </NavLink>
                  </button>
                </div>
              </SwiperSlide>
            )
          })}

          {/* <div className={styles.main_hot_tours_navigate}>
            <div
              className="swiper-button-next"
              style={{
                width: '62px',
                height: '62px',
                borderRadius: '50%',
                background: 'white',
                paddingTop: '8px',
                color: 'black',
                display: `${sliderHotToursNav ? 'block' : 'none'}`,
              }}
            ></div>
            <div
              className="swiper-button-prev"
              style={{
                width: '62px',
                height: '62px',
                borderRadius: '50%',
                background: 'white',
                paddingTop: '8px',
                color: 'black',
                display: `${sliderHotToursNav ? 'block' : 'none'}`,
              }}
            ></div>
          </div> */}
          <div
            className="swiper-scrollbar"
            style={{ height: '5px', color: 'black', cursor: 'pointer' }}
          ></div>
        </Swiper>
      </div>
    </div>
  )
}

export default SliderHotTours
