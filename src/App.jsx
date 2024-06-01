import About from "./components/About/About";
import Counter from "./components/Counter/Counter";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import Services from "./components/Services/Services";
import { Testimonials } from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Digital Air Condition - Top AC Servicesr</title>
        <meta
          name="description"
          content="Comprehensive Cooling and Air Conditioning Solutions in Abu Dhabi - Digital Air Condition"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Digital Air Condition" />
        <meta charset="UTF-8" />
        <meta name="language" content="en-US" />
        <meta name="language" content="ar-SA" />

        {/* Social Media Optimization */}
        <meta
          property="og:title"
          content="Top AC Services | Digital Air Condition (Abu Dhabi)"
        />
        <meta
          property="og:description"
          content="Cool any space with Digital Air Condition expert AC solutions. Contact us today!"
        />

        {/* <meta
          property="og:image"
          content="https://yourwebsite.com/social-media.png"
        /> */}
      </Helmet>
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
