
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar'

const Layout = () => {
  return (
    <div className='max-w-5xl mx-auto p-3'>
      <div className='flex flex-col gap-8'>
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout