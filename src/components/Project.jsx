import React from 'react'
import matigsalug from '../assets/matigsalug.png'
import proverbs from '../assets/proverbs.png'


const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen text-black bg-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center h-full '>
            <div className='p-8 text-center mb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-[#0072ff]'>Projects</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-evenly gap-5 items-center '>
                <div className='flex flex-col text-center items-center gap-2 border-solid border-2 border-gray-300 rounded-md shadow-md shadow-gray pt-3 pb-4 px-8 '>
                    <div className='flex flex-row items-center gap-4'>
                      <img src={matigsalug} alt="" style={{width:100, height:100}}/>
                      <p className='text-lg font-bold'>Matigsalug Archive</p>
                    </div>
                    <p className='flex'>Website for preserving and promoting the Matigsalug language. </p>
                    <div className='flex gap-4'>
                      <a href="https://matigsalug-archive.vercel.app/" target='blank'>
                        <button className='text-[#0072ff] font-medium tracking-wider bg-white rounded-lg border-2 border-[#0072ff] px-5 py-1 my-2 flex items-center hover:bg-[#0072ff] hover:border-[#0072ff] hover:text-white duration-300 '>VISIT</button>
                      </a>
                      <a href="/">
                        <button className='text-[#0072ff] font-medium tracking-wider bg-white rounded-lg border-2 border-[#0072ff] px-5 py-1 my-2 flex items-center hover:bg-[#0072ff] hover:border-[#0072ff] hover:text-white duration-300 '>CODE</button>
                      </a>
                    </div>
                  </div>

                  <div className='flex flex-col text-center items-center gap-2 border-solid border-2 border-gray-300 rounded-md shadow-md shadow-gray pt-3 pb-4 px-8 '>
                    <div className='flex flex-row items-center gap-4'>
                      <img src={proverbs} alt="" style={{width:100, height:100}}/>
                      <p className='text-lg font-bold'>Proverbs Web App</p>
                    </div>
                    <p className='flex'>Our gateway to the timeless wisdom of the Book of Proverbs.</p>
                    <div className='flex gap-4'>
                      <a href="https://jivinn.github.io/Proverbs-WebApp/" target='blank'>
                        <button className='text-[#0072ff] font-medium tracking-wider bg-white rounded-lg border-2 border-[#0072ff] px-5 py-1 my-2 flex items-center hover:bg-[#0072ff] hover:border-[#0072ff] hover:text-white duration-300 '>VISIT</button>
                      </a>
                      <a href="/">
                        <button className='text-[#0072ff] font-medium tracking-wider bg-white rounded-lg border-2 border-[#0072ff] px-5 py-1 my-2 flex items-center hover:bg-[#0072ff] hover:border-[#0072ff] hover:text-white duration-300 '>CODE</button>
                      </a>
                    </div>
                  </div>

                </div>
        </div>
    </div>
  )
}

export default Project






















// import React from 'react'
// import proverbs from '../assets/proj-1.png'

// const Project = () => {
//   return (
//     <div name='project' className='w-full md:h-screen text-black bg-white' >
//         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
//             <div className='p-8 text-center mb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 text-black border-[#0072ff]'>Projects</p>
//                 {/* <p className='py-6'></p> */}
//             </div>

//             <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
//                 <div style={{backgroundImage:`url(${proverbs})`}} className='shadow-lg shadow-gray group container rounded-md flex justify-center items-center mx-auto content-div'>

//                     <div className='opacity-0 group-hover:opacity-100'>
//                         <span className='text-2xl font-bold text-white tracking-wider'>
//                             Proverbs Application
//                         </span>
//                         <div className='pt-8 text-center border-[#0072FF]'>
//                             <a href="/">
//                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-black text-lg'>VISIT</button>
//                             </a>
//                             <a href="/">
//                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-black text-lg'>CODE</button>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

            

//         </div>
//     </div>
//   )
// }

// export default Project



































