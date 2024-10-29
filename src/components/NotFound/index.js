import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      const notFoundTitleClassName = isDarkTheme
        ? 'not-found-title-light'
        : 'not-found-title-dark'

      const notFoundTextClassName = isDarkTheme
        ? 'not-found-text-light'
        : 'not-found-text-dark'

      return (
        <>
          <Navbar />
          <div className={`container ${notFoundBgClassName}`}>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                className="container-img"
                alt="not found"
              />
              <h1 className={`title ${notFoundTitleClassName}`}>
                Lost Your Way?
              </h1>
              <p className={`msg ${notFoundTextClassName}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
