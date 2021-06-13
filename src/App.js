import './App.css';
import { Component } from 'react';
import AppBar from './components/AppBar';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage'

class App extends Component {

  state = {
    loggedIn: false,
    online: false,
    volume: 20
  }

  setLogin = (value) => {
    this.setState({loggedIn: value});
  }

  setOnline = () => {
    let isOnline = !this.state.online;
    this.setState({online: isOnline});
    console.log(isOnline);
  }

  setVolume = (event, newVolume) => {
    console.log("Volume changed")
  };

  render() {

    return (
    <div className="App">
      <AppBar />
      
      {this.state.loggedIn ? 
      (<Dashboard setOnline={this.setOnline} setVolume={this.setVolume} volume={this.state.volume}/>) : 
      (<LoginPage onLoginClick={this.setLogin}/>)
      }

    </div>
    )

  }
}

export default App;
