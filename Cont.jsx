import React from 'react'

function Cont() {
  return (
    <div className='bg-black text-white py-20'id="Contact">
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
     <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
     <div className='flex flex-col md:flex-row items-center md:space-x-12'>
       <div className='flex-1'>
       <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 
       to-blue-500 mb-4'>Let's Talk</h3>
       <p>I'm open to dicussing web development projects or partnarship opportunities.</p>
       <div className='mb-4'>
        <p className='hover:underline mt-2'><span className='text-2xl text-gray-300 font-bold'>Email: </span>
           asadnawaz211@gmail.com</p>
       </div>

      <div className='mb-4'>
        <p><span className='text-2xl font-bold'>Address:</span>pirqayum, sadda, kpk, pakistan</p>
      </div>
      </div>
      <div className='flex-1 w-full'>
        <form className='space-y-4'>
          <div>
            <label htmlFor="name" className='block mb-2'>your Name</label>
            <input type="text" className='w-full p-2 rounded bg-gray-500 border border-gray-500 
            focus:outline-none focus:border-green-400' placeholder='Enter your Name'/>
          </div>

          <div>
            <label htmlFor="email" className='block mb-2'>your Email</label>
            <input type="text" className='w-full p-2 rounded bg-gray-500 border border-gray-500 
            focus:outline-none focus:border-green-400' placeholder='Enter your Email'/>
          </div>

          
          <div>
            <label htmlFor="message" className='block mb-2'>Message</label>
            <textarea type="text" className='w-full p-2 rounded bg-gray-500 border border-gray-500 
            focus:outline-none focus:border-green-400'rows={5} placeholder='Enter your Email'/>
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
             transform transition-transfrom duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
        </form>
      </div>
    </div>
   </div>
   </div>
  )
}


export default Cont