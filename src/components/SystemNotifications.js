import React, { Component } from 'react';
import Notifications from './Notifications'

class SystemNotifications extends Component {

  state = {

  }

  render() { 
    return (
      <div>
        <h2 style={{fontSize: '30pt', marginTop: '40pt'}}>System Notifications</h2>
        <ul style={{marginTop: '40pt'}}>{this.props.notifications.map((notification, index) => {
          return <Notifications key={index} text={notification}/>
        })}</ul>
      </div>

    );
  }
}

export default SystemNotifications;