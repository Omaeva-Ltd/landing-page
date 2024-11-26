
import { HeroSection, Navbar} from './components'

function App() {

  return (
   <main className='relative w-full px-[60px] max-sm:px-[30px] font-cabinet'>
    <Navbar />
    <section className='w-full'>
      <HeroSection />
    </section>
   </main>
  )
}

export default App;
