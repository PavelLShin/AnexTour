import { Outlet } from 'react-router-dom'
import Menu from './Pages/Menu/Menu'
import Footer from './Pages/Menu/Footer'

function LainLayouts({
  clseFilters,
  setActiveSort,
  activSort,
  closeSort,
  cleanFormSearch,
}) {
  return (
    <>
      <Menu
        clseFilters={clseFilters}
        closeSort={closeSort}
        cleanFormSearch={cleanFormSearch}
      />
      <Outlet />
      <Footer
        clseFilters={clseFilters}
        closeSort={closeSort}
        cleanFormSearch={cleanFormSearch}
      />
    </>
  )
}

export default LainLayouts
