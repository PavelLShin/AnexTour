import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import LainLayouts from './LainOut'
import Tours from './Pages/Tours/Tours'
import HotTours from './Pages/HotTours/HotTours'
import Country from './Pages/Country/Country'
import Hotels from './Pages/Hotels/Hotels'
import SingleHotTours from './Pages/HotTours/SingleHotTours'
import SearchTours from './Pages/SearchTours/SearhTours'
import SingleSearchTours from './Pages/SearchTours/SingleSearchTours'
import SingleCountryTours from './Pages/Country/SingleCountryTours'

import datas from './Pages/HotTours/data/HotTours'

function AppAnex() {
  // Очистка формы поиска при переходе на другую страницу
  const cleanFormSearch = () => {
    setFormEnabled(false)
    setValue('')
    setDay('')
    setDay('')
    setPerson('')
    setDuration('')
  }

  // Выносим массив с турами для формы и подбора тура
  const [data, setData] = useState(datas)

  // Для поискового запроса
  const [value, setValue] = useState('')
  const [day, setDay] = useState('')
  // колличество людей
  const [person, setPerson] = useState('')
  const [duration, setDuration] = useState('')
  // Форма
  const [formEnabled, setFormEnabled] = useState(false)

  // Для показа цены
  const [priceOneAll, setPriceOneAll] = useState('На одного')

  // Функция для закрытия фильтра
  const [isActive, setIsActive] = useState(false)
  // Отключение экрана
  const [pointerEv, setPointerEv] = useState(false)
  const toggleIsActive = () => {
    setIsActive(!isActive)
    setPointerEv(!pointerEv)
  }

  // Закрытие окна фильтра
  const clseFilters = () => {
    setIsActive(false)
    setPointerEv(false)
  }

  // Закрытие окна сортировки
  const closeSort = () => {
    serSortSlug('Рекомендации для вас')
    setActiveSort(false)
  }

  // Сортировка
  const [activSort, setActiveSort] = useState(false)
  const [sortSlug, serSortSlug] = useState('Рекомендации для вас')

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <LainLayouts
                clseFilters={clseFilters}
                setActiveSort={setActiveSort}
                activSort={activSort}
                closeSort={closeSort}
                cleanFormSearch={cleanFormSearch}
              />
            }
          >
            <Route
              index={true}
              element={
                <Tours
                  value={value}
                  setValue={setValue}
                  clseFilters={clseFilters}
                  toggleIsActive={toggleIsActive}
                  isActive={isActive}
                  pointerEv={pointerEv}
                  activSort={activSort}
                  setActiveSort={setActiveSort}
                  sortSlug={sortSlug}
                  serSortSlug={serSortSlug}
                  closeSort={closeSort}
                  person={person}
                  setPerson={setPerson}
                  day={day}
                  setDay={setDay}
                  formEnabled={formEnabled}
                  setFormEnabled={setFormEnabled}
                  data={data}
                  setData={setData}
                  duration={duration}
                  setDuration={setDuration}
                />
              }
            />
            {/* Все горячие туры */}
            <Route
              path="hot_tours"
              element={
                <HotTours
                  value={value}
                  setValue={setValue}
                  closeSort={closeSort}
                  clseFilters={clseFilters}
                  toggleIsActive={toggleIsActive}
                  isActive={isActive}
                  pointerEv={pointerEv}
                  activSort={activSort}
                  setActiveSort={setActiveSort}
                  sortSlug={sortSlug}
                  serSortSlug={serSortSlug}
                  person={person}
                  setPerson={setPerson}
                  day={day}
                  setDay={setDay}
                  formEnabled={formEnabled}
                  setFormEnabled={setFormEnabled}
                  duration={duration}
                  setDuration={setDuration}
                  cleanFormSearch={cleanFormSearch}
                  priceOneAll={priceOneAll}
                  setPriceOneAll={setPriceOneAll}
                />
              }
            />
            {/* Определённый тур (переход по slug)*/}
            <Route path="hot_tours/:slug" element={<SingleHotTours />} />
            <Route
              path="search_tours"
              element={
                <SearchTours
                  value={value}
                  setValue={setValue}
                  clseFilters={clseFilters}
                  toggleIsActive={toggleIsActive}
                  isActive={isActive}
                  pointerEv={pointerEv}
                  activSort={activSort}
                  setActiveSort={setActiveSort}
                  sortSlug={sortSlug}
                  serSortSlug={serSortSlug}
                  closeSort={closeSort}
                  person={person}
                  setPerson={setPerson}
                  day={day}
                  setDay={setDay}
                  formEnabled={formEnabled}
                  setFormEnabled={setFormEnabled}
                  data={data}
                  setData={setData}
                  duration={duration}
                  setDuration={setDuration}
                  cleanFormSearch={cleanFormSearch}
                  priceOneAll={priceOneAll}
                  setPriceOneAll={setPriceOneAll}
                />
              }
            />
            <Route path="search_tours/:slug" element={<SingleSearchTours />} />
            <Route path="Country" element={<Country />} />
            <Route
              path="Country/:slug"
              element={
                <SingleCountryTours
                  value={value}
                  setValue={setValue}
                  clseFilters={clseFilters}
                  toggleIsActive={toggleIsActive}
                  isActive={isActive}
                  pointerEv={pointerEv}
                  activSort={activSort}
                  setActiveSort={setActiveSort}
                  sortSlug={sortSlug}
                  serSortSlug={serSortSlug}
                  closeSort={closeSort}
                  person={person}
                  setPerson={setPerson}
                  day={day}
                  setDay={setDay}
                  formEnabled={formEnabled}
                  setFormEnabled={setFormEnabled}
                  duration={duration}
                  setDuration={setDuration}
                  cleanFormSearch={cleanFormSearch}
                  priceOneAll={priceOneAll}
                  setPriceOneAll={setPriceOneAll}
                />
              }
            />
            <Route path="Hotels" element={<Hotels />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppAnex
