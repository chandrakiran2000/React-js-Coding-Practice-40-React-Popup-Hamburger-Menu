// Write your code here

import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div className="home-card">
      <Header />
      <div className="home-img-card">
        <img
          className="home-logo-sm"
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
        />
        <img
          className="home-logo-lg"
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
        />
      </div>
    </div>
  )
}

export default Home
