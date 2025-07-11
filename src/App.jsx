import HeroSection from './components/HeroSection';
import CustomerSuccess from './components/CustomerSuccess';
import GuidedActionSection from './components/GuidedActionSection';
import UseCasesSection from './components/UseCasesSection';
import Expectations from './components/Expectations';
import Integrations from './components/Integrations';
import EarlyAccessBanner from './components/EarlyAccessBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HeroSection />
      <CustomerSuccess/>
      <GuidedActionSection/>
      <UseCasesSection/>
      <Expectations/>
      <Integrations/>
      <EarlyAccessBanner/>
      <Footer/>
    </div>
  );
}

export default App;

