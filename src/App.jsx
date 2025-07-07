import React, { useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Projects from './components/Projects';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeProvider';

function App() {
  // Smooth scrolling functionality
  useEffect(() => {
    const handleSmoothScroll = e => {
      const href = e.target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Add event listeners to all hash links
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <ThemeProvider>
      {/* Main container without redundant background */}
      <div className="min-h-screen w-full">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content with padding for fixed navbar */}
        <div className="pt-16 sm:pt-20 pb-0 min-h-screen w-full">
          <div className="max-w-7xl mx-auto px-4">
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center">
              <Hero />
            </section>

            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24">
              <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
                <About />
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24">
              <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
                <Projects />
              </div>
            </section>

            {/* Work Section */}
            <section id="work" className="py-12 sm:py-16 md:py-20 lg:py-24">
              <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
                <Work />
              </div>
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="py-12 sm:py-16 md:py-20 lg:py-24 pb-0"
            >
              <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
                <ContactForm />
              </div>
            </section>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
