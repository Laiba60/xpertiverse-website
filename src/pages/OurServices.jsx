import TopBanner from '../components/Services.jsx'
import OfferServices from '../components/OfferServices.jsx'
import Performance from '../components/PerformanceSection.jsx'
import HeroTech from "../components/HeroTechSection";
import Services from "../components/ServicesSection";

import Solution from "../components/SolutionSection";
import Blog from '../components/BlogSection.jsx'
import Newsletter from '../components/NewsletterSection.jsx'

function OurServices() {
  return (
    <>
        <TopBanner/>
        
         <Services/>
        
        <Performance/>
        <HeroTech/>
        <Newsletter/>
    </>
  );
}

export default OurServices;