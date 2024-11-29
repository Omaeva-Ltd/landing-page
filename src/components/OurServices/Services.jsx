import { serviceDataSet } from "@/data/data";
import { useState } from "react";

const Services = () => {

    const [serviceMove, setServiceMove] = useState({x: 0, y: 0});
    const [mouseInElement, setMouseInElement] = useState(null);
    // console.log(serviceMove)
    console.log(mouseInElement);

    function serviceHover(e){
        let elementBoundary = e.target.getBoundingClientRect();
        let x = elementBoundary.x;
        let y = elementBoundary.y;
        setServiceMove({x,y});
    }


  return (
    <div>
        <h2 className='font-bold text-[40px] sm:text-[60px]  tracking-tighter py-16 sm:py-20  max-w-sm leading-[100%]'>Explore what we do best</h2>
        <div>
            <ul className=" grid grid-cols-2 max-sm:grid-cols-1 grid-rows-5 gap-7">
                {
                    serviceDataSet.map(({service, img}) => (
                        <div  onMouseEnter={() => setMouseInElement(service)} onMouseLeave={() => setMouseInElement(null)} key={service} onMouseMove={serviceHover} className="relative border-b-[1px] hover:translate-x-1 transition-all cursor-pointer max-w-md border-gray-500 font-semibold text-[20px] sm:text-[30px] py-3 px-2" >
                            <li className= "hover:translate-x-3 flex gap-6 transition-all">
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