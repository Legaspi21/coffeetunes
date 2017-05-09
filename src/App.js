import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import EventList from './components/EventList';
import {updateSearch,fetchEvents} from './actions';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchEvents(this.props.data.city);
  }
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
