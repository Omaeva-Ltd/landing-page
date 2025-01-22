



const ArticlePageContent = ({data}) => {
    console.log(data);
    const blog = data.articlePage;

  

  return (
    <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold mx-auto max-w-3xl">{blog.title}</h1>
        <div className="max-w-5xl mx-auto mt-8">
            <img src={blog.mainImg} alt={blog.title} />
            <div className="flex w-full justify-between items-center mt-5 px-8">
                <div className="flex items-center gap-3">
                    <div className="overflow-hidden w-[30px] h-[30px] rounded-full">
                        <img src={data.avatar} alt={data.author} className="w-full object-cover object-center" />
                    </div>
                    <p>{data.author}</p>
                </div>
            
            {/* <div className="w-[6px] h-[6px] rounded-full bg-black"></div> */}
            <p>{data.publishedOn}</p>
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