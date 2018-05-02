import React, { Component } from 'react'
import Link from 'react-router-dom'
import axios from 'axios'



class ItineraryPage extends Component {

    state = {
        user: {},
        event: {},
        itinerary: []
    }

    componentDidMount() {
        const item = this.props.match.params.userId
        const eventId = this.props.match.params.eventId
        console.log(item)

        axios.get(`/api/users/${item}/event/${eventId}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    user: response.data,
                    event: response.data.event,
                    itinerary: response.data.itinerary
                })
            })
    }

    render() {
        return (
            <div>
                I am the Itinerary page for {this.state.event}
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