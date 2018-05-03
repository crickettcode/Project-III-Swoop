import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class NewUserForm extends Component {



    render() {
        return (

            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        name:
                        <input onChange={this.props.handleChange} type="text" name="name" placeholder="name" value={this.props.newUser.name} />
                        d.o.b
                        <input onChange={this.props.handleChange} type="text" name="dob" placeholder="dob" value={this.props.newUser.dob} />
                        email
                        <input onChange={this.props.handleChange} type="text" name="email" placeholder="email" value={this.props.newUser.email} />
                        city
                        <input onChange={this.props.handleChange} type="text" name="city" placeholder="city" value={this.props.newUser.city} />

                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewUserForm

