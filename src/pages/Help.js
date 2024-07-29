import React from 'react'
import Layout from '../components/Layout'

const Help = () => {
  return (
    <Layout>
    <div>
    <section className="dark:bg-gray-100 dark:text-gray-800">
  <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
      <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
      <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
      <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
              <h3 className="font-semibold">1. Expert Guidance for Your Refined Style 
              </h3>
              <p className="mt-1 dark:text-gray-600">Our Help Center is committed to providing unparalleled support for your timeless wardrobe needs. From navigating our curated collections to handling your orders with care, we are here to make your shopping journey effortless and enjoyable. Trust us to deliver the excellence you deserve.</p>
          </div>
          <div>
              <h3 className="font-semibold">2. Dedicated Support for a Timeless Shopping Journey
              </h3>
              <p className="mt-1 dark:text-gray-600">Our Help Center offers comprehensive support tailored to the sophisticated tastes of our esteemed customers. Whether you have questions about our products or need guidance on maintaining your elegant attire, our team is always ready to assist. Experience the highest level of customer care with us.</p>
          </div>
          <div>
              <h3 className="font-semibold">3. Exceptional Care for the Discerning Gentleman
              </h3>
              <p className="mt-1 dark:text-gray-600">Welcome to our Help Center, where expert guidance meets unmatched customer service. Our knowledgeable team is here to provide you with detailed information and personalized assistance, ensuring you find the perfect pieces to elevate your wardrobe. Let us help you enjoy a flawless shopping experience.</p>
          </div>
          <div>
              <h3 className="font-semibold">4. Personalized Assistance for Your Exclusive Shopping Experience
              </h3>
              <p className="mt-1 dark:text-gray-600">At our Help Center, we understand the importance of exceptional service for our distinguished clientele. Whether you need assistance with sizing, styling, or order details, our dedicated team is here to ensure your shopping experience is as refined and seamless as the products we offer. Your satisfaction is our top priority.</p>
          </div>
      </div>
  </div>
</section>
  </div>
</Layout>
  )
}

export default Help