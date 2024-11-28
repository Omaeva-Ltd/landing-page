import { useState } from "react";
import ShimmerButton from "../ui/shimmer-button";


const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);

  
  return (
    <header className="relative z-50 px-[60px] max-sm:px-[30px]">
      <nav>
      <div className="flex justify-between mt-4 items-center">
      <div id="header-logo">
        <img src="/assets/logo-gif.gif" className="absolute -z-100 w-[120px] -top-4 max-sm:w-[120px] "/>
      </div>
      <div className="flex items-center shrink max-sm:hidden gap-7 border-slim border-main rounded-[30px] p-1 pl-1 pr-8">
        <a href="#home" className="border-[1.5px] rounded-[30px] border-main py-[5px] px-[23px]">Home</a>
        <a href="#service">Service</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
      </div>
      <ShimmerButton background="#800080" className="max-sm:hidden" >Contact Us</ShimmerButton>
      {/* <button className=" max-sm:hidden rounded-[30px] px-6 py-2 bg-main text-white font-medium">Contact Us</button> */}
      <div className="hidden max-sm:block">
        <i className="fa-solid fa-bars text-xl " onClick={() => setNavOpen(prev => !prev)}></i>
      </div>
    </div>
      </nav>

      {/* Mobile Nav */}
    {
      navOpen && (
        <div className="hidden max-sm:block absolute top-0 w-full">
        <div className="flex flex-col items-end p-8 pr-16 space-y-4 -ml-[30px] -mt-[20px] text-[#010303] bg-[#f5f5f5] rounded-md">
          <i className="fa-solid fa-x border-main rounded-md border-2 p-2" onClick={() => setNavOpen(prev => !prev)} ></i>
          <a href="#home" className="text-3xl font-medium">Home</a>
          <a href="#service" className="text-3xl font-medium">Service</a>
          <a href="#about" className="text-3xl font-medium">About Us</a>
          <a href="#project" className="text-3xl font-medium">Project</a>
          <a href="#project" className="text-2xl font-medium rounded-[30px] px-6 py-2 bg-main text-white">Contact Us</a>
        </div>
      </div>
      )
    }
      
    </header>
    
  )
}

export default Navbar;