
import React from 'react';
import Navbar from './components/navbar'; // Adjust the path as needed
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Workflow from './components/Workflow';
import Footer from './components/footer';
const App = () => {
  return (
    <div>
         <Navbar />
         <div className="max-w-7xl mx-auto pt-20 px-6">
             <HeroSection/>
             <FeatureSection/>
             <Workflow/>
             <Pricing/>
             <Testimonials/>
             <Footer/>
          </div>
      
    </div>
  );
};

export default App;
