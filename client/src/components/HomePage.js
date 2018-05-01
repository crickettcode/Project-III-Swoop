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
            const res = await axios.get('api/users')
            console.log(res.data)
            this.setState({ users: res.data })
        } catch (err) {
            console.log(err)
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