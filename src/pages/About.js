import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
   <Layout>
    <div className=''>
<hr className="border-t-4 bg-" />
</div>
<div>
<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<p rel="noopener noreferrer"  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
      <img src="views/old2.jpg" alt="" className='h-full w-full object-cover sm:h-96 lg:col-span-7 dark:bg-gray-500'/>

			<div className="p-6 space-y-2 lg:col-span-5 text-center">
				<h3 className="text-2xl font-semibold sm:text-4xl  ">Timeless Elegance: The Essence of Old Money Fashion
        </h3>
				<p>Old money fashion embodies timeless sophistication with classic cuts, high-quality materials, and understated luxury. This style reflects heritage and refinement, offering a look that never goes out of fashion. Embrace the elegance and enduring appeal of old money fashion</p>
			</div>
		</p>

	<div>
	<hr className="border-t-4 bg-" />


	</div>
    <div className='flex flex-col items-center justify-center '>
    <h2 className="text-3xl font-bold text-center">Quality, Security, and Speed: Our Commitment to You</h2>
    </div>

		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
        <img src="views/quality.jpg" alt="" className='object-cover w-full rounded h-auto dark:bg-gray-500'/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold  ">Quality</h3>
					<p>We pride ourselves on delivering only the highest quality products, meticulously crafted to meet your discerning standards.</p>
				</div>
			</div>
			<div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
        <img src="views/secure.jpg" alt="" className='object-cover w-full rounded h-auto dark:bg-gray-500' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold  ">Secure</h3>
					<p>Enjoy peace of mind with our robust security measures, ensuring your personal and payment information is protected every step of the way</p>
				</div>
			</div>
			<div rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
        <img src="views/delivery.jpg" alt="" className='object-cover w-full rounded h-auto dark:bg-gray-500' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold  ">Fast Delivery</h3>
					<p>Experience the convenience of prompt delivery, getting your order to you quickly so you can enjoy your purchase without delay</p>
				</div>
			</div>
		</div>
		
	</div>
</section>
</div>
<div className=''>
<hr className="border-t-4 bg-" />
</div>

   </Layout>
  )
}

export default About