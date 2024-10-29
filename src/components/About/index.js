import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'

      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      return (
        <>
          <Navbar />
          <div className={`container ${aboutBgClassName}`}>
            <div>
              <img src={aboutImgUrl} className="container-img" alt="about" />
              <h1 className={`main-heading ${aboutTextClassName}`}>About</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
