import './App.css';
import { Component } from 'react';
import AppBar from './components/AppBar';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage'

let onlineNotification = "Your application is offline. You won't be able to share or stream music to other devices."
let volumeNotification = "Listening to music at a high volume could cause long-term hearing loss."
let qualityNotification = "Music quality is degraded. Increase quality if your connection allows it."

class App extends Component {

  state = {
    loggedIn: false,
    online: false,
    volume: 20,
    quality: 3,
    notifications: [onlineNotification],
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
    this.setState({volume: newVolume})
  };

  setQuality = (event) => {
    this.setState({quality: event.target.value})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.online !== prevState.online) {
      this.onlineNotificationFunc()
    } else if (this.state.volume !== prevState.volume) {
      let prevVol = prevState.volume;
      let newVol = this.state.volume;
      this.volumeNotificationFunc(prevVol, newVol);
    } else if (this.state.quality !== prevState.quality) {
      this.qualityNotificationFunc()
    }
  }

  onlineNotificationFunc = () => {
    if (!this.state.online) {
      this.setState({notifications: [...this.state.notifications].concat(onlineNotification)})
    } else if (this.state.online) {
      let i = this.state.notifications.findIndex((element) => {
        return element === onlineNotification
      })

      console.log(i)

      let copyOfNotifications = this.state.notifications;
      copyOfNotifications.splice(i, 1);
      this.setState({notifications: copyOfNotifications});
    } 
  }


  volumeNotificationFunc = (prevVol, newVol) => {
    if (newVol > 80 && prevVol <= 80) {
      this.setState({notifications: [...this.state.notifications].concat(volumeNotification)})
    } else if (prevVol > 80 && newVol <= 80) {
      let i = this.state.notifications.findIndex((element) => {
        return element === volumeNotification
      })

      console.log(i)

      let copyOfNotifications = this.state.notifications;
      copyOfNotifications.splice(i, 1);
      this.setState({notifications: copyOfNotifications});
    }
  }

  qualityNotificationFunc = () => {
    if (this.state.quality === 1) {
      this.setState({notifications: [...this.state.notifications].concat(qualityNotification)})
    } else if (this.state.quality > 1) {
      let i = this.state.notifications.findIndex((element) => {
        return element === qualityNotification
      })

      console.log(i)

      let copyOfNotifications = this.state.notifications;
      copyOfNotifications.splice(i, 1);
      this.setState({notifications: copyOfNotifications});
    }
  }

  render() {

    return (
    <div className="App">
      <AppBar />
      
      {this.state.loggedIn ? 
      (<Dashboard 
        setOnline={this.setOnline} 
        setVolume={this.setVolume} 
        volume={this.state.volume}
        setQuality={this.setQuality}
        quality={this.state.quality}
        notifications={this.state.notifications}
      />) : 
      (<LoginPage onLoginClick={this.setLogin}/>)
      }

    </div>
    )

  }
}

export default App;
