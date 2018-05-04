import React, { Component } from 'react'
import Link from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'



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
            <Itinerarystyle>
                <h1>Hello I am the Itinerary</h1>
                <section>
                    I am the Itinerary page for </section><aside>{this.state.event.description}</aside>
                {this.state.itinerary.map((itinerary, i) => {

                    return (

                        <footer>
                            <ul>
                                <li>{itinerary.title}</li>
                                <li>{itinerary.description}</li>
                                <li>{itinerary.duration}</li>
                            </ul>
                        </footer>
                    )
                })}

            </Itinerarystyle>
        )
    }
}



export default ItineraryPage

const Itinerarystyle = styled.div`

  min-height: 100vh;
  margin: 0 auto;
  font-family: 'cursive';
  background:#4C979B;
  display: flex;
  color: whitesmoke;
  flex-direction: column;
  justify-content: space-between;
  align-content:center;
}

header, main {
  width: 100%;
  height: 10px;
  background: #FFE77D;
  color: black;
  text-align: center;
  line-height: 50px;
}

footer {
  flex-grow: 1;
  background: #FFEFAC;
  display: flex;
  justify-content: space-around;
  font-size:55x;
  color:#4C979B;
  border:solid;
  border-radius:20px;
  align-items:center
}

aside {
    display:flex;
    justify-content:center;
    border-radius:20px;
font-family:'Courier New', Courier, monospace;
    font-size: 20px;
}

 section {
  flex-basis: 100px;
  /* background: #990012; */
  background: #FFEFAC; 
  border-radius: 10px;
  margin: 5px;
  color:#4C979B;
  text-align: center;
  line-height: 100px;
}

section {
  flex-grow: 1;
  font-family:'cursive';
  font-size: 20px;
}

@media (max-width: 400px){
  main {
    flex-direction: column;
  }

}

`