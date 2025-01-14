import Globe from "../ui/globe";
import ShimmerButton from "../ui/shimmer-button";
import Earth from "../ui/Earth";

const AcceptingProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-md:mb-10">
      <div className=" flex text-center flex-col justify-center items-center">
        <p className="flex  justify-center gap-1 items-center font-bold text-lg max-sm:text-xs uppercase "><span><img src="/assets/active-green-image.svg" alt="accepting projects" /></span>Accepting projects</p>
        <h3 className="font-bold text-[40px] sm:text-[60px] text-gray-700 leading-tight max-w-xs"><span className="text-main">Dream Big?</span>We’ll Help!</h3>
        <p className="max-w-sm">With a rich history of success, we’ve been empowering clients to make their visions a meaningful reality</p>
        <a href="#cta">
          <ShimmerButton background="#800080" className="m-5" >Connect with us</ShimmerButton>
        </a>
        
      </div>
      <div className=" flex justify-center items-center relative">
        {/* <Globe className="max-w-md" /> */}
        <Earth glowColor={[1,1,1]} baseColor={[1,1,1]} markerColor={[128 / 255, 0 / 255, 128 / 255]} scale={1.2} />
      </div>
    </div>
  )
}

export default AcceptingProjects;