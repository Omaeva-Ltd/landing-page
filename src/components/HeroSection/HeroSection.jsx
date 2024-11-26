

const HeroSection = () => {
  return (
    <div id="hero" className="min-h-screen relative" >
      <div className="w-full flex flex-col items-center pt-20">
        {/* side vertical text */}
        <text className="text-sm max-lg:hidden absolute left-0 bottom-52 text-slate-700 -rotate-90">Helping brands <br /> reach new heights</text>
        <h1 className="font-bold text-center max-w-4xl leading-[110%] tracking-tight text-5xl sm:text-7xl md:text-[90px]">Design, Develop, <span className="text-primary">Deliver</span> Outstanding Solutions</h1>
        <p className="text-center tracking-wide mt-7 text-slate-700 max-w-xl">We craft customized solutions for businesses, individuals, and anyone ready to elevate their digital presence.</p>
        <video autoPlay src="/assets/hero-section.mp4" className="mt-7 rounded-xl" width="600" height="300" muted loop playsInline />
      </div>
    </div>
  )
}

export default HeroSection;