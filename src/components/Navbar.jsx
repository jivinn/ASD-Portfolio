import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import {Github, Linkedin, Mail, Facebook, CircleUser} from 'lucide-react'
import Logo from '../assets/jib-logo.svg'

const Navbar = ({ homeRef, aboutRef, experienceRef, projectRef, contactRef }) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setNav(false); // Close the mobile menu when a link is clicked
    };
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center text-black pt-4 px-8'>
       
        <div className='hidden md:flex'>
            <a href="/"><img src={Logo} alt="Logo" style={{width:'50px'}}/></a>
        </div>
        
       <div className="w-full flex justify-center">
          <ul className='hidden md:flex p-3.5 border border-gray-200 shadow-lg rounded-3xl px-5 font-medium text-sm bg-white'>
              <li onClick={() => scrollToSection(homeRef)} className='hover:text-[#0072ff] delay-75 duration-200'>Home</li>
              <li onClick={() => scrollToSection(aboutRef)} className='hover:text-[#0072ff] delay-75 duration-200'>About</li>
              <li onClick={() => scrollToSection(experienceRef)} className='hover:text-[#0072ff] delay-75 duration-200'>Experience</li>
              <li onClick={() => scrollToSection(projectRef)} className='hover:text-[#0072ff] delay-75 duration-200'>Projects</li>
              <li onClick={() => scrollToSection(contactRef)} className='hover:text-[#0072ff] delay-75 duration-200 ' >Contact</li>
          </ul>
         
</div>
          {/* <div className = 'hidden md:flex hover:bg-[#0092FF] bg-rounded p-2 rounded-3xl duration-300 delay-50 '>
            <a href="https://facebook.com" target="_blank"><CircleUser color="black" strokeWidth={1.75} size={35}/></a>
          </div>
       */}

        {/* hamburger menu */}
          <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars  /> : <FaTimes/>}
          </div>

        {/* mobile menu */}
          <ul className= {!nav ? 'hidden' : ' absolute top-5 right-2 w-[200px] h-[200px] bg-[white] flex flex-col justify-center items-center text-black border-2 rounded-lg p-0' } 
          style={{
              opacity: nav ? 0.8 : 1, // Set the desired opacity value (e.g., 0.8 for 80% opacity)
              transition: 'opacity 0.3s', // Smooth transition when toggling opacity
          }}>
                <li onClick={() => scrollToSection(homeRef)} className='py-2 text-sm'>Home</li>
                <li onClick={() => scrollToSection(aboutRef)} className='py-2 text-sm'>About</li>
                <li onClick={() => scrollToSection(experienceRef)} className='py-2 text-sm'>Experience</li>
                <li onClick={() => scrollToSection(projectRef)} className='py-2 text-sm'>Projects</li>
                <li onClick={() => scrollToSection(contactRef)} className='py-2 text-sm'>Contact</li>
            </ul>

        {/* socials menu */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://www.linkedin.com/in/jivin-java-ba212229b/' target='blank'
            >
              Linkedin <Linkedin size={30} color="white" strokeWidth={1.5} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='https://github.com/jivinn' target='blank'
            >
              Github <Github color="white" strokeWidth={2} size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='mailto:jejava00168@usep.edu.ph' target='blank'
            >
              Email <Mail color="white" strokeWidth={2} size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='/'
            >
              Facebook <Facebook color="white" strokeWidth={2} size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>

  )

}

export default Navbar







































// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className='w-full h-[80px] flex items-center px-4 pt-5 font-montserrat'>
//         {/* Logo */}
//         <div className='flex items-center'>
//           <p>logo</p>
//         </div>
//         {/* Centered floating menu */}
//         <div className='flex items-center justify-center w-full h-[80px] absolute'>
//           <div className='p-3.5 border border-gray-200 shadow-lg rounded-3xl px-5'>
//             <ul className='flex space-x-8 font-semibold text-sm'>
//               <li>Home</li>
//               <li>About</li>
//               <li>Projects</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default Navbar;
