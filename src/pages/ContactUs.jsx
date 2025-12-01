import TopBanner from '../components/ContactCommon.jsx'
import Contactform from '../components/Contactform.jsx'
import CompanyContact from '../components/CompanyContact.jsx'
import Map from '../components/MapSection.jsx'
import Faq from '../components/NexoraFAQ.jsx'
import Partner from '../components/PartnersIntegration.jsx'
import Newsletter from '../components/NewsletterSection.jsx'

function ContactUs() {
  return (
    <>
         <Contactform/>
         <CompanyContact/>
          <Map/>
        
      
       
        <Newsletter/>
    </>
  );
}

export default ContactUs;