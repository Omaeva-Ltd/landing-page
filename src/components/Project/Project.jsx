import { projetData } from "@/data/data";
import { useState } from "react";
import "./Project.css";
import ShimmerButton from "../ui/shimmer-button";

const Project = () => {

  const [activeElement, setActiveElement] = useState(null);

  function hover(id) {
    setActiveElement(id);
  };



  return (
    <div className="relative">
      <h2 className='font-bold text-[40px] sm:text-[60px]  tracking-tighter py-16 sm:py-20  max-w-xs leading-[100%]'>We have worked on</h2>
      <div className="flex flex-wrap justify-around "> 
        {
          projetData.map((item) => (
            <div key={item.id} onMouseEnter={() => hover(item.id)} onMouseLeave={() => hover(null)} className={` ${item.clasName} gap-7 md:w-[50%] md:p-5 cursor-pointer max-md:mb-7 `}>
              <div className="rounded-[30px] relative sm:h-[300px] md:h-fit lg:h-[400px] overflow-hidden">
                <img  src={item.img} alt="Project Image" className={`${activeElement === item.id ? "scale-[1.02]" : ""} transition-all rounded-[30px] w-full object-cover`} />
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
                  <p className="text-md ">{item.year} <span className="text-4xl align-middle">&middot;</span>  <span>{item.client}</span></p>
                  <h3 className="text-2xl text-ellipsis overflow-hidden lg:whitespace-nowrap font-semibold leading-tight">{item.title}</h3>
                </div>
                <div className={`${activeElement === item.id ? "block" : "hidden"}`}>
                  <img src="/assets/filled-arrow.svg" />
                </div>
              </div>
            </div>
          ))
        }

      </div>
      {/* view all */}
      <div className="md:absolute -bottom-28 left-10 xl:-bottom-40 xl:left-32">
        <ShimmerButton background="#800080" className="w-52 " >View all</ShimmerButton>
      </div>
    </div>
  )
}

export default Project