import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class NewUserForm extends Component {



    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name:
                        <input onChange={this.handleChange} type="text" name="name" />
                        d.o.b
                        <input onChange={this.handleChange} type="text" dob="dob" />
                        email
                        <input onChange={this.handleChange} type="text" email="email" />
                        city
                        <input onChange={this.handleChange} type="text" city="city" />

                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewUserForm

