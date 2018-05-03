import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class NewUserForm extends Component {


    handlechange
    handlesubmit


    render() {
        return (

            <div>
                <form>
                    <label>
                        name:
                        <input type="text" name="name" />
                        d.o.b
                        <input type="text" dob="dob" />
                        email
                        <input type="text" email="email" />
                        city
                        <input type="text" city="city" />

                    </label>
                </form>
            </div>
        )
    }
}

export default NewUserForm

