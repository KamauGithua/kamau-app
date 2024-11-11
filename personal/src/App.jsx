import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/features/Feature';
import Projects from './components/projects/Projects';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';

const App = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText px-4'>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
};

export default App;
