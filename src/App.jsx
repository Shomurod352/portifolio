import React from "react";
import "./App.css"
import Header from "./components/header/Header";
import Building from "./components/building/Building";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <div>
      <Header />
      <Building />
      <Portfolio />
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
