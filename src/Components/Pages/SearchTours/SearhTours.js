import { useState } from 'react'

import hotImg from '../HotTours/img/CardImg/hot.png'
import Zayavka from '../HotTours/ZayavkaHotTours'
import { NavLink, Link } from 'react-router-dom'
import styles from './SearchTours.module.css'
import BtnImg from '../btn/img/BtnImg.png'
import Wall from './img/BCphoto.png'
import sort from '../HotTours/img/sort.png'
import map from '../HotTours/img/Search.png'
import BtnImage from '../HotTours/img/BtnImage.png'
import arrow from '../HotTours/img/CardImg/arrow.png'
import Filters from '../UI/Filters'
import Sortirovka from '../UI/Sortirovka'
import FormTo from '../UI/FormTo'
import FormSearchTours from '../UI/FormSearchTours'

function SearchTours({
  isActive,
  toggleIsActive,
  pointerEv,
  activSort,
  setActiveSort,
  sortSlug,
  serSortSlug,
  clseFilters,
  closeSort,
  person,
  setPerson,
  setDay,
  day,
  value,
  setValue,
  formEnabled,
  setFormEnabled,
  data,
  setData,
  duration,
  setDuration,
  cleanFormSearch,
  priceOneAll,
  setPriceOneAll,
}) {
  console.log(day.split().reverse())

  // Сортировка
  const [resetDataSearhTours, setRessetDataSearchTours] = useState([...data])

  // State для скролла
  const allPages = Math.ceil(data.length / 8)
  const [scroll, setScroll] = useState(0)

  const SCROLLING = 1250

  const fnScrollLeft = () => {
    return scroll > (-allPages + 1) * 1200
      ? setScroll(scroll - SCROLLING) && setCountPage(countPage - 1)
      : null
  }
  const fnScrollRight = () => {
    return scroll <= -1250
      ? setScroll(scroll + SCROLLING) && setCountPage(countPage + 1)
      : null
  }
  // state для кол-ва страниц
  const [countPage, setCountPage] = useState(1)

  const fnPlusPage = () => {
    return countPage < allPages ? setCountPage(countPage + 1) : null
  }

  const fnMinusPage = () => {
    return countPage > 1 ? setCountPage(countPage - 1) : null
  }

  const left = () => {
    fnScrollLeft()
    fnPlusPage()
  }

  const right = () => {
    fnScrollRight()
    fnMinusPage()
  }

  return (
    <div className={styles.main}>
      <div className={styles.hot_tours_container}>
        <main
          style={{ backgroundImage: `url(${Wall})` }}
          className={styles.main_tours}
        >
          <h1 className={styles.main_txt1}>Подбор тура</h1>
          <h2 className={styles.main_txt2}>
            Идеальное путешествие начинается здесь
          </h2>
          <div className={styles.main_form}>
            <FormSearchTours
              setValue={setValue}
              value={value}
              setFormEnabled={setFormEnabled}
              formEnabled={formEnabled}
              day={day}
              setDay={setDay}
              person={person}
              setPerson={setPerson}
              data={data}
              setData={setData}
              duration={duration}
              setDuration={setDuration}
              closeSort={closeSort}
              clseFilters={clseFilters}
            />
          </div>
        </main>
        {formEnabled ? <FormTo setValue={setValue} /> : false}
      </div>
      <section
        className={styles.hot_tours_all}
        style={{ background: `${isActive ? ' rgba(0, 0, 0, 0.30)' : ''}` }}
      >
        <div className={styles.hot_tours_all_roat}>
          <NavLink
            onClick={() => {
              serSortSlug('Рекомендации для вас')
              setData(data)
              cleanFormSearch()
            }}
            className={({ isActive }) =>
              isActive ? '' : 'hot_tours_all_roat_h2'
            }
            to=".."
            end
          >
            Главная /
          </NavLink>
          <NavLink
            onClick={() => {
              closeSort()
              setData(data)
              cleanFormSearch()
            }}
            className={({ isActive }) =>
              isActive ? '' : 'hot_tours_all_roat_h2'
            }
            to="../hot_tours"
            end
          >
            Горящие туры
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? '' : 'hot_tours_all_roat_h2'
            }
            to="../search_tours"
            end
          >
            Подбор тура
          </NavLink>
        </div>
        <div className={styles.hot_tours_all_variants}>
          <h1>найденные варианты</h1>
          <h2>{`(всего ${data.length})`}</h2>
        </div>
        <div className={styles.hot_tours_all_header}>
          <div className={styles.hotours_all_sort}>
            <img src={sort} alt="sort" />
            <h2
              onClick={() => {
                setActiveSort(!activSort)
                clseFilters()
                setFormEnabled(false)
              }}
            >
              Сортировать: <b>{sortSlug}</b>
            </h2>
          </div>
          {activSort ? (
            <Sortirovka
              serSortSlug={serSortSlug}
              setActiveSort={setActiveSort}
              setData={setData}
              data={data}
            />
          ) : (
            false
          )}

          <div className={styles.hot_tours_all_filter}>
            <div className={styles.hot_tours_all_filter_map}>
              <img src={map} alt="map" />
              <h2>Карта</h2>
            </div>
            <button
              className={styles.hot_tours_all_filter_btn}
              onClick={() => {
                toggleIsActive()
                setActiveSort(false)
                setFormEnabled(false)
              }}
            >
              <img src={BtnImage} alt="BtnImage" />
              <h2>Фильтры</h2>
            </button>
          </div>
        </div>
        {isActive ? (
          <Filters
            className={styles.filter_container}
            toggleIsActive={toggleIsActive}
            setData={setData}
            data={data}
            returnArr={resetDataSearhTours}
            setReturnArr={setRessetDataSearchTours}
            priceOneAll={priceOneAll}
            setPriceOneAll={setPriceOneAll}
            person={person}
          />
        ) : (
          false
        )}

        {/* Гриды */}
        <div
          className={styles.container_grid}
          style={{ pointerEvents: `${pointerEv ? 'none' : ''}` }}
        >
          <article
            className={styles.hot_tours_all_card_container}
            style={{ transform: `translateX(${scroll}px)` }}
          >
            {data.map((tours, id) => {
              return (
                <div className={styles.card_container} key={id}>
                  <img
                    src={tours.img}
                    alt="img1"
                    className={styles.card_container_img}
                  />
                  {!!tours.hot ? (
                    <img
                      src={hotImg}
                      className={styles.cord_container_hot_img}
                      alt="hotImg"
                    />
                  ) : (
                    false
                  )}
                  <div className={styles.card_container__info}>
                    <div className={styles.card_container__info_head}>
                      <h1>{tours.name}</h1>
                      <h2>{tours.hotel}</h2>
                      <img src={tours.star} alt="star" />
                      <div className={styles.card_container__info_head_ocenka}>
                        <div
                          className={
                            styles.card_container__info_head_ocenka_rating
                          }
                        >
                          <h2>{tours.rating}</h2>
                        </div>
                        <h3>{tours.otzyv}</h3>
                      </div>
                    </div>
                    <div className={styles.card_container__info_bottom}>
                      <div className={styles.card_container__info_bottom_left}>
                        <div
                          className={styles.card_container__info_bottom_left1}
                        >
                          <img src={tours.imgDay} alt="imgDay" />
                          <h3>{tours.days}</h3>
                        </div>
                        <div
                          className={styles.card_container__info_bottom_left2}
                        >
                          <img src={tours.serviceImg} alt="imgDay" />
                          <h3>{tours.service}</h3>
                        </div>
                      </div>
                      <div className={styles.card_container__info_bottom_right}>
                        {tours.plus.map((el, id) => {
                          return (
                            <div
                              className={
                                styles.card_container__info_bottom_right_check
                              }
                              key={id}
                            >
                              <img src={tours.checkImg} alt="checkImg" />
                              <h2>{el}</h2>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div className={styles.card_container_right}>
                    <div className={styles.card_container_right_top}>
                      <h2>{tours.season}</h2>
                    </div>
                    <div className={styles.card_container_right_bottom}>
                      <div className={styles.card_container_right_bottom_1}>
                        {priceOneAll === 'На одного' ? (
                          <>
                            <h2>{`${tours.price} ₽`}</h2>
                            <h3>/ чел</h3>
                          </>
                        ) : (
                          <>
                            <h2>{`${tours.price * person} ₽`}</h2>
                            <h3>на всех</h3>
                          </>
                        )}
                      </div>
                      <Link
                        to={tours.slug}
                        className={styles.card_container_right_bottom_link}
                      >
                        <h2 className={styles.main_input_btn_txt}>Подобрать</h2>
                        <img
                          src={BtnImg}
                          alt="BtnImg"
                          className={styles.main_input_btn_img}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </article>
        </div>
        <div className={styles.progressbar_container}>
          <div
            className={styles.progressbar}
            style={{ width: `${(100 * countPage) / allPages}%` }}
          ></div>
        </div>
        <div className={styles.hot_tours_btn_container}>
          <div className={styles.hot_tours_btn_pre} onClick={right}>
            <img src={arrow} alt="arrow" />
          </div>
          <div className={styles.hot_tours_btn_number}>
            <h2>{countPage}</h2>
            <h2>из</h2>
            <h2>{allPages}</h2>
          </div>
          <div className={styles.hot_tours_btn_next} onClick={left}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </section>
      <Zayavka />
    </div>
  )
}

export default SearchTours
