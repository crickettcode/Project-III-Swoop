import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class HomePage extends Component {
    state = {
        users: [],
        user: {
            name: "",
            dob: "",
            email: "",
            city: ""
        }

    }


    componentDidMount() {
        this.getAllUsers()

    }


    getAllUsers = async () => {
        try {
            await axios.get('/api/users')
            this.setState({
                users: response.data
            })

        } catch (err) {
            console.log(err.message)
        }

    }



    render() {
        return (
            <div>
                <div>
                    Phone Home
                </div>
                HomePage
            </div>
        )
    }
}

export default HomePage 