import React, { useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
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
      {/* Full-page gradient background */}
      <div className="min-h-screen gradient-bg">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content with padding for fixed navbar */}
        <div className="pt-16 sm:pt-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center">
              <div className="w-full">
                <Header />
                <div className="bg-[#f1f7fb] dark:bg-[#131f24] backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 mt-6 sm:mt-8 border-2 border-[#b5d2e6] dark:border-[#37464f]">
                  <Home />
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24">
              <div className="bg-[#f1f7fb] dark:bg-[#131f24] backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
                <About />
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24">
              <div className="bg-[#f1f7fb] dark:bg-[#131f24] backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
                <Projects />
              </div>
            </section>

            {/* Work Section */}
            <section id="work" className="py-12 sm:py-16 md:py-20 lg:py-24">
              <div className="bg-[#f1f7fb] dark:bg-[#131f24] backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
                <Work />
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24">
              <div className="bg-[#f1f7fb] dark:bg-[#131f24] backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#b5d2e6] dark:border-[#37464f]">
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
