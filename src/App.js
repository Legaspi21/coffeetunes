import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Header from './components/Header';
import EventList from './components/EventList';
// import {TOKEN} from './Key';
import {updateSearch,fetchEvents} from './actions';
import './App.css';

class App extends Component {
  state = {
    events: [],
    city: 'New York'
  }
  componentWillMount() {
    // //TODO: Fetch Events from API
    // const self = this;
    // const {city} = this.props.data;
    // axios.get('https://www.eventbriteapi.com/v3/events/search/', {
    //   params: {
    //     token: TOKEN,
    //     categories: '103',
    //     'location.address': city,
    //     'location.within': '25mi'
    //   }
    // })
    // .then(function (response) {
    //   self.setState({events:response.data.events});
    //   // console.log(response.data.events);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    this.props.fetchEvents(this.props.data.city);
  }
  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchEvents(nextProps.data.city);
  // }
  render() {
    let {events} = this.props.data;
    return (
      <div className="App">
        <Header title="Coffee Tunes" subtitle="Discover Artists - Meet for Coffee" />
        {events.length > 1 ? <EventList events={events} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {data} = state;
    return {data};
}

export default connect(
  mapStateToProps, {
    updateSearch,
    fetchEvents
  }
)(App);
