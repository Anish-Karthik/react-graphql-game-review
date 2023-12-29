import { cn } from '@/lib/utils'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'

const routes = [
  {
    name: 'Home',
    path: '/dashboard'
  },
  {
    name: 'My Reviews',
    path: '/my-reviews'
  },
  {
    name: 'Add Game',
    path: '/add-game'
  }
]

const NavBar = () => {

  const currentRoute = useLocation()
  return (
    <nav className='w-full'>
      <div className='flex justify-between items-center py-4'>
        <div className='flex items-center'>
          <div className='text-2xl font-bold text-gray-800 md:text-3xl rounded-md bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent'>
            <Link to='/'>ScoreSphere</Link>
          </div>
        </div>
        <div className='hidden md:flex'>
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className={cn(
                'px-4 py-2 rounded-md text-gray-800 font-medium',
                currentRoute.pathname === route.path ? 'bg-gray-200 text-yellow-700': 'hover:text-yellow-500'
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div className='flex gap-2 items-center'>
          <SignedOut>
            <Button variant={'outline'} className='text-yellow-500 border-yellow-500 hover:text-yellow-700 hover:border-yellow-700 '>
              <SignInButton afterSignInUrl='/onboarding' />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default NavBar