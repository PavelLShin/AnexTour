// В этом компоненте будем показывать страницу одного курса динамически

import { Link, useParams } from 'react-router-dom'
import data from '../HotTours/data/HotTours'
import NotFound from '../../NotFound/NotFound'

const SingleSearchTours = () => {
  // При помощи useParams получаем данные из slug
  const params = useParams()
  //   Оставляем тур по текущему slug
  const tours = data.find((tour) => tour.slug === params.slug)
  if (!tours) {
    return <NotFound />
  }

  return (
    <>
      <h2>{tours.slug}</h2>
      <h3>{tours.id}</h3>
      {/* Выходим на один уровень выше относительно текущего пути */}
      <Link to=".." relative="path">
        Подбор тура
      </Link>
    </>
  )
}

export default SingleSearchTours
