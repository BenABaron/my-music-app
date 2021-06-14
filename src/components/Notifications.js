import React, { Component } from 'react';



class Notifications extends Component {

  render() { 
    const { text } = this.props
    return (
      <li style={{listStyleType: 'none', fontSize: '16pt', marginTop: '30pt'}}>
        {text}
      </li>
    );
  }
}

export default Notifications;