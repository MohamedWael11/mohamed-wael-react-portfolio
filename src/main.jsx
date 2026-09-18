import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import "./styles/base.css";
import "./styles/sections.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <div className="site">
      <div className="noise"></div>
      <div className="cursor-glow"></div>

      <Navbar navItems={navItems} active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Mohamed Wael</span>
        <span>Designed & built with React.js</span>
        <span>Back to top ↑</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
