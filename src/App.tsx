import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsCanvas from './components/canvas/Stars';
import Loader from './components/Loader';
import { useLoader } from './hooks/useLoader';

function App() {
  const { isLoading, progress, setIsLoaded } = useLoader();

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoaded();
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoaded]);

  return (
    <div className="relative z-0">
      {isLoading ? (
        <Loader progress={progress} />
      ) : (
        <>
          <div className="bg-dark-950 overflow-hidden">
            <div className="relative z-10">
              <Navbar />
              <div className="relative">
                <Hero />
                <StarsCanvas />
              </div>
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Achievements />
              <Contact />
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;