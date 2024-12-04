import { testimonialData } from "@/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { useEffect } from "react";

const Testimonial = () => {

  // wheel scroll

  useEffect(() => {
    let scrollContainer = document.querySelector(".testimonial-slider");
    let prev = document.querySelector(".prev-button");
    let next = document.querySelector(".next-button");

    // scrollContainer.addEventListener("wheel", (e) => {
    //   e.preventDefault();
    //   scrollContainer.scrollLeft += e.deltaY;
    // });
    
    next.addEventListener("click", (e) => {
      scrollContainer.scrollLeft += 1200;
    });

    prev.addEventListener("click", (e) => {
      scrollContainer.scrollLeft -= 1200;
    });
  }, [])
  

  
  
  return (
    <div className="max-md:mt-20">
      <div className="flex flex-wrap space-y-2 justify-between sm:py-10 sm:pb-0">
            <h2 className='font-bold max-sm-flex-1 text-[40px] sm:text-[60px] max-sm:mb-5  tracking-tighter max-w-2xl leading-[100%]'>Here’s why our clients love working with us.</h2>
            <p className="self-end text-lg leading-[130%] max-sm-flex-1 max-w-xs">We are a digital agency that specializes in building and scaling cutting-edge digital product</p>
        </div>
      
      <div className="testimonial-wrapper">
        <i className="fa-solid fa-arrow-left prev-button"></i>
        <div className="testimonial-slider  ">
        <div className="first-section max-sm:grid-cols-1 gap-3">
          {testimonialData.map(item => (
            <div key={item} className="flex flex-col justify-between">
              <img src="/assets/testimonial-quote.svg" className="w-[60px]" alt="Project" />
              <p className="font-medium text-xl leading-tight mt-7">{item.comment}</p>
              <div className="flex items-center mt-5 gap-3">
                <img src={item.avatar} alt="Client Image" height="40" width="40"/>
                <div>
                  <h4 className="font-semibold text-xl">{item.name}</h4>
                  <p>{item.position}</p>
                </div>
              </div>
            </div>
          )).slice(0,3)}
        </div>
        <div className="first-section max-sm:grid-cols-1">
          {testimonialData.map(item => (
            <div key={item} className="flex flex-col justify-between">
              <img src="/assets/testimonial-quote.svg" className="w-[60px]" alt="Project" />
              <p className="font-medium text-xl leading-tight mt-7">{item.comment}</p>
              <div className="flex items-center mt-5 gap-3">
                <img src={item.avatar} alt="Client Image" height="40" width="40"/>
                <div>
                  <h4 className="font-semibold text-xl">{item.name}</h4>
                  <p>{item.position}</p>
                </div>
              </div>
            </div>
          )).slice(3, testimonialData.length)}
        </div>
      </div>
        <i className="fa-solid fa-arrow-right next-button"></i>
      </div>
     
    </div>
  )
}

export default Testimonial;