// Import the CSS file for styling the footer
import "../styles/Footer.css";

// Import social media icons from React Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Footer component includes copyright
// and social media icons with links
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Copyright text */}
        <p className="footer-text">© 2025 Re:write. All rights reserved.</p>

        {/* Social media icons with external links */}
        <div className="social-icons">
          <a
            href="https://github.com/mattino164"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/valentino-soto-97720a212"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
