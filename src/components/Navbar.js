import React, { useEffect, useState } from 'react'
import {BsCart3, BsMoonFill, BsSunFill} from 'react-icons/bs'
import { FaAlignJustify } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Navlinks from './Navlinks';


const themes ={
    light:'light',
    dracula:'dracula'
}
const getThemeFromLocalStorage=(()=>{
    return localStorage.getItem('theme') || themes.light
})
const Navbar = () => {
    const [theme , setTheme]=useState(getThemeFromLocalStorage())

    const handleTheme=()=>{
        const {light,dracula}=themes
        const newTheme =  theme === light ? dracula : light
        
        setTheme(newTheme)
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme)
        localStorage.setItem('theme',theme);
    },[theme])
  return (
    <nav className='main-navbar bg-base-200'> 
        <div className='navbar align-elements'>
           <div className='navbar-start'>
            <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center italic'>
                AG
            </NavLink>
            <div className='dropdown'>
                <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                    <FaAlignJustify className='h-6 w-6 toggle-button-navbar'/>
                </label>
                <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'>
                    <Navlinks/>
                </ul>
            </div>
           </div>
           <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal'>
                <Navlinks/>
            </ul>
           </div>
           <div className='navbar-end'>
           <label className='swap swap-rotate'>
                <input type='checkbox' onChange={handleTheme}/>
                <BsSunFill className='swap-on w-4 h-4'/>
                    <BsMoonFill className='swap-off w-4 h-4'/>
            </label>
            <NavLink to='/cart' className='cart-btn-icon btn btn-ghost btn-circle btn-md ml-4'>
                <div className='indicator'>
                  <BsCart3 className='w-6 h-6'/>
                  <span className='badge badge-sm badge-primary indicator-item'>
                    5
                  </span>
                </div>
            </NavLink>
           </div>
        </div>
    </nav>
  )
}

export default Navbar