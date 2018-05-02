import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EventPage from './EventPage'


class User extends Component {

    render() {
        return (
            <div>
                <Link to={`/users/${this.props.user._id}/events`}>{this.props.user.name}</Link>

            </div>
        )
    }
}

export default User 