/* eslint-disable no-unused-vars */
import { Hero } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Technologies, Experiences, Projects } from "./components";
import AllProjects from "./components/AllProjects";
import "ui-neumorphism/dist/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="dark-background min-h-screen">
              <Hero />
              <Technologies />
              <Experiences />
              <Projects />
            </div>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
