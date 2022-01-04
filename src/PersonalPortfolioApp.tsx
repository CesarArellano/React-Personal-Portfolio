import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { AboutMeSection } from './components/AboutMeSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { CertificationSection } from './components/CertificationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const PersonalPortfolioApp = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMeSection />
      <ServicesSection />
      <WorkSection />
      <CertificationSection />
      <ContactSection />
      <Footer />
    </>
  )
}
