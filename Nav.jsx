import React from 'react'

function Nav() {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 '>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>ASAD NAWAZ</div>
            <div className='space-x-6'> 
                <a href="#home" className='hover:text-gray-400'>home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#projects" className='hover:text-gray-400'>projects</a>
                <a href="#Contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
             transform transition-transfrom duration-300 hover:scale-105 px-4 py-2 rounded-full'>connect Me</button>
        </div>
    </nav>
  )
}

export default Nav