import Globe from "../ui/globe";
import ShimmerButton from "../ui/shimmer-button";

const AcceptingProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 py-20">
      <div className=" flex text-center flex-col items-center">
        <p className="flex  justify-center gap-1 items-center font-bold text-lg uppercase "><span><img src="/assets/active-green-image.svg" alt="accepting projects" /></span>Accepting projects</p>
        <h3 className="font-bold text-gray-700 leading-tight text-[57px] max-w-xs"><span className="text-main">Dream Big?</span>We’ll Help!</h3>
        <p className="max-w-sm">With a rich history of success, we’ve been empowering clients to make their visions a meaningful reality</p>
        <ShimmerButton background="#800080" className="m-5" >Book a call</ShimmerButton>
      </div>
      <div className=" flex justify-center items-center relative">
        <Globe className="max-w-md" />
      </div>
    </div>
  )
}

export default AcceptingProjects;