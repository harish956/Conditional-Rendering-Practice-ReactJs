import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  fun1 = () => {
    this.setState({isLoggedIn: false})
  }

  fun2 = () => {
    this.setState({isLoggedIn: true})
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn ? (
          <button type="button" onClick={this.fun1}>
            Logout
          </button>
        ) : (
          <button type="button" onClick={this.fun2}>
            Login
          </button>
        )}
      </div>
    )
  }
}

export default App
