import React, { Component } from 'react'
import Link from 'react-router-dom'
import axios from 'axios'




class ItineraryPage extends Component {

    state = {
        event: {},
        itinerary: []
    }

    componentDidMount() {
        const item = this.props.match.params.userId
        const eventId = this.props.match.params.eventId
        console.log('eventId from Itinerary page: ', eventId)

        axios.get(`/api/users/${item}/event/${eventId}/itinerary`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    event: response.data,
                    itinerary: response.data.itinerary
                })
            })
    }

    render() {

        return (
            <div>
                <h1>Hello from the ininerary</h1>
                I am the Itinerary page for {this.state.event.description}
                {this.state.itinerary.map((itinerary, i) => {
                    return (
                        <div>
                            <ul>
                                <li>{itinerary.title}</li>
                                <li>{itinerary.description}</li>
                                <li>{itinerary.duration}</li>
                            </ul>
                        </div>
                    )
                })}

            </div>
        )
    }
}



export default ItineraryPage