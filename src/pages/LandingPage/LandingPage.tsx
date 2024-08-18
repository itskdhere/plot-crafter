import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import SignedOutHeader from "../../components/SignedOutHeader";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import FAQ from "../../components/FAQ";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

const LandingPage = () => {
  return (
    <>
      <ScrollToHashElement />
      <SignedOutHeader />
      <Hero />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
