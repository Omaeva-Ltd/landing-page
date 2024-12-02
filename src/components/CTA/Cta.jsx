import "./cta.css"

const Cta = () => {
  return (
    <div className="w-full h-full border-4 border-black rounded-2xl flex flex-wrap gap-7 p-6">
      <div className="flex-1 rounded-[60px] overflow-hidden h-full">
        <img src="/assets/cta-image.svg" alt="normal image" className="w-full h-full" />
      </div>
      <div className="flex-[1.2]">
        <h2 className="font-bold text-6xl leading-[100%] max-w-xl tracking-tighter ">Have a Vision? Let’s Make It a Reality Together!</h2>
        <p className="text-xl leading-tight max-w-md mt-2">Share your ideas, and let’s collaborate to design impactful solutions tailored just for you</p>
        <form action="" className="mt-3 cta-form">
          
          <input type="text" placeholder="Your name" />
          
          <input type="text" placeholder="you@company.com" />
          
          <input type="text" placeholder="Tell us a little about your project" />
        </form>
        <p className="text-xl font-medium mt-4">How can we help?</p>
        <div>
          <input type="checkbox" />
          <label htmlFor="">Website design</label>
          <input type="checkbox" />
          <label htmlFor="">Content creation</label>
          <input type="checkbox" />
          <label htmlFor="">UX design</label>
          <input type="checkbox" />
          <label htmlFor="">Strategy & consulting</label>
          <input type="checkbox" />
          <label htmlFor="">Micro Interaction</label>
          <input type="checkbox" />
          <label htmlFor="">Other</label>
        </div>
        <button></button>
      </div>
    </div>
  )
}

export default Cta;