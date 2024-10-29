import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickBtn = () => {
        toggleTheme()
      }

      const navbarBg = isDarkTheme ? 'navbar-bg-dark' : 'navbar-bg-light '

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'

      return (
        <nav className={`${navbarBg}`}>
          <div className="navbar-container">
            <img
              src={websiteLogoUrl}
              alt="website logo"
              className="navbar-logos"
            />
            <ul className="navbar-list">
              <li>
                <Link to="/" className={`link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              className="button"
              type="button"
              onClick={onClickBtn}
              data-testid="theme"
            >
              <img
                src={`${themeImgUrl}`}
                alt="theme"
                className="navbar-logos"
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
