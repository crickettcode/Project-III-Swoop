import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


class HomePage extends Component {

    render() {
        return (

            <Homestyle>

                <h1> Swoop</h1>
                <br />
                <p>The app that makes the Plan, so that you can be Spontaneous</p>
                <footer>
                    <Link to='/users'>Try Me</Link>
                </footer>
                <br />

            </Homestyle>



        )
    }

}



export default HomePage


const Homestyle = styled.div`

    flex-direction: column;
background:#FFF1D2;
padding:65px;

margin:0 auto;

p {
    font-family:"cursive";
padding:50px;

font-size:17px;
margin:0 auto;

}

footer{
    background: #4C979B;
    color:whitesmoke;
    border-radius:20px;
    padding:50px;
    margin:0 auto;

  
}

a {
    color:white;
    font-family:'cursive';
    font-size:20px;
}

h1{
    display:flex;
    justify-content:center;
    font-family:"cursive";
    padding:30px;
    font-size:70px;

}
section {
  flex-grow: 2;
}

@media (max-width: 400px){
  main {
    flex-direction: column;
  }




`




