import { Navbar } from "@/components";
import "./blog.module.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Navbar />

      <div className="h-[80vh] flex flex-col justify-center items-center gap-3">
          
          <h1 className="text-4xl lg:text-6xl font-bold text-main">Blog Coming Soon</h1>
          <p className="text-2xl text-center">We're working hard to bring you amazing content. Stay tuned!</p>
          <Link to="/" className="border-2 rounded-xl p-4 bg-main font-semibold text-white">Return to Homepage</Link>
      </div>
    </div>
    
  )
}

export default Blog;