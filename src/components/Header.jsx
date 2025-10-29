import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')" }} id='Header'>
      <Navbar/>
      <motion.div 
      initial={{opacity:0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text[82px] inline-block max-w-3xl font-semibold pt-20'>Real Estate that will move you.</h2>
        <a href="#Contact" className='bg-blue-500 hover:bg-blue-600 px-4 sm:px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 text-sm sm:text-base block mx-auto text-center mt-8 w-fit'>
          <span className='hidden sm:inline'>SCHEDULE A FREE HOME CONSULTATION</span>
          <span className='sm:hidden mt-8'>Free Consultation</span>
        </a>
      </motion.div>
    </div>
  )
}

export default Header
