import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'
import RegisterContext from './context/RegisterContext'

// Replace your code here
class App extends Component {
  state = {inputName: '', meetingMsg: 'Arts and Culture', isEmpty: false}

  onClickChangeName = e => {
    this.setState({inputName: e.target.value})
  }

  onClickMeetingName = e => {
    this.setState({meetingMsg: e.target.value})
  }

  goToHomeRoute = () => {
    const {history} = this.props
    history.replace('/')
  }

  onChangeEmpty = e => {
    if (e.target.value === '') {
      this.setState({isEmpty: true})
    } else {
      this.setState({isEmpty: false})
    }
  }

  onSetDefaultValues = () => {
    this.setState({
      inputName: '',
      meetingMsg: 'Arts and Culture',
      isEmpty: false,
    })
  }

  render() {
    const {inputName, meetingMsg, isEmpty} = this.state
    return (
      <RegisterContext.Provider
        value={{
          inputName,
          meetingMsg,
          isEmpty,
          onClickChangeName: this.onClickChangeName,
          onClickMeetingName: this.onClickMeetingName,
          goToHomeRoute: this.goToHomeRoute,
          onChangeEmpty: this.onChangeEmpty,
          onSetDefaultValues: this.onSetDefaultValues,
        }}
      >
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </RegisterContext.Provider>
    )
  }
}

export default App
