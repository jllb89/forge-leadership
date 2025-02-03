import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Team />
      <About />
      <VideoSection />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}