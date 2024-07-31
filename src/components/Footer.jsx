import React from 'react'
import { Link } from 'react-router-dom'
import ins from "../images/ins.logo.png"
import lin from "../images/link.logo.png"
import git from "../images/git.logo.png"

const Footer = () => {
  return (
    <div>
           <footer className="px-6 flex h-28 dark:bg-lime dark:text-gray-600">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex flex-wrap items-center space-x-4 sm:space-x-8"> 	
				<Link to="/help" className='font-bold'>Help center</Link>
				<Link to="/privacy" className='font-bold'>Privacy</Link>
			</div>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li className='flex items-center'>
				<img src={ins} alt=""  className='w-7' />
				<a rel="noopener noreferrer" href="https://www.instagram.com/_a_ffan_?igsh=MWM0dm81bXNncWhobA==" className=' text-lg font-semibold'>Instagram</a>
			</li>

			<li className='flex items-center'>
				<img src={lin} alt=""  className='w-8'/>
				<a rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammed-affan-87456724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className=' text-lg font-semibold'>LinkedIn</a>
			</li>

			<li className='flex items-center'>
			<img src={git} alt=""  className='w-11' />
				<a rel="noopener noreferrer" href="https://github.com/dusndjnks" className=' text-lg font-semibold'>GitHub</a>
			</li>
		</ul>
	</div>
</footer>
    </div>
  )
}

export default Footer