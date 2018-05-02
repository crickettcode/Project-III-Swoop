import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class User extends Component {

    render() {
        return (

            <div>
                {this.props.user.name}
            </div>


        )

    }
}







export default User 