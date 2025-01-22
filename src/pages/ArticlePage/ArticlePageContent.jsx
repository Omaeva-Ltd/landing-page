



const ArticlePageContent = ({data}) => {
    //console.log(data);
    const blog = data.articlePage;

  

  return (
    <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold mx-auto max-w-3xl">{blog.title}</h1>
        <div className=" mx-auto mt-8">
            <div className="max-w-5xl max-h-[500px] overflow-hidden rounded-3xl">
                <img src={blog.mainImg} alt={blog.title} className="w-full max-h-[500px] object-cover object-center" />
            </div>
           
            <div className="flex w-full justify-between items-center mt-5 px-8">
                <div className="flex items-center gap-3">
                    <div className="overflow-hidden w-[30px] h-[30px] rounded-full">
                        <img src={data.avatar} alt={blog.author} className="w-full object-cover object-center" />
                    </div>
                    <p>{blog.author}</p>
                </div>
            
            {/* <div className="w-[6px] h-[6px] rounded-full bg-black"></div> */}
            <p>{blog.publishedOn}</p>
        </div>
        </div>
        <div className="max-w-3xl mx-auto mt-14">
            <p className="text-lg mb-8 ">{blog.intro}</p>
            {
                blog.mainContent.map((item,i) => (
                    <div key={i} className="mt-10">
                        <h2 className="text-3xl font-semibold mb-5">{item.keypointHeading}</h2>
                        <p className="text-lg ">{item.para}</p>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default ArticlePageContent;