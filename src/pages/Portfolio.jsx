import TopBanner from '../components/PortfolioCommon.jsx'
import Partner from '../components/PartnersIntegration.jsx'
import WorkingTechnologies from '../components/WorkingTechnologies.jsx'
import Performance from "../components/PerformanceSection.jsx";
import Testimonials from '../components/TestimonialSection.jsx'
import Newsletter from '../components/NewsletterSection.jsx'

function Portfolio() {
  return (
    <>
        <TopBanner/>
        <WorkingTechnologies/>
        <Newsletter/>
    </>
  );
}

export default Portfolio;