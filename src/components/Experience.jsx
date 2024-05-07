import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/js.png'
import REACT from '../assets/react.png'
import JAVA from '../assets/java.png'
import MYSQL from '../assets/mysql.png'
import GITHUB from '../assets/github.png'
import TCSS from '../assets/tailwind.png'

 

const Experience = () => {
  return (
    <div className='w-full bg-white text-black'>
         
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col gap-8 justify-center w-full sm:h-full'>
            
            <div className='flex justify-center '>
                <p className='text-4xl font-bold inline border-b-4 border-[#0092FF] '>Experience</p>
            </div>
            <div className='border-2 p-8 flex-col gap-2 rounded-2xl'>
               <p className='py-4 font-medium'>These are the technologies I've work with : </p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
                <div className='shadow-md shadow-gray hover:scale-110 duration-500 rounded-3xl flex-row'>
                    <img className='w-15 mx-auto pt-5' src={HTML} alt="HTML icon" />
                    <p className='my-4 font-semibold text-sm'>HTML</p>
                </div>
                <div className='shadow-md shadow-gray hover:scale-110 duration-500 rounded-3xl flex-row'>
                    <img className='w-15 mx-auto pt-5' src={CSS} alt="HTML icon" />
                    <p className='my-4 font-semibold text-sm'>CSS</p>
                </div>
                <div className='shadow-md shadow-gray hover:scale-110 duration-500 rounded-3xl flex-row'>
                    <img className='w-15 mx-auto pt-5' src={TCSS} alt="HTML icon" />
                    <p className='my-4 font-semibold text-sm'>TAILWIND CSS</p>
                </div>
                <div className='shadow-md shadow-gray hover:scale-110 duration-500 rounded-3xl flex-row'>
                    <img className='w-15 mx-auto pt-5' src={JS} alt="HTML icon" />
                    <p className='my-4 font-semibold text-sm'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-gray hover:scale-110 duration-500 rounded-3xl flex-row'>
                    <img className='w-15 mx-auto pt-5' src={JAVA} alt="HTML icon" />
                    <p className='my-4 font-semibold text-sm'>JAVA</p>
                </div>
                <div className='shadow-md shadow-gray hover:scale-110 duration-500 rounded-3xl flex-row'>
                    <img className='w-15 mx-auto pt-5' src={REACT} alt="HTML icon" />
                    <p className='my-4 font-semibold text-sm'>REACT</p>
                </div>
                <div className='shadow-md shadow-gray hover:scale-110 duration-500 rounded-3xl flex-row'>
                    <img className='w-15 mx-auto pt-5' src={GITHUB} alt="HTML icon" />
                    <p className='my-4 font-semibold text-sm'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-gray hover:scale-110 duration-500 rounded-3xl flex-row'>
                    <img className='w-15 mx-auto pt-5' src={MYSQL} alt="HTML icon" />
                    <p className='my-4 font-semibold text-sm'>MySQL</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience