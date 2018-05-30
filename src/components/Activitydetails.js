import React, { Component } from 'react'
import './Activitydetails.css'

class ActivityDetails extends Component {
    render() {
        return (
            <form>
                <div><label>name:</label><input /></div>
                <div><label>time:</label><input /></div>
                <div><label>reason:</label><input /></div>
                <div><label>contact info:</label><input /></div>
            </form>
        )
    }
}

export default ActivityDetails;