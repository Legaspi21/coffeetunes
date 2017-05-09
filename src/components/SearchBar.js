import React, {Component} from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import {connect} from 'react-redux';
import {updateSearch, fetchEvents} from '../actions';
import './SearchBar.css';

class SearchBar extends Component {
	handleChange(e){
    const text = e.target.value;
    const {updateSearch} = this.props;
    updateSearch(text);
  }
  handleSubmit(e) {
    const {fetchEvents,city} = this.props;
    e.preventDefault();
    console.log(city)
    fetchEvents(city);
  }
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FaSearch className="search-bar__icon"/>
          <input 
          className="search-bar__input" 
          type="search" 
          id="search" 
          placeholder="Search by city"
          onChange={(e) => this.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const {city} = state.data;
    return {city};
}
export default connect(
  mapStateToProps, {
    updateSearch,
    fetchEvents
  }
)(SearchBar);