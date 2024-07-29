import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'


const Navbar = () => {

    const [extendNavbar,setExtendNAvbar] = useState(false)

  return (
    <div>
          <div className="w-full  bg-gradient ">
	<div className={`flex justify-between  mx-auto lg:px-7 pr-2 relative duration-100 ${extendNavbar ? "h-72 items-start" : "h-24 items-center"}`} >
		<div className='flex items-center'>
		<img src="views\logo.png" alt="" className='lg:w-24 w-20 '/>
			<Link  to="/" className='font-semibold lg:text-3xl text-2xl  font-serif'>Legacy Elegance</Link>
		</div>

<div>     
		<ul className={`lg:gap-6 flex lg:text-4xl font-semibold lg:static flex flex-col lg:flex-row absolute items-center gap-2 duration-100  lg:px-3 lg:py-2 text-black px-3   rounded-lg ${extendNavbar ? "right-10 top-10" : " top-32[-200px] right-[-200px]"} `}>
			<Link to="/" className='flex cursor-pointer lg:text-xl text-lg hover:text-green-500 font-semibold'>
				Home
			</Link>
			<Link to="/product" className="flex cursor-pointer lg:text-xl text-lg hover:text-green-500 font-semibold">
				Product
			</Link>
			<Link to="/cart" className="flex cursor-pointer lg:text-xl text-lg hover:text-green-500 font-semibold">
				Cart
			</Link>
			<Link to="/about"  className="flex cursor-pointer lg:text-xl text-lg hover:text-green-500 font-semibold">
			About
			</Link>
			<Link to="/login" className="flex  cursor-pointer lg:text-xl text-lg hover:text-green-500 font-semibold ">
				Login
			</Link>
            <Link to="/signup" className="flex cursor-pointer text-xl hover:text-green-500 font-semibold">
				Signup
			</Link>   
		</ul>
        <div className='cursor-pointer lg:hidden flex items-center h-16 ' onClick={() => {setExtendNAvbar(open => !open)}}>
                {
                    extendNavbar ? <CloseIcon/> : <MenuIcon/>
                }
        </div>
</div>	
</div>
</div>
    </div>
  )
}

export default Navbar

