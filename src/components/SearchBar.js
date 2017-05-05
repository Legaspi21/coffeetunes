import React, {Component} from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import './SearchBar.css';

class SearchBar extends Component {

  render() {
    return (
      <div className="search-bar">
      	<FaSearch className="search-bar__icon"/>
      	<input className="search-bar__input" type="search" id="search" placeholder="Search by city"/>
      </div>
    );
  }
}

export default SearchBar;