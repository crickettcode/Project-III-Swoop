import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class User extends Component {

    render() {

        return (

            <div>
                <Link to={`/users/${this.props.user._id}`}>{this.props.user.name}</Link>
                {this.props.user.name}
                {this.props.user.dob}
                {this.props.user.email}
                {this.props.user.city}

            </div>


        )

    }
}







export default User 