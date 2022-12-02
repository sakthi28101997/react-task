import './App.css';
import Header from '../src/Header/header'
import Services from './Services/Services';
import Price from './Price/Price';
import CallToAction from './CallToAction/CallToAction';
import Testimonial from './Testimonial/Testimonial';
import ClientLogo from './ClientLogo/ClientLogo';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Services />
        <Price />
        <CallToAction />
        <Testimonial />
        <ClientLogo />
        <Contact />
        <Footer />
        <a className="back-to-top" href="#"><i className="lni-chevron-up"></i></a>
    </div>
  );
}

export default App;
