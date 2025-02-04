// import {Component} from 'react'

import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {inputName, meetingMsg, onSetDefaultValues} = value

      const setDefaultValues = () => {
        onSetDefaultValues()
      }

      return (
        <div className="home-container">
          <nav className="nav-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </nav>
          <div className="home-body-card">
            {inputName.length > 0 ? (
              <h1>Hello {inputName}</h1>
            ) : (
              <h1>Welcome to Meetup</h1>
            )}
            {inputName.length > 0 ? (
              <p>Welcome to {meetingMsg}</p>
            ) : (
              <p>Please register for the topic</p>
            )}
            <Link to="/register">
              <button
                type="button"
                className="register-btn"
                onClick={setDefaultValues}
              >
                Register
              </button>
            </Link>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="meetup-image"
            />
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
