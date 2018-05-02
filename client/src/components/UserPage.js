import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import User from './User'

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

                <button>Create</button>

                {this.state.users.map((user, i) => {
                    return (
                        <div>
                            <User user={user} key={user._id} index={i} />
                        </div>
                    )
                }
                )}
            </div>


        )
    }
}

export default UserPage