import styles from './ToursNotFoun.module.css'
import { Link } from 'react-router-dom'

function ToursNotFound() {
  return (
    <div className={styles.tours_nf_container}>
      <h1>Туры не найдены</h1>
      <Link to="../Country" className={styles.tours_nf_link}>
        Вернуться к выбору страны
      </Link>
    </div>
  )
}

export default ToursNotFound
