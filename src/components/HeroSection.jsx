// Import the external CSS file for styling this component
import "../styles/HeroSection.css";

// HeroSection is a functional React component that displays a brief intro section
function HeroSection({ menuOpen }) {
  return (
    // Wrapper section with top and bottom margin and center-aligned content
    <section className={`hero-section ${menuOpen ? "blurred" : ""}`}>
      {/* Main heading with bold text and large font size */}
      <h1 className="hero-heading">
        Hello there,
        <p>
          {/* Name highlighted in red */}I am Valentino{" "}
          <span className="highlight">Soto</span>
        </p>
      </h1>

      {/* Short description beneath the heading */}
      <p className="hero-description">
        I am a self taught and aspiring Web Developer; I am eager to show you my
        progress.
      </p>

      {/* Call-to-action button container */}
      <div className="hero-actions">
        <a href="mailto:rtic164@gmail.com">
          <button className="contact-button">Contact Me</button>
        </a>
      </div>
    </section>
  );
}

// Export the component so it can be used in other parts of the app
export default HeroSection;
