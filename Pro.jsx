import React from 'react'
import EmployeMSimages from '../assets/for practice.jpg'
    
const Projects = [
    {
        id: 1,
        name: "Employee MS",
        Teachnology: "Mern Stuck",
        image: EmployeMSimages,
        github: "https://github.com/ASADNAWAZ10",
    },
    {
        id: 2,
        name: "Blog App",
        Teachnology: "Mern Stuck",
        image: EmployeMSimages,
        github: "https://github.com/ASADNAWAZ10",
    },
    {
        id: 3,
        name: "Book MS",
        Teachnology: "Mern Stuck",
        image: EmployeMSimages, 
        github: "https://github.com/ASADNAWAZ10",
    },
];

function Pro() {
  return (
    <div className="bg-black text-white py-20 id" id="projects">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Projects.map(project =>(
            <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform-transition duration-300 hover:scale-105'>
                <img src={project.image} alt="" className='rounded-lg mb-4 w-full h-48 object-cover' />
                <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                <p className='text-gray-800 mb-4'>{project.Teachnology}</p>
                <a href={project.github} className='inline-block bg-gradient-to-r from-green-300 to-blue-500 
                text-white px-4 py-2 rounded-full'target='_blank'rel="noopener noreferrer"
                >GITHUB</a>
            </div>
          ))}
          </div>
        </div>
        </div>
    
  )
}

export default Pro