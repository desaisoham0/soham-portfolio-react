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
    <>
      {/* Full-page gradient background */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content with padding for fixed navbar */}
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center">
              <div className="w-full">
                <Header />
                <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 mt-8">
                  <Home />
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 md:py-24">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
                <About />
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 md:py-24">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
                <Projects />
              </div>
            </section>

            {/* Work & Contact Section */}
            <section id="contact" className="py-16 md:py-24">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                    <Work />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
