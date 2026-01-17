/* eslint-disable no-unused-vars */
import { Hero, Navbar, About } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Technologies, Experiences, Projects, Blogs, Contact } from "./components";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
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
              <Blogs />
              <Contact />
            </div>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/blogs" element={<AllBlogs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
