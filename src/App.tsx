import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Reviews } from '@/components/sections/Reviews';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
