import React from "react";
import "./App.css";
import SectionOne from "./components/sectionone/sectionone";
import SectionTwo from "./components/sectiontwo/sectiontwo";
import SectionThree from "./components/sectionthree/sectionthree";
import SectionFour from "./components/sectionfour/sectionfour";
import SectionFive from "./components/sectionfive/sectionfive";
import SectionSix from "./components/sectionsix/sectionsix";
import SectionSeven from "./components/sectionseven/sectionseven";
import SectionEight from "./components/sectioneight/sectioneight";
import SectionNine from "./components/sectionnine/sectionnine";
import SectionTen from "./components/sectionten/sectionten";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="whole-container">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionEight />
      <SectionSeven />
      <SectionNine />
      <SectionTen />
      <Footer/>
    </div>
  );
}

export default App;
