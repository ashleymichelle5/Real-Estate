import React from 'react'
import brand_img from '../assets/brand_img.jpeg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto pb-0 pt-14 md:px-20 lg:px32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Me</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Driven by passion. Focused on helping Real Estate needs. </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-3'>
        <img src={brand_img} alt="" className='w-full sm:w-1/2 max-w-lg object-cover -mt-4'
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}/>
        {/* <img 
  src={brand_img} 
  alt="" 
  className='w-96 h-96 object-cover '
  style={{ 
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2), 0 30px 80px rgba(0, 0, 0, 0.3)'
  }}
/> */}
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>100%</p>
                    <p>Client Satisfaction Goal</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>★★★★★</p>
                    <p>Service Commitment</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>24/7</p>
                    <p>Dedicated Support</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>100%</p>
                    <p>Integrity Guaranteed</p>
                </div>
            </div>
            <div className='mt-8'>
            <p className='mt-4 max-w-lg'>My name is Joseph Lee, and I am a dedicated real estate agent with a passion for helping clients achieve their home buying and selling goals.</p>
            <p className='mt-4 max-w-lg'>My #1 priority is protecting your interest above all, ensuring that your needs and preferences are met every step of the way. Whether you’re a first-time homebuyer or looking to sell your property, I am here to provide expert guidance and support throughout the entire process.</p>
            <p className='mt-4 max-w-lg'>In addition to my real estate career, I have worked in finance and customer service, which has equipped me with exceptional communication and interpersonal skills. I have served in the military for a long time so I am very familiar with veteran's lingo!</p>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
