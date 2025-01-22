import { projetData } from "@/data/data";
import { useState } from "react";
import "./Project.css";
import ShimmerButton from "../ui/shimmer-button";
import { a } from "react-spring";

const Project = () => {

  const [activeElement, setActiveElement] = useState(null);

  function hover(id) {
    setActiveElement(id);
  };



  return (
    <div className="relative">
      <div className="flex flex-wrap space-y-2 justify-between py-8 sm:py-20">
            <h2 className='font-bold text-[40px] sm:text-[60px]  tracking-tighter max-w-sm max-sm:mb-5 leading-[100%]'>We have worked on</h2>
            <p className="self-end text-lg leading-[130%] max-w-xs">We’ve crafted solutions we’re proud of—take a look at a few highlights.</p>
        </div>
      <div className="flex flex-wrap justify-around "> 
        {
          projetData.map((item) => (
            <a href={item.link} key={item.id} onMouseEnter={() => hover(item.id)} onMouseLeave={() => hover(null)} className={` ${item.clasName} gap-7 md:w-[50%] md:p-5 cursor-pointer max-md:mb-7 `}>
              <div >
                <div className="rounded-[30px] max-sm:max-h-[230px] pointer-events-none relative sm:h-[300px] md:h-fit lg:h-[400px] overflow-hidden">
                  {
                    item.id === 2 ? (
                      <video src={item.video} className={`${activeElement === item.id && 'scale-[1.02]'}`} autoPlay muted loop></video>
                    ):(
                      <img  src={item.img} alt="Project Image" className={`${activeElement === item.id ? "scale-[1.02]" : ""} transition-all rounded-[30px] w-full object-cover`} />
                    )
                  }
                  
                  <ul className={`${activeElement === item.id ? " md:animate-in " : "md:hidden"} z-50 tag flex gap-2  absolute -top-1 -right-1 py-2 px-4 pl-5 rounded-bl-2xl bg-white`}>
                      {
                        item.tags.map(tag => (
                          <li key={tag} className="border-[1.2px] text-xs font-medium relative  bg-[#e0dfde] rounded-2xl py-1 px-3">{tag}</li>
                        ))
                      }
                  </ul>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <p className="text-lg ">{item.year} <span className="text-4xl align-middle">&middot;</span>  <span>{item.client}</span></p>
                    <h3 className="text-2xl lg:text-3xl text-ellipsis overflow-hidden max-w-sm font-bold leading-tight">{item.title}</h3>
                  </div>
                  <div className={`${activeElement === item.id ? "block" : "hidden"}`}>
                    <img src="/assets/filled-arrow.svg" />
                  </div>
                </div>
              </div>
            </a>
            
          ))
        }

      </div>
      {/* view all */}
      <div className="md:absolute left-10">
        <a href="#projects">
          <ShimmerButton background="#800080" className="w-52 ">Cooking More</ShimmerButton>
        </a>
      </div>
    </div>
  )
}

export default Project;