import { latestBlog } from "@/data/data";
import { Link } from "react-router-dom";

const LatestBlog = ({count}) => {

  const noOfBlog = count || latestBlog.length;

  return (
    <div>
      <h2 className='font-bold max-sm-flex-1 text-[40px] sm:text-[60px]  tracking-tighter max-w-xl leading-[100%] max-sm:mb-5'>Latest insights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mt-14 gap-y-8">
        {
          latestBlog.map((blog,i) => (
            <div>
              <div className="max-sm:h-[250px] overflow-hidden rounded-2xl">
                <img src={blog.cardImg} alt={blog.title} className="w-full h-full object-cover object-center" />
              </div>
              <div className="flex items-center gap-2 mt-3 pl-2">
                <div className="overflow-hidden w-[30px] h-[30px] rounded-full">
                  <img src={blog.avatar} alt={blog.author} className="w-full object-cover object-center" />
                </div>
                <div>
                  <p >{blog.author}</p>
                  <p className="text-xs">{blog.publishedOn}</p>
                </div>
                  
                </div>
                <div className="mt-5 mb-7">
                  <h3 className="text-2xl font-semibold line-clamp-2 ">{blog.title}</h3>
                  <p className="text-lg leading-snug line-clamp-4 mt-[10px] mb-[30px]">{blog.content}</p>
                </div>
                <Link to={`/blog/latest-blog/${blog.id}`} className="text-lg font-medium border border-main px-5 py-2 rounded-full"><button>Read More</button></Link>
            </div>
          )).slice(0,noOfBlog)
        }
      </div>
    </div>
  )
}

export default LatestBlog;