import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CaseStudy from '../components/CaseStudy';
import AboutTeam from '../components/AboutTeam';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <CaseStudy />
      <AboutTeam />
      <Footer />
    </main>
  );
}
