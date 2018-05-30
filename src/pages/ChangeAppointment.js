import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import './Change.css'


class Change extends Component {
  render() {
    return (
      <div>
        <header className= 'changeBanner'><h1>$$Change Appointment</h1></header>
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
