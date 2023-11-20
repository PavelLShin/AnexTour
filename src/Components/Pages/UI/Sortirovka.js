import styles from './Sortirivka.module.css'
import sortArrayData from './SortArrayData'
// import dataReset from '../HotTours/data/HotTours'

function Sortirovka({ serSortSlug, setActiveSort, setData, data }) {
  return (
    <div className={styles.sort_container}>
      {sortArrayData.map((el, id) => {
        return (
          <h2
            key={id}
            onClick={() => {
              serSortSlug(el)
              setActiveSort(false)
              el === 'Рекомендации для вас'
                ? setData(data.sort((a, b) => a.rating - b.rating))
                : el === 'Высший рейтинг'
                ? setData(data.sort((a, b) => b.rating - a.rating))
                : el === 'Низшая цена'
                ? setData(data.sort((a, b) => a.price - b.price))
                : el === 'Дата с самого раннего'
                ? setData(
                    data.sort((a, b) => {
                      return (
                        new Date(a.daysStart).getTime() -
                        new Date(b.daysStart).getTime()
                      )
                    })
                  )
                : el === 'Дата с последней'
                ? setData(
                    data.sort((a, b) => {
                      return (
                        new Date(b.daysStart).getTime() -
                        new Date(a.daysStart).getTime()
                      )
                    })
                  )
                : console.log('ff')
            }}
          >
            {el}
          </h2>
        )
      })}
    </div>
  )
}

export default Sortirovka
