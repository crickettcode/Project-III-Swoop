import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import User from './User'
import NewUserForm from './NewUserForm'

class UserPage extends Component {

    state = {
        form: false,
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

    toggleform = () => {
        this.setState({ form: !this.state.form })
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

    createNewUser = (newUser => {
        axios.post(`/api/users`, { newUser })
            .then((res) => {
                this.setState({ user: res.data.user })
            })
    })

    render() {
        return (
            <div>
                {this.state.form ? <NewUserForm /> : null}
                <button onClick={this.toggleform}>Create</button>

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