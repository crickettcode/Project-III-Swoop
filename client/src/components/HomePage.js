import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    state = {

    }


    componentDidMount() {

    }


    getAllUsers = async () => {
        try {
            await axios.get()

        } catch (err) {
            console.log(err.message)
        }

    }



    render() {
        return (
            <div>
                <div>
                    This is your mom
                </div>
                HomePage
            </div>
        )
    }
}

export default HomePage 