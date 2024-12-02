
import { HeroSection, Navbar, AboutUs, Services, Test, Project, AcceptingProjects, Testimonial, Cta} from './components';
import { VelocityScroll } from './components/ui/scroll-based-velocity';

function App() {

  return (
   <main className='relative w-full  font-cabinet'>
    <Navbar />
    <section className='w-full px-[60px] max-sm:px-[30px]'>
      <HeroSection />
    </section>
    <section>
        <div className=" mt-7 flex justify-center items-start video-wrapper overflow-hidden">
          <video autoPlay src="/assets/hero-section.mp4" className="hero-video rounded-xl" muted loop playsInline />
        </div>
    </section>
    <section className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <AboutUs />
    </section>
    <section className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <Services />
    </section>
    <section className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <Project />
    </section>
    {/* <Test /> */}
    <div className='mt-[300px]'>
      {/* <VelocityScroll default_velocity={2} text="· Let's work together" className="text-4xl mb-5 md:text-7xl font-bold "/> */}
    </div>
    <section className='w-full pt-1 px-[60px] max-sm:px-[30px] max-sm:-mt-80 max-sm:mb-52 '>
      <AcceptingProjects />
    </section>
    <section className='w-full pt-1 px-[60px] max-sm:px-[30px]'>
      <Testimonial />
    </section>
    <section className='w-full h-[90vh] pt-1 px-[60px] max-sm:px-[30px]'>
      <Cta />
    </section>
    
   </main>
  )
}

export default App;
