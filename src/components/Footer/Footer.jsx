import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-2">
      <div className="flex gap-2">
        <img src="assets/footer-logo.svg" className="max-sm:w-10" alt="Logo" />
        <img src="assets/footer-logo-text.svg" alt="Logo" className="w-[100px] md:w-[80px] lg:w-auto" />
      </div>
      <div className="flex max-sm:flex-col max-sm:my-4">
        <p className="mr-2 md:text-xs lg:text-lg">Copyright © 2024 Omaeva Ltd. </p>
        <Link to="/privacy-policy" className="mr-1 md:text-xs lg:text-lg text-black underline" >Privacy Policy</Link>
        <a href="/licensing-omaeva" className=" text-black md:text-xs lg:text-lg underline">Licensing</a>
      </div>
      <div className="flex gap-5 max-sm:gap-1 sm:gap-2 ">
        <Link to="https://www.linkedin.com/company/omaeva/" target="_blank" ><img src="/assets/linkedin-social.svg" className="w-[30px]" alt="linkedin" width={40} height={40} /></Link>
        <Link to="" ><img src="/assets/twitter-social.svg" className="w-[30px]" alt="Twitter" width={40} height={40}/></Link>
        <Link to="" ><img src="/assets/instagram-social.svg" className="w-[30px]" alt="Instagram" width={40} height={40}/></Link>
        
       
        
      </div>
    </div>
  )
}

export default Footer;