import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { Helmet } from 'react-helmet';
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Images
import icon from './assets/soham_icon.svg';

// Pages
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
    <Helmet>
        <link rel="icon" href={icon} />
      </Helmet>
    <BrowserRouter>
      {/* Full-page gradient background */}
      <div className="min-h-screen bg-gradient-to-b from-teal-700 to-teal-900">
        <div className="max-w-7xl mx-auto px-4">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <main className="py-8">
                    {/* Container for about, work, and contact */}
                    <div
                      className="
                        bg-white/85
                        backdrop-blur-md 
                        rounded-2xl 
                        shadow-xl 
                        p-6 md:p-8 lg:p-10
                        mb-8
                        transition-all duration-300
                      "
                    >
                      <div className="flex flex-col md:flex-row gap-8">
                        {/* About Section */}
                        <div className="md:w-2/3">
                          <About />
                        </div>

                        {/* Work + Contact */}
                        <div className="md:w-1/2 space-y-6">
                          <div
                            className="
                              rounded-2xl 
                              border border-zinc-100 
                              p-4 md:p-6
                              transition-all duration-300 
                              hover:shadow-lg
                            "
                          >
                            <Work />
                          </div>
                          <div
                            className="
                              rounded-2xl 
                              border border-zinc-100 
                              p-4 md:p-6
                              transition-all duration-300 
                              hover:shadow-lg
                            "
                          >
                            <ContactForm />
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </>
              }
            />

            {/* Contact & Projects Pages */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
    </>
  );
}

export default App;
