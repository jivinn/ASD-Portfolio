import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";

const Home = () => {
  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");

  // const fetchInfo = async () => {
  //   const res = await fetch("https://portfolio-admin.roice.xyz/api/basicinfo", {
  //     method: "GET",
  //   });

  //   const data = await res.json();

  //   setName(data.name);
  //   setTitle(data.title);
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);


  
    // const [info, setInfo] = useState({
    //   name: "",
    //   title: "",
    // });
  
    // const fetchInfo = async () => {
    //   const res = await fetch("https://portfolio-admin.roice.xyz/api/basicinfo", {
    //     method: "GET",
    //   });
  
    //   const data = await res.json();
  
    //   setInfo({ name: data.name, title: data.title });
    // };
  
    // useEffect(() => {
    //   fetchInfo();
    // }, []);

  return (
    <div name="home" className="w-full h-screen bg-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-8 ">
        <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0072ff] to-[#00c6ff]">
          {/* {name} */} Jivin Java
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] leading-snug ">
          {/* {title} */} Sofware Engineer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am an aspiring fullstack software developer, currently on my second
          year of college learning and absorbing everything like a sponge. I
          love learning and challenging myself.
        </p>
        <div>
          <button className="text-white bg-[#0072ff] rounded-3xl border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-[#0072ff] hover:text-[#0072ff] duration-300 ">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
