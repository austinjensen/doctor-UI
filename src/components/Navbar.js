import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar'>
                    <button><div><Link exact to="/">Make My Appointment</Link></div></button>
                    <button><div><Link to="/change">Change My Appointment</Link></div></button>
                    <button><div><Link to="/cancel">Cancel My Appointment</Link></div></button>
                </nav>
            </div>
        )
    }
}

export default Navbar