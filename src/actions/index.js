import axios from 'axios';
import {TOKEN} from '../Key';

const updateEvents = (dispatch, events) => {
  dispatch({
    type: 'UPDATE_EVENTS',
    payload: events
  });
};

export const updateSearch = (text) => {
  return {
    type: 'UPDATE_SEARCH',
    payload: text,
  }
}



export const fetchEvents = (city) => {
  return (dispatch) => {
  // dispatch({ type: UPDATE_EVENTS });
  axios.get('https://www.eventbriteapi.com/v3/events/search/', {
	  params: {
	    token: TOKEN,
	    categories: '103',
	    'location.address': city,
	    'location.within': '25mi'
	  }
	})
  .then(response => updateEvents(dispatch, response.data.events)
    // console.log(response.data.events);
  )
  .catch(function (error) {
    console.log(error);
  });
  };
};

