import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import ActivityDetails from '../components/Activitydetails'
import './Create.css'

class Create extends Component {
  render() {
    return (
      <div>
        <header className='createBanner'><h1>Make a New Appointment//</h1></header>
        <Navbar/>
        <main>
          <h2>This is a personal calendar</h2>
          <div className='buttonarea'>
            <ActivityDetails/>
            <button>Make a New Appointment</button>
          </div>
        </main>
      </div>
    );
  }
}

export default Create;
