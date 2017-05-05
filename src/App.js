import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import EventList from './components/EventList';
import {TOKEN} from './Key';
import './App.css';

class App extends Component {
  state = {
    events: [],
    city: 'New York'
  }
  componentWillMount() {
    //TODO: Fetch Events from API
    const self = this;
    const {city} = this.state;
    axios.get('https://www.eventbriteapi.com/v3/events/search/', {
      params: {
        token: TOKEN,
        categories: '103',
        'location.address': city,
        'location.within': '25mi'
      }
    })
    .then(function (response) {
      self.setState({events:response.data.events});
      // console.log(response.data.events);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    let {events} = this.state;
    console.log(events)
    return (
      <div className="App">
        <Header title="Coffee Tunes" subtitle="Discover Artists - Meet for Coffee"/>
        {events.length > 1 ? <EventList events={events} /> : null}
      </div>
    );
  }
}

export default App;
