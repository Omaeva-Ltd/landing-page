import { featuredBlog } from "@/data/data";
import { Link } from "react-router-dom";

const FeaturedBlog = () => {
  return (
    <div className="grid sm:grid-cols-2 auto-rows-[350px] grid-cold-1 gap-7">
        <div className="rounded-2xl overflow-hidden">
            <img src={featuredBlog.img} alt="featured blog image" className="w-full h-full object-cover object-center" />
        </div>
        <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
                <div className="w-[30px] h-[30px] overflow-hidden rounded-full bg-black">
                    <img src={featuredBlog.avatar} alt="Author image" className="w-full h-[100%] rounded-2xl object-cover object-center" />
                </div>
                <p >{featuredBlog.author}</p>
                <div className="w-[6px] h-[6px] rounded-full bg-black"></div>
                <p>{featuredBlog.publishedOn}</p>
            </div>
            <h1 className="text-3xl md:mt-10 mt-2 md:mb-4 line-clamp-2 font-medium">{featuredBlog.title}</h1>
            <p className="text-lg leading-snug text-gray-800 max-w-xl mb-2 md:mb-14 line-clamp-3">{featuredBlog.content}</p>
            <div className="flex justify-between items-center">
                <Link to='/blog/featured' className="text-lg hover:bg-main hover:text-white font-medium border border-main px-5 py-2 rounded-full"><button>Read More</button></Link>
                <p>{featuredBlog.tag}</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturedBlog;