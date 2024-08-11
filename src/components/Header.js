import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-navbar bg-neutral py-2.5 text-neutral-content'>
     <div className='align-elements flex justify-center lg:justify-end'>
     <div className='flex gap-x-6 justify-start items-center'>
      <Link to='login' className='link link-hover text-xs lg:text-sm'>
        Sign in
      </Link>
      <Link to='register' className='link link-hover text-xs lg:text-sm'>
        Create account
      </Link>
     </div>
     </div>
    </header>
  )
}

export default Header