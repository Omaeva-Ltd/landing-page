

const AboutUs = () => {
  return (
    <div className='py-28'>
        <h2 className='font-bold text-[60px] tracking-tighter pb-24 max-w-xl leading-[100%]'>Deliver bold, innovative, effective solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid-rows-2 sm:gap-6 max-sm:space-y-6">
            <div className="border-2 flex flex-col justify-center items-start rounded-2xl p-10 min-h-80 bg-[#E1EDDA] ">
                <div className="max-w-sm">
                    <h3 className="text-start mb-1 font-medium leading-[110%] text-[38px]">Bold Innovation</h3>
                    <p className="text-[20px] leading-tight text-slate-700 max-w-lg">Tailoring intuitive solutions to deliver on-the-go adaptability and unmatched efficiency</p>
                </div>
                
            </div>
            <div className="border-2 lg:col-span-2 flex flex-col justify-center rounded-2xl p-10 items-center  bg-[#E8DFED]">
                <div className="max-w-sm">
                    <h3 className="text-start mb-1 font-medium leading-[110%] text-[38px]">Flawless Performance</h3>
                    <p className="text-[20px] leading-tight text-slate-700 max-w-sm">Elevating user satisfaction with performance-driven solutions that never compromise</p>
                </div>
            </div>
            <div className="border-2 lg:col-span-2 flex flex-col justify-center rounded-2xl p-10 items-center bg-[#FAE5CF] ">
               <div className="max-w-sm">
                    <h3 className="text-start mb-1 font-medium leading-[110%] text-[38px]">Goal-Oriented Results</h3>
                    <p className="text-[20px] leading-tight text-slate-700 max-w-sm">Building solutions that ensure every idea leaves a tangible mark on your success story</p>
               </div>
            </div>
            <div className="border-2 flex flex-col justify-center rounded-2xl p-10 items-center bg-[#FAEED7]">
                <div className="max-w-sm">
                    <h3 className="text-start mb-1 font-medium leading-[110%] text-[38px]">Next-Gen Creativity</h3>
                    <p className="text-[20px] leading-tight text-slate-700">Crafting seamless paths to innovation through scalable, transformative technologies</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;