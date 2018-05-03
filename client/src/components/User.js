import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EventPage from './EventPage'
import styled from 'styled-components'


class User extends Component {

    render() {
        return (

            <Profilestyle>
                <h4></h4>
                <Link to={`/users/${this.props.user._id}/events`}>I'm {this.props.user.name}</Link>

            </Profilestyle>

        )
    }
}

export default User

const Profilestyle = styled.div`

display:flex;
color:


`