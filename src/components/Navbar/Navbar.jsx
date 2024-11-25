

const Navbar = () => {
  return (
    <div className="flex justify-between mt-7 items-center">
      <div id="header-logo">
        Omaeva Ltd
      </div>
      <div className="flex items-center gap-7 border-[1.5px] border-primary rounded-[30px] p-2 pl-2 pr-8">
        <a href="#home" className="border-[1.5px] rounded-[30px] border-primary py-[10px] px-[23px]">Home</a>
        <a href="#service">Service</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
      </div>
      <button className="rounded-[30px] px-6 py-2 bg-primary text-white font-medium">Contact Us</button>
    </div>
  )
}

export default Navbar;