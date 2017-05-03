import React, { Component } from 'react';
import Header from './components/Header';
import EventList from './components/EventList';
import './App.css';

class App extends Component {
  componentWillMount() {
    //TODO: Fetch Events from API
  }
  render() {
    return (
      <div className="App">
        <Header title="Coffee Tunes" subtitle="Discover Artists - Meet for Coffee"/>
        <EventList />
      </div>
    );
  }
}

export default App;
