import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainContent from "./components/layout/MainContent";

function Pokedex() {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
      <Footer />
    </React.Fragment>
  );
}

export default Pokedex;
