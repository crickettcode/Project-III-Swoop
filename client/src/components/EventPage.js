import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItineraryPage from './ItineraryPage'

class EventPage extends Component {

    state = {
        user: {},
        event: {}
    }

    componentDidMount() {
        const banana = this.props.match.params.userId
        console.log("One user mounted")

        axios.get(`/api/users/${banana}`)
            .then(response => {
                console.log("one user", response.data)
                this.setState({
                    user: response.data,
                    event: response.data.event
                })
            })
    }

    render() {
        return (
            <div>
                I am the Event Page for {this.state.user.name}
            </div>
        )
    }
}












export default EventPage 