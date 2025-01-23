import { Navbar, Testimonial, Cta, Footer, AboutUs } from "@/components";
import "./blog.module.css";
import { Link } from "react-router-dom";
import FeaturedBlog from "./FeaturedBlog";
import TopBlog from "./TopBlog";
import LatestBlog from "./LatestBlog";
import "./blog.css"
import { Helmet } from "react-helmet-async";


const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Welcome to Omaeva’s blog and insights Spark creativity, share knowledge, and entertain in the dynamic world of web design and development." />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <Navbar />
      <div className="mt-24 px-[60px] max-sm:px-[30px] text-center">
          <p className=" uppercase text-xl tracking-wider">Welcome to Omaeva’s insights</p>
          <p className="font-bold text-2xl max-w-lg mx-auto mt-3" >Spark creativity 👾, share knowledge 🫴, and entertain 🤩 in the dynamic world of web design and development.</p>
      </div>

      {/* <div className="h-[80vh] flex flex-col justify-center items-center gap-3">
          
          <h1 className="text-4xl lg:text-6xl font-bold text-main">Blog Coming Soon</h1>
          <p className="text-2xl text-center">We're working hard to bring you amazing content. Stay tuned!</p>
          <Link to="/" className="border-2 rounded-xl p-4 bg-main font-semibold text-white">Return to Homepage</Link>
      </div> */}
      <section className='w-full pt-1 px-[60px] mt-[100px] max-sm:px-[30px]'>
        <FeaturedBlog />
      </section>
      <section className='w-full pt-1 px-[60px] mt-[100px] max-sm:px-[30px]'>
         <TopBlog /> 
      </section>
      <section className='w-full pt-1 px-[60px] mt-[100px] max-sm:px-[30px]'>
        <LatestBlog />
      </section>
      <section className='w-full pt-1 px-[80px] testimonial-sizing max-sm:px-[30px] mt-[100px]'>
        <Testimonial />
      </section>
      <section id='cta' className='w-full lg:h-[100vh] mt-[100px] pt-1 px-[60px] max-sm:px-[30px]'>
        <Cta />
      </section>
      <footer className='w-full px-[60px] max-sm:px-[30px]'>
        <Footer />
      </footer>
    </div>
    
  )
}

export default Blog;