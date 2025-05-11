import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItworks.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

