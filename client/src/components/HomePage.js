import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class HomePage extends Component {

    render() {
        return (

            <div>

                HomePage

                <div>
                    <Link to='/users'>Enter Here</Link>
                </div>

            </div>)
    }

}



export default HomePage 