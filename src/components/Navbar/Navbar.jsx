import { useState } from "react";


const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);

  
  return (
    <header className="relative">
      <nav>
      <div className="flex justify-between mt-2 items-center">
      <div id="header-logo">
        <img src="/assets/logo-gif.gif" className="absolute -z-100 w-[120px] -top-4 max-sm:w-[120px] "/>
      </div>
      <div className="flex items-center shrink max-sm:hidden gap-7 border-slim border-primary rounded-[30px] p-2 pl-2 pr-8">
        <a href="#home" className="border-[1.5px] rounded-[30px] border-primary py-[10px] px-[23px]">Home</a>
        <a href="#service">Service</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
      </div>
      <button className=" max-sm:hidden rounded-[30px] px-6 py-2 bg-primary text-white font-medium">Contact Us</button>
      <div className="hidden max-sm:block">
        <i className="fa-solid fa-bars text-2xl " onClick={() => setNavOpen(prev => !prev)}></i>
      </div>
    </div>
      </nav>

      {/* Mobile Nav */}
    {
      navOpen && (
        <div className="hidden max-sm:block absolute right-0 w-full">
        <div className="flex flex-col items-end p-4 space-y-4 text-white bg-black rounded-md">
          <a href="#home">Home</a>
          <a href="#service">Service</a>
          <a href="#about">About Us</a>
          <a href="#project">Project</a>
        </div>
      </div>
      )
    }
      
    </header>
    
  )
}

export default Navbar;