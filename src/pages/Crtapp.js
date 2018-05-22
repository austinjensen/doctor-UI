import React, { Component } from 'react';
import Navbar from '../components/Navbar'

class Create extends Component {
  render() {
    return (
      <div>
        <header className='banner'><h1>Make a New Appointment</h1></header>
        <Navbar/>
        <main>
          <h2>This Is The Calendar</h2>
          <div>
            <button>Show Open Days</button>
            <button>Make a New Appointment</button>
          </div>
        </main>
      </div>
    );
  }
}

export default Create;
