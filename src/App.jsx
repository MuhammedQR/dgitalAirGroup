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
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Digital Air Condition - Top AC Services</title>
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
      <Title subTitle={t("servicesSubTitle")} Title={t("servicesTitle")} />
      <Services />
      <Title
        subTitle={t("SubTitleAchievements")}
        Title={t("AchievementsTitle")}
      />
      <Counter />
      <div className="container">
        <About />

        <Title
          subTitle={t("SubTitleTestimonials")}
          Title={t("TestimonialsTitle")}
        />
        <Testimonials />
        <Title subTitle={t("ContactSubTitle")} Title={t("ContactTitle")} />
        <Contact />

        <Footer />
      </div>
    </div>
  );
};

export default App;
