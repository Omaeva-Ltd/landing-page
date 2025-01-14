import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
        <div className="flex flex-wrap space-y-2 justify-between py-8 sm:py-20">
            <h2 className='font-bold max-sm-flex-1 text-[40px] sm:text-[60px]  tracking-tighter max-w-xl leading-[100%] max-sm:mb-5'>Deliver bold, innovative, effective solutions</h2>
            <p className="self-end max-sm-flex-1 text-lg leading-[130%] max-w-xs">Our expertise lies in building and scaling next-generation digital products and IT solutions for modern businesses.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid-rows-2 sm:gap-6 max-sm:space-y-6">
            <div className="border-2 flex flex-col one-div justify-center items-start rounded-2xl p-10 md:min-h-80 bg-[#E1EDDA] ">
                <div className="max-w-sm">
                    <h3 className="text-start mb-1 font-medium text-black leading-[110%] text-[30px] sm:text-[38px]">Bold Innovation</h3>
                    <p className="text-[16px] sm:text-[20px] text leading-tight text-slate-700 max-w-lg">Tailoring intuitive solutions to deliver on-the-go adaptability and unmatched efficiency</p>
                </div>                
            </div>
            <div className="border-2 lg:col-span-2 flex flex-col one-div justify-center rounded-2xl p-10 items-center  bg-[#E8F9FF]">
                <div className="max-w-sm">
                    <h3 className="text-start mb-1 text-black font-medium leading-[110%] text-[30px] sm:text-[38px]">Flawless Performance</h3>
                    <p className="text-[16px] text sm:text-[20px] leading-tight text-slate-700 max-w-sm">Elevating user satisfaction with performance-driven solutions that never compromise</p>
                </div>
            </div>
            <div className="border-2 lg:col-span-2 one-div flex flex-col justify-center rounded-2xl p-10 items-center bg-[#FAE5CF] ">
               <div className="max-w-sm">
                    <h3 className="text-start mb-1 text-black font-medium leading-[110%] text-[30px] sm:text-[38px]">Goal-Oriented Results</h3>
                    <p className="text-[16px] text sm:text-[20px] leading-tight text-slate-700 max-w-sm">Building solutions that ensure every idea leaves a tangible mark on your success story</p>
               </div>
            </div>
            <div className="border-2 flex one-div flex-col justify-center rounded-2xl p-10 items-center bg-[#FAEED7]">
                <div className="max-w-sm">
                    <h3 className="text-start mb-1 text-black font-medium leading-[110%] text-[30px] sm:text-[38px]">Next-Gen Creativity</h3>
                    <p className="text-[16px] text sm:text-[20px] leading-tight text-slate-700">Crafting seamless paths to innovation through scalable, transformative technologies</p>
                </div>
            </div>
        </div>
        {/* <div className="flex justify-between">
            <div class="one-div">
                <div class="text">Next-Gen Creativity</div>
            </div>
            <div class="one-div">
                <div class="text">Next-Gen Creativity</div>
            </div>
            <div class="one-div">
                <div class="text">Next-Gen Creativity</div>
            </div>
            <div class="one-div">
                <div class="text">Next-Gen Creativity</div>
            </div>

        </div> */}
    </div>
  )
}

export default AboutUs;