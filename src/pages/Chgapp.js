import React, { Component } from 'react';
import Navbar from '../components/Navbar'


class Change extends Component {
  render() {
    return (
      <div>
        <header className= 'banner'><h1>Change Appointment</h1></header>
        <Navbar/>
        <main>
          <h2>This Is The Calendar</h2>
          <div>
            <button>Change My Appointment</button>
          </div>
        </main>
      </div>
    );
  }
}

export default Change;
