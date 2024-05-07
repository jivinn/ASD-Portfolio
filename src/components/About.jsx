import React from 'react';
import jib from '../assets/jib.png'

const About = () => {
  return (
    
    <div name='about' className='w-full h-screen bg-white text-black'>
        <hr
            style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#d3d3d3', // Grayish color
                margin: '20px 0', // Add margin to separate the line from content
            }}
        />
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4 flex items-end justify-end'>
                <div className='flex items-end gap-8'>
                    <img src={jib} alt="" style={{width:100, borderRadius:'100px', border:'5px solid #0072ff'}}/>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0092FF]'>
                    About
                    </p>
                </div>
             <div></div>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0072ff] to-[#00c6ff]'>
              <p>Hi. I'm Jivin, welcome! Kindly read to get to know me more.</p>
            </div>
            <div>
              <p> I am currently navigating the diverse and ever-evolving landscape of software development and design. My journey in this field is marked by a constant desire to learn, grow, and adapt to new technologies and methodologies. By engaging with a variety of projects and collaborating with others, I am broadening my understanding of the industry and its many facets.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;