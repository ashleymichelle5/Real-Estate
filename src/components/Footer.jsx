import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <h1 className='text-white text-3xl font-bold m-8'>Delivering excellence in real estate services with integrity and results.</h1>
        </div>
        <div className='w-full  md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About</a>
                <a href="#Contact" className='hover:text-white'>Contact Me</a>
                <a href="#" className='hover:text-white'>Privacy Policy</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Get In Touch</h3>
            <div className='space-y-3 text-gray-400'>
              <p className='flex items-center gap-2'>
                <span>📞</span> (347) 856-8182
              </p>
              <p className='flex items-center gap-2'>
                <span>✉️</span> josephlee8182@gmail.com
              </p>
              <p className='flex items-center gap-2'>
                <span>📍</span> 4531 Broadway Union City, NJ 07087
              </p>
              <p className='flex items-center gap-2'>
                <span>@</span>   joelee.realestate
              </p>
            </div>
      </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        © 2025 Joseph Lee | Licensed Real Estate Professional 
      </div>
    </div>
  )
}

export default Footer
