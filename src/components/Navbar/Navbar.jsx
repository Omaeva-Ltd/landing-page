import { useState } from "react";
import ShimmerButton from "../ui/shimmer-button";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);
  // console.log(navOpen);

  const navigate = useNavigate();

  
  return (
    <header className="relative z-50 px-[60px] max-sm:px-[30px]">
      <nav>
      <div className="flex justify-between mt-4 items-center">
      <div id="header-logo">
        <Link to="/" >
          <img src="/assets/logo-gif.gif" alt="Omaeva logo" className="absolute -z-100 w-[120px] -top-4 max-sm:w-[90px] "/>
        </Link>
      </div>
      <div className="flex items-center ml-28 shrink max-sm:hidden gap-3 border-slim h-[50px] max-w-max border-main rounded-[30px] p-2 pl-3 pr-3">
        <HashLink to="/#services" className="hover:border-[1.5px] hover:rounded-[30px] hover:border-main py-[5px] px-[20px]">Services</HashLink>
        <HashLink to="/#about" className="hover:border-[1.5px] hover:rounded-[30px] hover:border-main py-[5px] px-[20px]">About Us</HashLink>
        <HashLink to="/#projects" className="hover:border-[1.5px] hover:rounded-[30px] hover:border-main py-[5px] px-[20px]">Projects</HashLink>
        <Link to="/blog" className="hover:border-[1.5px] hover:rounded-[30px] hover:border-main py-[5px] px-[20px]">Blogs</Link>
      </div>
      <HashLink to="/#cta">
        <ShimmerButton background="#800080" className="max-sm:hidden" >Contact Us</ShimmerButton>
      </HashLink>
      
      {/* <button className=" max-sm:hidden rounded-[30px] px-6 py-2 bg-main text-white font-medium">Contact Us</button> */}
      <div className="hidden max-sm:block">
        <i className="fa-solid fa-bars text-xl " onClick={() => setNavOpen(prev => !prev)}></i>
      </div>
    </div>
      </nav>

      {/* Mobile Nav */}
    {
      navOpen && (
        <div className="hidden max-sm:block absolute top-0 left-0 right-0 w-full">
        <div className="flex flex-col items-end p-8 space-y-4 -ml-[30px] -mt-[20px] text-[#010303] bg-[#f5f5f5] rounded-md">
          <i className="fa-solid fa-x border-main rounded-md border-2 p-2" onClick={() => setNavOpen(prev => !prev)} ></i>
          {/* <a href="#home" className="text-3xl font-medium">Home</a> */}
          <HashLink to="/#services" className="text-3xl font-medium">Services</HashLink>
          <HashLink to="/#about" className="text-3xl font-medium">About Us</HashLink>
          <HashLink to="/#projects" className="text-3xl font-medium">Projects</HashLink>
          <Link to="/blog" className="text-3xl font-medium">Blogs</Link>
          <HashLink to="/#cta" className="text-2xl font-medium rounded-[30px] px-6 py-2 bg-main text-white">Contact Us</HashLink>
        </div>
      </div>
      )
    }
      
    </header>
    
  )
}

export default Navbar;