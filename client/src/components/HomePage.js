import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


class HomePage extends Component {

    render() {
        return (

            <Homestyle>

                <h1> Swoop</h1>
                <p>The app that makes the Plan, so that you can be Spontaneous</p>
                <footer>
                    <Link to='/users'>Try Me</Link>
                </footer>

            </Homestyle>)
    }

}



export default HomePage


const Homestyle = styled.div`

    flex-direction: column;
background:#FFF1D2;
padding:45px;

p {
    font-family:"cursive";

}

footer{
    background: #4C979B;
    color:whitesmoke;
    border-radius:20px;
}

a {
    color:white;
}

h1{
    display:flex;
    justify-content:center;
    font-family:"cursive";

}
section {
  flex-grow: 1;
}

@media (max-width: 400px){
  main {
    flex-direction: column;
  }




`




