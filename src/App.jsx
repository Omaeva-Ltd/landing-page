
import { createElement } from 'react';
import { HeroSection, Navbar, AboutUs, Services, Test, Project, AcceptingProjects, Testimonial, Cta, Footer} from './components';
import CookieConsent from 'react-cookie-consent';
import { ArticlePage, Blog, HomePage, PrivacyPolicy } from './pages';
import { Routes, Route } from 'react-router-dom';
import Scrollto from './components/Scrollto';


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
    <Scrollto />
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
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:id' element={<ArticlePage />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
    </Routes>
    
    
    
    
    
    
   </main>
  )
}

export default App;