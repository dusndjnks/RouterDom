import React from 'react'
import Layout from '../components/Layout'

const Signup = () => {
  return (
    <Layout>
    <div className=''>
<hr className="border-t-4 bg-" />
</div>



<div className=' flex justify-center py-5 bg-lime'>

<div className="w-full max-w-sm p-10 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 bg-black">
<h1 className="text-2xl font-bold text-center text-white">Sign up</h1>
<form noValidate="" action="" className="space-y-6">
<div className="space-y-1 text-sm px-5">
       <label htmlFor="username" className="block dark:text-gray-600 text-white">Full Name</label>
       <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600" />
   </div>
   <div className="space-y-1 text-sm px-5">
       <label htmlFor="username" className="block dark:text-gray-600 text-white">Username</label>
       <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600" />
   </div>
   <div className="space-y-1 text-sm px-5">
       <label htmlFor="password" className="block dark:text-gray-600 text-white">New Password</label>
       <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600" />
   </div>
   <div className="space-y-1 text-sm px-5">
       <label htmlFor="password" className="block dark:text-gray-600 text-white">Confirm Password</label>
       <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600" />
   </div>
   <div className='px-20 '>
   <button className="block font-semibold w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-default-600 text-white border ">Sign up</button>
   </div>
</form>
</div>
</div>


<div className=''>
<hr className="border-t-4 bg-" />
</div>
</Layout>
  )
}

export default Signup