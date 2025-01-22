import { Navbar, Testimonial, Cta, Footer } from "@/components";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { featuredBlog, topBlog, latestBlog } from "@/data/data";
import ArticlePageContent from "./ArticlePageContent";
import LatestBlog from "../Blog/LatestBlog";





const ArticlePage = () => {


  const [blogContent, setBlogContent] = useState(null);
  const [location, setLocation] = useState();
  const [loading, setloading] = useState(true);

  const {pathname} = useLocation();
  const {id} = useParams();
  

  useEffect(() => {

    const fetchData = () => {
      if(pathname.includes("featured")){
      console.log("fetaured");
      setBlogContent(featuredBlog);
      setloading(false);
      
    }else if(pathname.includes("top-blog")){
      console.log("top-blog");
      const data = topBlog.find((item) => parseInt(item.id) === parseInt(id));
      setBlogContent(data);
      setloading(false);
     

    }else if(pathname.includes("latest-blog")){
      console.log("lastest-blog");
      const data = latestBlog.find((item) => parseInt(item.id) === parseInt(id));
      setBlogContent(data);
      setloading(false);
      
    }

    

    }

    fetchData();
    
  }, [pathname])
  






  return (
    <div>
      <Navbar />
      <section className='w-full pt-1 px-[80px] max-sm:px-[30px] mt-[100px]'>
        {
          loading ? <h1>Loading</h1> :  <ArticlePageContent data={blogContent} />
        }
       
      </section>
      <section className='w-full pt-1 px-[80px] testimonial-sizing max-sm:px-[30px] mt-[100px]'>
        <LatestBlog count={4} />
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

export default ArticlePage;