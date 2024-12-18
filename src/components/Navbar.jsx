import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import image from "../images/img1.png"

const Navbar = () => {

    const [extendNavbar,setExtendNAvbar] = useState(false)

  return (
    <div>
<div className='w-full bg-gradient duration-700 '>
        <nav className={`flex justify-between md:h-24  lg:px-7 sm:pt-4  pr-2 relative duration-500 ${extendNavbar ? "h-80 items-start" : "h-24 items-center"}`}>
            <div className='flex items-center justify-center gap-3'>
			<img src={image} alt="" className='lg:w-24 w-20 '/>
            <Link  to="/" className='font-semibold lg:text-3xl md:text-2xl text-lg  font-serif'>Legacy Elegance</Link>
            </div>
        <div>
            <ul className={`lg:gap-6 flex text-2xl font-semibold lg:static flex flex-col lg:flex-row absolute items-center gap-2 text-xl duration-500   px-3   ${extendNavbar ? "top-20 left-6" : " left-[-200px]"}`}>
			<Link to="/" className='flex cursor-pointer lg:text-xl text-lg hover:text-green-500 font-semibold'>
				Home
			</Link>
			<Link to="/product" className="cursor-pointer lg:text-xl text-lg  font-semibold">
	  			Product	
			</Link>
			<Link to="/cart"    className="cursor-pointer lg:text-xl text-lg  font-semibold">
				Cart
			</Link>
			<Link to="/about"   className="cursor-pointer lg:text-xl text-lg  font-semibold">
			About
			</Link>
			<Link to="/login"    className="cursor-pointer lg:text-xl text-lg  font-semibold ">
				Login
			</Link>
            <Link to="/signup"   className="cursor-pointer text-lg lg:text-xl  font-semibold">
				Signup
			</Link> 
            </ul>
            <div className={`md:hidden ${extendNavbar ? "pt-5" : "pt-0"}`} onClick={() => {setExtendNAvbar(open => !open)}}>
                {
                    extendNavbar ? <CloseIcon/> : <MenuIcon/>
                }
            </div>
        </div>
        </nav>
    </div>
    </div>
  )
}

export default Navbar

