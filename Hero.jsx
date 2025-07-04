import React from 'react'
import heroimges from '../assets/hero1.jpg'
function Hero() {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={heroimges} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full
        object-cover transform transition duration-300 hover:scale-105' />
        <h1 className='text-4xl font-bold '>I'm {""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 
            to-blue-500'>ASAD NAWAZ, </span>
            Full-Stuck developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>I specialize in building modern and responsive web applications.</p>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transfrom duration-300 hover:scale-105 px-4 py-2 rounded-full' >contact with Me</button>
            <button className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline
            transform transition-transfrom duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>
  )
}

export default Hero