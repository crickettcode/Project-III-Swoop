import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ItineraryPage from './ItineraryPage'
import styled from 'styled-components'
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


            <Eventstyle>
                {/* <Button variant="raised" color="primary"> */}
                {/* Destroy */}
                <Button variant="raised" color="secondary" onClick={this.destroy}>Destroy</Button>
                {/* <br /> </Button> */}

                I am the Event Page for {this.state.user.name}
                {this.state.events.map((event) => {
                    return (
                        <section>

                            <Link to={`/users/${this.props.match.params.userId}/events/${event._id}/itinerary`}>{event.date}</Link>

                            <li>{event.description}</li>
                        </section>
                    )
                })}

            </Eventstyle>
        )
    }
}












export default EventPage


const Eventstyle = styled.div`
min-height: 100vh;
  margin: 0 auto;
  font: 12pt Comic Sans MS;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

nav, section, aside {
  flex-basis: 100px;
  background: #F4C9D0;
  color:whitesmoke;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  line-height: 100px;
}

    section {
  flex-grow: 1;
}

}

`