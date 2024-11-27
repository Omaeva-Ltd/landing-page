
import { HeroSection, Navbar, AboutUs} from './components'

function App() {

  return (
   <main className='relative w-full px-[60px] max-sm:px-[30px] font-cabinet'>
    <Navbar />
    <section className='w-full'>
      <HeroSection />
    </section>
    <section className='w-full pt-1'>
      <AboutUs />
    </section>
    
   </main>
  )
}

export default App;
