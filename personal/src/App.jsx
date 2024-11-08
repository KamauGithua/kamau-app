import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/banner';
import Features from './components/features/Feature';
import Projects from './components/projects/Projects';
import Testimonial from './components/testimonial/Testimonial';

const App = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText px-4'>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Testimonial />
      </div>
    </div>
  );
};

export default App;
