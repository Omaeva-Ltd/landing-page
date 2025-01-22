import { serviceDataSet } from "@/data/data";
import { useState } from "react";

const Services = () => {

    const [serviceMove, setServiceMove] = useState({x: 0, y: 0});
    const [mouseInElement, setMouseInElement] = useState(null);
    // console.log(serviceMove)
    // console.log(mouseInElement);

    function serviceHover(e){
        let elementBoundary = e.target.getBoundingClientRect();
        let x = elementBoundary.x;
        let y = elementBoundary.y;
        setServiceMove({x,y});
    }


  return (
    <div>
        <div className="flex flex-wrap space-y-2 justify-between py-8 sm:py-20">
            <h2 className='font-bold max-sm-flex-1 text-[40px] sm:text-[60px]  tracking-tighter max-sm:mb-5 max-w-sm leading-[100%]'>Explore what we do best</h2>
            <p className="self-end text-lg leading-[130%] max-sm:flex-1 max-w-xs">Explore our projects, where innovation meets functionality, showcasing tailored solutions for diverse digital needs.</p>
        </div>
        <div>
            <ul className=" grid grid-cols-2 max-sm:grid-cols-1 sm:grid-rows-5 gap-7">
                {
                    serviceDataSet.map(({service, img}) => (
                        <div  onMouseEnter={() => setMouseInElement(service)} onMouseLeave={() => setMouseInElement(null)} key={service} onMouseMove={serviceHover} className="relative border-b-[1px] hover:translate-x-1 transition-all cursor-pointer max-w-md border-gray-500 font-semibold text-[20px] sm:text-[30px] py-3 px-2" >
                            <li className= "hover:translate-x-3 flex max-lg:text-2xl max-lg:flex-col gap-6 whitespace-nowrap transition-all">
                                <img src={img} className="h-10 w-10" alt="service-icon" />
                                {service}
                            </li>
                            {
                                mouseInElement === service && <div className="text-sm absolute right-0 bottom-3 font-normal">
                                    <img src="/assets/filled-arrow.svg" />
                                </div>
                            }
                        </div>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Services;