import { topBlog } from "@/data/data";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopBlog = () => {

  const [hover, sethover] = useState(null);

  //console.log(topBlog);

  return (
    <div>
       <h2 className='font-bold max-sm-flex-1 text-[40px] sm:text-[60px]  tracking-tighter max-w-xl leading-[100%] max-sm:mb-5'>Our top insights</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-[400px] mt-14">
          {
            topBlog.map((blog, i) => (
              <Link to={`/blog/top-blog/${blog.id}`} key={blog.id} style={{backgroundImage: `url(${blog.cardImg})`}} onMouseEnter={() => sethover(i)} onMouseLeave={() => sethover(null)} className={`${hover === i && 'scale-[1.02]'} transition-all bg-no-repeat bg-cover rounded-2xl cursor-pointer relative topblog-overlay overflow-hidden p-7 flex flex-col justify-between`}>
               
                  <div className={`${hover === i && 'rotate-12'} transition-all bg-white w-[50px] h-[50px] rounded-full ml-auto flex justify-center items-center`}><i className="fa-solid text-2xl text-main font-bold fa-plus"></i></div>
                  <div>
                    <div className="">
                      <h3 className="text-3xl font-semibold line-clamp-2 ">{blog.title}</h3>
                      <p className="text-lg line-clamp-2 mt-[10px] mb-[30px]">{blog.content}</p>
                    </div>
                    <div className="flex items-center gap-2">
                    <div className="overflow-hidden w-[30px] h-[30px] rounded-full">
                      <img src={blog.avatar} alt={blog.author} className="w-full object-cover object-center" />
                    </div>
                      <p >{blog.author}</p>
                    <div className="w-[6px] h-[6px] rounded-full bg-black"></div>
                      <p>{blog.publishedOn}</p>
                    </div>
                  </div>
                
               
             
                
              </Link>
            ))
          }
       </div>
    </div>
  )
}

export default TopBlog;