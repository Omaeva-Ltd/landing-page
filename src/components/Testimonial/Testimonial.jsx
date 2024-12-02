import { testimonialData } from "@/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./testimonial.css";
import { useEffect } from "react";

const Testimonial = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // wheel scroll

  useEffect(() => {
    let scrollContainer = document.querySelector(".testimonial-slider");
    let prev = document.querySelector(".prev-button");
    let next = document.querySelector(".next-button");

    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    });
    
    next.addEventListener("click", (e) => {
      scrollContainer.scrollLeft += 1200;
    });

    prev.addEventListener("click", (e) => {
      scrollContainer.scrollLeft -= 1200;
    });
  }, [])
  

  
  
  return (
    <div className="">
      <div className="flex flex-wrap space-y-2 justify-between py-16 sm:py-20 sm:pb-0">
            <h2 className='font-bold text-[40px] sm:text-[60px]  tracking-tighter max-w-xs leading-[100%]'>What our clients say</h2>
            <p className="self-end max-w-xs">We are a digital agency that specializes in building and scaling cutting-edge digital product</p>
        </div>
      
      <div className="testimonial-wrapper">
        <i class="fa-solid fa-arrow-left prev-button"></i>
        <div className="testimonial-slider ">
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
          ))}
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
          ))}
        </div>
      </div>
        <i class="fa-solid fa-arrow-right next-button"></i>
      </div>
     
    </div>
  )
}

export default Testimonial;