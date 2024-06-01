import About from "./components/About/About";
import Counter from "./components/Counter/Counter";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import Services from "./components/Services/Services";
import { Testimonials } from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title
        subTitle={"Our Services"}
        Title={
          "We offer a comprehensive suite of services, encompassing everything from design and installation to maintenance and repair"
        }
      />
      <Services />
      <Title
        subTitle={"Our achievements"}
        Title={"17 years of success in ventilation solutions"}
      />
      <Counter />
      <div className="container">
        <About />

        <Title subTitle={"TESTIMONIALS"} Title={"What Customers Says"} />
        <Testimonials />
        <Title subTitle={"Contact Us"} Title={"Get in touch"} />
        <Contact />

        <Footer />
      </div>
    </div>
  );
};

export default App;
