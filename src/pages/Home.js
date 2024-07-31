import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import img1 from "../images/bg.png"
import hoodie from "../images/hoodie.jpg"
import jack from "../images/jacket.jpg"
import jeans from "../images/jeans.jpg"
import shoes from "../images/shoe.jpg"
import suit from "../images/suit1.jpg"


const Home = () => {
  return (
    <Layout>

<div className=''>
<hr className="border-t-4 " />
</div>
	<div>
		<img src={img1} alt="" className='w-auto' />
	</div>
<hr className="border-t-4 " />

<div className='bg-lime flex justify-end py-10 px-40 hidden lg:flex'>
  <Link to="/product" className='bg-lime border border-4 px-8  py-3  text-2xl rounded-lg '>Go To Store</Link>
</div>

      <div className='h-auto w-scree flex justify-between bg-lime items-center'>
        <div className=' py-10 sm:px-3 lg:px-14'>
          <h1 className='text-6xl font-serif text-center  '>OLD  MONEY EMPORIUM</h1>
          <h2 className='text-center w-auto px-'>"Our dress store offers timeless elegance and modern refinement for the discerning gentleman."</h2>
        </div>
        <div>
        <img src={suit} alt="" className=' rounded-lg hidden lg:flex w-auto'/>
        </div>
      </div>

<div className=''> 
<hr className="border-t-4 " />
</div>

      <div>
      <section className="py-6 sm:py-12 dark:bg-lime dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8 ">
		<div className="space-y-2 text-center ">
			<h2 className="text-3xl font-bold">Our Products</h2>
			<Link to="/Product" className="font-serif text-sm dark:text-gray-600 hover:underline">"Explore our high-quality, old-money men's collection. Timeless elegance awaits."</Link>
		</div>  
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-50">
			<img src={hoodie} alt="" />
				<div className="flex flex-col flex-1 p-6">
					<Link to="/product" className="flex-1 py-2 text-2xl font-semibold leading-snug hover:underline">Hoodies,T-Shirts</Link>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
			<img src={jack} alt="" />
				<div className="flex flex-col flex-1 p-6">
					<Link to="/product" className="flex-1 py-2 text-2xl font-semibold leading-snug hover:underline">Jackets,Shirts</Link>	
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
			<img src={jeans} alt="" />
				<div className="flex flex-col flex-1 p-6">
					<Link to="/product" className="flex-1 py-2 text-2xl font-semibold leading-snug hover:underline">Jeans,Pants</Link>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-50">
				<img src={shoes} alt="" />
				<div className="flex flex-col flex-1 p-6">
					<Link to="/product" className="flex-1 py-2 text-2xl font-semibold leading-snug hover:underline">Sneakers,Loafers</Link>	
				</div>
			</article>
		</div>
	</div>
</section>
      </div>


      <hr className="border-t-4 bg-" />
	  <div>
<section className="py-6 dark:bg-lime dark:text-gray-900 lg:px-10">
	<div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
		<div className="flex flex-col space-y-4 text-center lg:text-left">
			<h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
			<p className="text-lg">Sign up for updates on the latest styles, exclusive offers, and more</p>
		</div>
		<div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
			<div className="flex flex-row">
				<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3  bg-black text-white" />
				<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-default-600 dark:text-gray-50 bg-black text-white">Subscribe</button>
			</div>
		</div>
	</div>
</section>
</div>

<hr className="border-t-4 bg-" />



    </Layout>
  )
}

export default Home