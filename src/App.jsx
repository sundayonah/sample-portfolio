import React from "react";
import Header from "./components/header/Header";
import About from "./components/About/About";
import Experience from "./components/experience/Experience";
import Nav from "./components/Nav/Nav";
// import Testimonials from "./components/testimonia/Testimonia";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
