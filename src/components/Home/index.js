import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTextClassName = isDarkTheme
        ? 'home-text-light'
        : 'home-text-dark'

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      return (
        <>
          <Navbar />
          <div className={`container ${homeBgClassName}`}>
            <div>
              <img src={homeImgUrl} className="container-img" alt="home" />
              <h1 className={`main-heading ${homeTextClassName}`}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
