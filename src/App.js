import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import EventList from './components/EventList';
import {updateSearch,fetchEvents} from './actions';
import './App.css';

class App extends Component {
  state = {
    eventsLoaded: false
  }
  componentWillMount() {
    this.props.fetchEvents(this.props.data.city);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({eventsLoaded:true})
  }
  
  render() {
    let {events} = this.props.data;
    console.log(events)
    return (
      <div className="App">
        <Header title="Coffee Tunes" subtitle="Discover Artists - Meet for Coffee" />
        {this.state.eventsLoaded ? <EventList events={events} /> : null}
        <div className="App__footer">
          <h5>Built by: Aidan Legaspi</h5>         
        </div>
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
