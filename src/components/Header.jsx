import React, { useEffect } from 'react'
import '../styles/Header.css'

// Header component displays site name, navigation links, and a responsive menu
export default function Header({ menuOpen, setMenuOpen }) {
  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'

    // Automatically close the menu when window resizes to desktop view
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setMenuOpen(false)
      }
    }

    // Attach and clean up resize listener
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen, setMenuOpen])

  // Toggles the mobile menu open or closed
  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Closes the mobile menu
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Main Header Section */}
      <header>
        {/* Logo / Name on the left */}
        <div className="header-left nameHighlight">Valentino</div>

        {/* Hamburger icon for mobile view */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Desktop navigation (centered) */}
        <nav className="nav-desktop">
          <a
            href="https://github.com/mattino164?tab=repositories"
            target="_blank"
            rel="noopener noreferrer">
            Projects
          </a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </nav>

        {/* "Let's Talk" button on the right (desktop only) */}
        <div className="header-right">
          <a href="mailto:rtic164@gmail.com" className="talk-button">
            Let's Talk
          </a>
        </div>
      </header>

      {/* Full-screen overlay menu for mobile */}
      <div className={`overlay-menu ${menuOpen ? 'open' : ''}`}>
        {/* Close (X) button in top-right */}
        <button className="close-button" onClick={closeMenu}>
          ×
        </button>

        {/* Mobile navigation links */}
        <nav className="overlay-nav">
          <a
            href="https://github.com/mattino164?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}>
            Projects
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a
            href="mailto:rtic164@gmail.com"
            className="talk-button"
            onClick={closeMenu}>
            Let's Talk
          </a>
        </nav>
      </div>
    </>
  )
}
