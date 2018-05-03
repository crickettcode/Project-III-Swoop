import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItineraryPage from './ItineraryPage'
import Button from 'material-ui/Button';



class EventPage extends Component {

    state = {
        user: {},
        events: []
    }

    destroy = () => {
        const user_id = this.props.match.params.userId
        axios.delete(`/api/users/${user_id}`)
            .then(response => {
                this.props.history.push('/users')
                console.log(user_id)
            })
    }


    componentDidMount() {
        const banana = this.props.match.params.userId
        console.log("One user mounted")

        axios.get(`/api/users/${banana}`)
            .then(response => {
                console.log("one user", response.data)
                this.setState({
                    user: response.data,
                    events: response.data.event
                })
            })
    }

    render() {

        return (


            <div>
                <Button variant="raised" color="primary">

                    Destroy
                    <button onClick={this.destroy}></button>
                    <br /> </Button>

                I am the Event Page for {this.state.user.name}
                {this.state.events.map((event) => {
                    return (
                        <div>

                            <Link to={`/users/${this.props.match.params.userId}/events/${event._id}/itinerary`}>{event.date}</Link>

                            <li>{event.description}</li>
                        </div>
                    )
                })}

            </div>
        )
    }
}












export default EventPage 