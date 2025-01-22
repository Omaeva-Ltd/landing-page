import Earth from "../ui/Earth";
import { useState } from "react";

import Calendar from "./Calendar";

const Calendely = () => {

  

    
  return (
    <div className="grid grid-cols-1 justify-center gap-10 lg:grid-cols-2">
      <div className=" max-w-max mx-auto">
        <Calendar />
      </div>
     <div className=" flex justify-center items-center relative">
        {/* <Globe className="max-w-md" /> */}
        <Earth glowColor={[1,1,1]} baseColor={[1,1,1]} markerColor={[128 / 255, 0 / 255, 128 / 255]} scale={1.2} />
      </div>
        
        
    
    </div>
  )
}

export default Calendely;