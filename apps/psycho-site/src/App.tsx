import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problems } from "./components/Problems";
import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { Pricing } from "./components/Pricing";
import { Stats } from "./components/Stats";
import { Reviews } from "./components/Reviews";
import { Faq } from "./components/Faq";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <About />
      <Approach />
      <Pricing />
      <Stats />
      <div id="reviews">
        <Reviews />
      </div>
      <Faq />
      <ContactForm />
      <Footer />
    </>
  );
}
