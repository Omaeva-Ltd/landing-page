
import { createElement } from 'react';
import { HeroSection, Navbar, AboutUs, Services, Test, Project, AcceptingProjects, Testimonial, Cta, Footer} from './components';
import CookieConsent from 'react-cookie-consent';

function App() {

  function loadGoogleAnalytics(){
    console.log("reading");
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZLLTLVZ031";
    document.head.appendChild(script);

    const internalScript = document.createElement("script");
    internalScript.textContent = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-ZLLTLVZ031');`;

    document.head.appendChild(internalScript);
  }

  return (
   <main className='relative w-full  font-cabinet'>
    <CookieConsent
    enableDeclineButton
    declineButtonText="Reject all"
    onDecline={() => {console.log("User has declined cookies")}}
    declineButtonStyle={{backgroundColor: "#F2290F", color: "#FFFFFF", borderRadius: "30px", padding: "5px 18px"}}
    onAccept={() => {
      console.log("User has accepted cookies");
      loadGoogleAnalytics();
      }
    }
      style={{backgroundColor: "#000000", color: "#FFFFFF", alignItems: "center"}}
      buttonStyle={{backgroundColor: "#800080", color: "#FFFFFF", borderRadius: "30px", padding: "5px 18px"}}
      expires={150}
    >
      We use cookies to ensure you have the best experience on our website and to analyze site usage via Google Analytics.
    </CookieConsent>
    <Navbar />
    <section className='w-full px-[60px] max-sm:px-[30px]'>
      <HeroSection />
    </section>
    <section>
        <div className=" mt-7 flex justify-center items-start video-wrapper overflow-hidden">
          <video autoPlay src="/assets/hero-section.mp4" className="hero-video rounded-xl" muted loop playsInline />
        </div>
    </section>
    <section id='about' className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <AboutUs />
    </section>
    <section id='services' className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <Services />
    </section>
    <section id='projects' className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <Project />
    </section>
    <section className='w-full px-[60px] max-sm:px-[30px] my-[100px] md:mt-[180px] max-sm:mb-[220px]'>
      <AcceptingProjects />
    </section>
    <section className='w-full pt-1 px-[80px] max-sm:px-[30px]'>
      <Testimonial />
    </section>
    <section id='cta' className='w-full lg:h-[100vh] mt-[100px] pt-1 px-[60px] max-sm:px-[30px]'>
      <Cta />
    </section>
    <footer className='w-full px-[60px] max-sm:px-[30px]'>
      <Footer />
    </footer>
    
   </main>
  )
}

export default App;
