// Write your code here

import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-card">
    <Header />
    <div className="about-img-card">
      <img
        className="about-logo-sm"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
      <img
        className="about-logo-lg"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default About
