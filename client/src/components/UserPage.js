import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import User from './User'
import NewUserForm from './NewUserForm'
import styled from 'styled-components'



class UserPage extends Component {

    state = {

        users: [],

        newUser: {

            name: "",
            dob: "",
            email: "",
            city: "",
        },

        form: false,


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

    handleChange = (event) => {
        const newUser = { ...this.state.newUser }
        newUser[event.target.name] = event.target.value
        this.setState({ newUser })
    }


    handleSubmit = async event => {
        event.preventDefault()
        const payload = {
            name: this.state.newUser.name,
            dob: this.state.newUser.dob,
            email: this.state.newUser.email,
            city: this.state.newUser.city

        }
        console.log('calling axios with payload:', payload)
        await axios.post(`/api/users`, payload);


    }

    createNewUser = async event => {
        event.preventDefault()
        const res = await axios.post("/api/users", this.state.newUser)
        const users = [...this.state.users, res.data]
        this.setState({
            newUser: {

                name: "",
                dob: "",
                email: "",
                city: "",
            },

        })
    }
    toggleform = () => {
        this.setState({ form: !this.state.form })
    }
    render() {
        return (
            <Formstyle>
                {this.state.form ? <NewUserForm
                    createNewUser={this.createNewUser}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    newUser={this.state.newUser}
                    getAllUsers={this.getAllUsers} /> : null}
                <button onClick={this.toggleform}>Create a New Profile</button>

                {this.state.users.map((user, i) => {
                    return (
                        <UserDiv>
                            <User user={user} key={user._id} index={i} />

                        </UserDiv>

                    )

                }
                )}
            </Formstyle>


        )
    }
}

export default UserPage

const Formstyle = styled.div`

margin:auto;
font-family: 'cursive';
color:#466A46;
border: solid;
border-width:30px;
background:#C8DEC8;
border-color:#466A46;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:10px;
font-size:35px;
text-align:center;
width: 100vw;

@media (max-width:650px){
    
        align-items: center;
    


}

button {
    display:flex;
    justify-content:center;
    border:solid;
    padding:15px;
}

user {
    color:white;
    border:solid;

}

`
const UserDiv = styled.div`
@media (max-width:650px){
    width: 80vw;
}
`