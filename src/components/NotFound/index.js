// Write your code here

import Header from '../Header'
import './index.css'

const NotFound = () => {
  return (
    <div className="not-found-card">
      <Header />
      <div className="not-found-img-card">
        <img
          className="not-found-logo-img"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <h1 className="not-found-heading">Lost Your Way?</h1>
        <p className="not-found-para">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  )
}

export default NotFound
