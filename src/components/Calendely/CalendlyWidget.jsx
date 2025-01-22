import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);


    // const interval = setInterval(() => {
    //   const bookingContainer = document.querySelector('div[data-container="booking-container"]');
    //   console.log(bookingContainer);
    //   if(bookingContainer){
    //     bookingContainer.style.border = "1px solid red";
    //     clearInterval(interval);
    //   }
    // },100);


    

    return () => {
      // Clean up script to avoid duplicate loading
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/omaeva1993/chat-with-omaeva?primary_color=800080"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default CalendlyWidget;
