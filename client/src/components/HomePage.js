import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


class HomePage extends Component {

    render() {
        return (

            <Homestyle>

                <h1> Swoop</h1>

                <footer>
                    <Link to='/users'>Try Me</Link>
                </footer>

            </Homestyle>)
    }

}



export default HomePage


const Homestyle = styled.div`

    flex-direction: column;



h1{

}
section {
  flex-grow: 1;
}

@media (max-width: 400px){
  main {
    flex-direction: column;
  }




`




