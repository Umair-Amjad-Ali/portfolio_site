/* eslint-disable no-unused-vars */
import { Hero, Navbar, About, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Technologies, Experiences, Projects, EngineeringDeepDives, Contact } from "./components";
import AllProjects from "./components/AllProjects";
import { AllDeepDives } from "./components";
import "ui-neumorphism/dist/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="dark-background min-h-screen">
              <Hero />
              <About />
              <Technologies />
              <Experiences />
              <Projects />
              <EngineeringDeepDives />
              <Contact />
            </div>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/deep-dives" element={<AllDeepDives />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
