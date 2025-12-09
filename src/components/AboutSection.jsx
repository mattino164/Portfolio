import React from 'react'
// Import the CSS file that contains styles for this component
import '../styles/AboutSection.css'

// Import skill logo images from assets folder
import HtmlLogo from '../assets/Images/HtmlLogo.png'
import CssLogo from '../assets/Images/CssLogo.png'
import JsLogo from '../assets/Images/JsLogo.png'
import NodejsLogo from '../assets/Images/NodejsLogo.png'
import MongoLogo from '../assets/Images/MongoLogo.png'
import PostmanLogo from '../assets/Images/PostmanLogo.png'
import ReactLogo from '../assets/Images/ReactLogo.png'
import TypescriptLogo from '../assets/Images/TypescriptLogo.png'
import SassLogo from '../assets/Images/SassLogo.png'

// Functional React component to display About section and skill bars
export default function Skills({ menuOpen }) {
  // Array of skill objects with name, and logo image
  const skills = [
    { name: 'HTML', logo: HtmlLogo },
    { name: 'CSS', logo: CssLogo },
    { name: 'JavaScript', logo: JsLogo },
    { name: 'Node.js', logo: NodejsLogo },
    { name: 'MongoDB', logo: MongoLogo },
    { name: 'Postman', logo: PostmanLogo },
    { name: 'React', logo: ReactLogo },
    { name: 'TypeScript', logo: TypescriptLogo },
    { name: 'Sass', logo: SassLogo },
  ]

  return (
    <section
      id="about"
      className={`about-section ${menuOpen ? 'blurred' : ''}`}>
      <div className="about-box">
        {/* Section title */}
        <h2 className="about-title">About Me</h2>

        {/* Brief personal introduction */}
        <p>
          I was first introduced to web development while pursuing a degree in
          game development. Although I had always liked the idea of coding, it
          wasn`t until I started learning HTML and CSS that everything really
          clicked. I found it easier to digest and fell in love with how I could
          express creativity through design and layout.
        </p>
        <p>
          Through Colt Steele`s Web Developer Bootcamp on Udemy, I`ve gained
          hands-on experience and confidence in JavaScript, and I`ve grown to
          enjoy backend development with tools like Node.js, Mongoose, Postman,
          and AJAX. I`ve also gotten uste to using React through my own personal
          projects and am excited to continue improving.
        </p>
        <p>
          While I know I still have more to learn, I`m highly motivated to grow
          in this field and committed to becoming a reliable, hard-working
          developer who adds value to every team I join
        </p>
      </div>

      <div id="skills" className="skills-section">
        {/* Skills subsection header */}
        <h3 id="skills">Skills</h3>

        {/* Skills grid container */}
        <div className="skills-grid">
          {/* Map over skills array to render each skill item */}
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item-box">
              {/* Skill logo image */}
              <img src={skill.logo} alt={skill.name} />
              {/* Skill name */}
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
