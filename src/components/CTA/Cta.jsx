import { useState } from "react";
import "./cta.css"

const Cta = () => {

  const [submit, setsubmit] = useState("Submit");

  const web3Key = import.meta.env.VITE_WEB3_FORM;
    // console.log(web3Key);



  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    
    

    formData.append("access_key", web3Key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setsubmit("Submitted successfully!")
    }
  };



  return (
    <div className="w-full h-full border-4 border-black rounded-2xl flex max-lg:flex-col flex-wrap gap-7 p-6 max-sm:p-2">
      <div className="flex-1 rounded-[60px] overflow-hidden h-full">
        <img src="/assets/cta-image-1.jpg" alt="normal image" className="w-full h-full object-cover " />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="font-bold text-[40px] sm:text-[60px] leading-[100%] max-w-xl tracking-tighter ">Have a Vision? Let’s Make It a Reality Together!</h2>
        <p className="text-xl max-sm:text-lg max-sm:leading-[120%] leading-tight max-w-md mt-2">Share your ideas, and let’s collaborate to design impactful solutions tailored just for you</p>
        <form onSubmit={onSubmit} className="mt-3 cta-form">
          
          <input type="text" placeholder="Your name" name="name" required />
          
          <input type="text" placeholder="you@company.com" name="company" required />
          
          <input type="text" placeholder="Tell us a little about your project" name="idea" required/>
          <p className="text-xl font-medium my-4">How can we help?</p>
          <div className="flex gap-3 flex-wrap text-lg ">
            <div>
              <input type="checkbox" id="Website-design" name="Website-design"/>
              <label htmlFor="Website-design" className="ml-2 accent-main">Website design</label>
            </div>
            <div>
              <input type="checkbox"   id="content-creation" name="content-creation"/>
              <label htmlFor="content-creation" className="ml-2 accent-main">Content creation</label>
            </div>
            <div>
              <input type="checkbox"  id="ux-design" name="ux-design" />
              <label htmlFor="ux-design" className="ml-2 accent-main">UX design</label>
            </div>
            <div>
              <input type="checkbox"  id="strategy" name="strategy"/>
              <label htmlFor="strategy" className="ml-2 accent-main">Strategy & consulting</label>
            </div>
            <div>
              <input type="checkbox"  id="micro-interaction" name="micro-interaction"/>
              <label htmlFor="micro-interaction" className="ml-2 accent-main">Micro Interaction</label>
            </div>
            <div>
              <input type="checkbox" id="other" name="other"/>
              <label htmlFor="other" className="ml-2 accent-main">Other</label>
            </div>
          </div>
        <button type="submit" className="w-full bg-main font-semibold text-white p-2 mt-5 rounded-2xl">{submit}</button>
          
        </form>
        
      </div>
    </div>
  )
}

export default Cta;