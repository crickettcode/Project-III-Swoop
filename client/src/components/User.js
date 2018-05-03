import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EventPage from './EventPage'
import styled from 'styled-components'


class User extends Component {

    render() {
        return (

            <Profilestyle>

                <h4> <Link to={`/users/${this.props.user._id}/events`}>I'm {this.props.user.name}</Link></h4>

            </Profilestyle>

        )
    }
}

export default User

const Profilestyle = styled.div`

display:flex;
justify-content:flex-start;
margin:auto;
border:solid;
font-family: 'Pangolin', cursive;
color:white;
padding:70px;


@media (max-width:650px){

a {
text-align:center;
}



h4{
    display:flex;

    text-align:center;
    font-size: 40px;
    
    
}



}


`