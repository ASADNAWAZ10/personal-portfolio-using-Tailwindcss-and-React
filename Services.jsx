import React from 'react'

const Service = [
    {
      id: 1,
      title: "web Design",
      Description: "creating visually appealing and user-freindly web-design.",
    },
    {
      id: 2,
      title: "front-end Development",
      Description: "building responsive and interactive user interface.",
    },
    {
      id: 3,
      title: "back-end Development",
      Description: "Developing robust server-side logic and database.",
    },
    {
      id: 4,
      title: "Full-stuck Development",
      Description: "combining both front-end and back-end development skills.",
    },
    {
      id: 5,
      title: "content writing",
      Description: "writing content for your business and companies.",
    },
    {
      id: 6,
      title: "Digital Marketing",
      Description: "promote your business with our digital marketing team.",
    },
];

function Services() {
  return (
    <div className="bg-black text-white py-20 id" id="service">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
     {Service.map(Service => (
      <div key={Service.id} className='bg-gray-800 px-6 rounded-lg hover:shadow-lg 
      transform-transition duration-300 hover:scale-105'>
        <div className='text-right text-2xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-green-400 to-blue-500'>
         {Service.id}
        </div>
        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-green-300 to-blue-500'>
          {Service.title}
        </h3>
        <p className='mt-2 text-gray-300'>{Service.Description}</p>
        <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>

      </div>
     ))}
      </div>
      </div>
      </div>
  )
}

export default Services