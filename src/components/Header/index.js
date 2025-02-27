// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-main-card">
    <div className="header-card">
      <Link to="/" className="nav-link">
        <img
          className="header-logo-img"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
            aria-label="Open menu"
          >
            <GiHamburgerMenu size="40" />
          </button>
        }
      >
        {close => (
          <>
            <div className="pop-up-card">
              <div className="close-card">
                <button
                  type="button"
                  className="trigger-button close-bg"
                  data-testid="closeButton"
                  aria-label="close menu"
                  onClick={() => close()}
                >
                  <IoMdClose size="40" />
                </button>
              </div>
              <ul className="home-about-card">
                <Link to="/" className="nav-link">
                  <li className="li">
                    <div className="home-icon-card">
                      <AiFillHome className="icon-size" />
                      <h1 className="home-icon-card-text">Home</h1>
                    </div>
                  </li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className="li">
                    <div className="about-icon-card">
                      <BsInfoCircleFill className="icon-size" />
                      <h1 className="about-icon-card-text">About</h1>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
