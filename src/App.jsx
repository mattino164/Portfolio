import React, { useState } from "react";

// Import global styles
import "./App.css";

// Import main layout components
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  // State to track whether the mobile navigation menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header component receives menu state and toggle function as props */}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main content gets a blur effect when the mobile menu is open */}
      <div className={menuOpen ? "blurred" : ""}>
        {/* Hero section (intro / banner area) */}
        <HeroSection menuOpen={menuOpen} />

        {/* About and Skills section */}
        <AboutSection menuOpen={menuOpen} />

        {/* Footer at the bottom of the page */}
        <Footer />
      </div>
    </>
  );
}

export default App;
