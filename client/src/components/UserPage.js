import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserPage extends Component {

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

                {this.state.users.map(user => {
                    return (
                        <div></div>
                    )
                }
                )}
            </div>
        )
    }
}

export default UserPage