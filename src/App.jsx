import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Projects from './components/Projects';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeProvider';

const HomePage = () => {
  useEffect(() => {
    const handleSmoothScroll = e => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const anchor = t.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        role="main"
        className="pt-16 sm:pt-20 pb-0 min-h-screen w-full"
      >
        <div className="max-w-7xl mx-auto px-4">
          <section id="home" className="min-h-screen flex items-center">
            <Hero />
          </section>
          <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
              <About />
            </div>
          </section>
          <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
              <Projects />
            </div>
          </section>
          <section id="work" className="py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
              <Work />
            </div>
          </section>
          <section
            id="contact"
            className="py-12 sm:py-16 md:py-20 lg:py-24 pb-0"
          >
            <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
              <ContactForm />
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <SpeedInsights />
        <Analytics />
      </Router>
    </ThemeProvider>
  );
}

export default App;
