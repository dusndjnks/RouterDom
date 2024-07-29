import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <Layout>
    <div className=''>
<hr className="border-t-4 bg-" />
</div>
    <div className='bg-lime'>
      <div className='flex justify-center py-3  '>
  <div className="flex flex-col max-w-md py-3 rounded-md sm:p-10 dark:bg-black dark:text-gray-800 border border-4">
  <div className="mb-8 text-center">
      <h1 className="my-3 text-4xl font-bold text-white">Login</h1>
      <p className="text-sm dark:text-gray-600 text-white">Login to access your account</p>
  </div>
  <form noValidate="" action="" className="space-y-12">
      <div className="space-y-4">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm text-white">Email address</label>
              <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
          <div>
              <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-white">Password</label>
                  <p  className="text-xs hover:underline dark:text-gray-600 text-white">Forgot password?</p>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
      </div>
      <div className="space-y-2">
          <div>
              <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 text-white">Login</button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600 text-white">Don't have an account yet?
              <Link to="/signup"  rel="noopener noreferrer"  className="hover:underline dark:text-violet-600 text-white">Sign up</Link>.
          </p>
      </div>
  </form>
</div>
  </div>
      </div>
  <div className=''>
<hr className="border-t-4 bg-" />
</div>
  </Layout>
  )
}

export default Login