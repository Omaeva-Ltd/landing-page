import WordRotate from "../ui/word-rotate";
import "./herosection.css";

const HeroSection = () => {
  return (
    <div id="hero" className=" relative" >
      <div className="w-full flex flex-col items-center pt-20">
        {/* side vertical text */}
        <p className="text-sm max-lg:hidden absolute left-0 top-[140%] text-slate-700 -rotate-90">Helping brands <br /> reach new heights</p>

        {/* Hero text */}
        <h1 className="font-bold text-center max-w-4xl leading-[110%] tracking-tight text-5xl sm:text-7xl md:text-[90px]">Design, Develop, Deliver <span className="inline-flex"><WordRotate className="text-main" words={["Transform", "Transcend", "Technology"]} /></span> Solutions</h1>
        <p className="text-center tracking-wide mt-7 text-slate-700 max-w-xl">We craft customized solutions for businesses, individuals, and anyone ready to elevate their digital presence.</p>
        
      </div>
      
    </div>
  )
}

export default HeroSection;