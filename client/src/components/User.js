import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EventPage from './EventPage'


class User extends Component {

    render() {
        return (
            <div>
                <h4>Here is a user</h4>
                <Link to={`/users/${this.props.user._id}/events`}>Name: {this.props.user.name}</Link>

            </div>
        )
    }
}

export default User 