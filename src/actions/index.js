import axios from 'axios';
// import coffee from 'nearest-coffee';
// import yelp from 'yelp-fusion';
import {
  TOKEN, 
  PERSONAL_TOKEN, 
  // YELP_OAUTH_TOKEN, 
  // CLIENT_ID as clientId, 
  // CLIENT_SECRET as clientSecret, 
  // GOOGLE_API_KEY
} from '../Key';

const updateEvents = (dispatch, events) => {
  dispatch({
    type: 'UPDATE_EVENTS',
    payload: events
  });
};

const updateCoffeeShop = (dispatch, place) => {
  dispatch({
    type: 'NEAREST_COFFEE_SHOP',
    payload: place
  });
}

export const updateSearch = (text) => {
  console.log(text)
  return {
    type: 'UPDATE_SEARCH',
    payload: text,
  }
}

export const fetchEvents = (city) => {
  var eventArray = [];
  return (dispatch) => {
  axios.get('https://www.eventbriteapi.com/v3/events/search/', {
	  params: {
	    token: TOKEN,
	    categories: '103',
	    'location.address': city,
	    'location.within': '5mi'
	  }
	})
  .then(response => {
    const {events} = response.data;
    events.forEach(event => {
      let {venue_id} = event;
      axios.get(`https://www.eventbriteapi.com/v3/venues/${venue_id}/`, {
        params: {
          token: PERSONAL_TOKEN
        },
      })
      .then(response => {
        event.latitude = response.data.latitude;
        event.longitude = response.data.longitude;
        eventArray.push(event)
      })
      .then(() => {
        setTimeout(() => updateEvents(dispatch, eventArray),0)
      })
      .catch(function (error) {
        console.log("error")
        console.log(error);
      });
    })   
  })
  .catch(function (error) {
    console.log(error);
  });
  };
};

// export const fetchNearestCoffeeShop = (dispatch) => {
//   const {latitude,longitude} = dispatch;
//   return (dispatch) => {
//     const coffee = require('nearest-coffee')
//     coffee({ 
//       location: [latitude, longitude], 
//       radius: 100,
//       limit: 1,
//       rankBy: 'distance'
//     }, (err, data) => {
//       if (err) 
//         throw err
//       let place = data[0];
//       updateCoffeeShop(dispatch, place);
//     })
//   }
// }
// TODO: Resolve CORS problem and use YELP API. Create proxy node server

// const getNearestCoffeeShop = (latitude,longitude) => {
  
// // console.log(YELP_OAUTH_TOKEN(clientId,clientSecret))
//   // const client = yelp.client(YELP_OAUTH_TOKEN,{mode: 'no-cors'});

//   // client.search({
//   //   term:'Coffee',
//   //   limit: 1,
//   //   location: location
//   // }, {mode: 'no-cors'}).then(response => {
//   //   console.log(response.jsonBody.businesses[0].name);
//   // });
//   // TODO: Resolve CORS problem and use GOOGLE PLACES API as a backup
//   // axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
//   //   params: {
//   //     location:`${latitude},${longitude}`,
//   //     radius:500,
//   //     term:'Coffee',
//   //     limit:1,
//   //     key:GOOGLE_API_KEY
//   //   },
//   //   mode: 'no-cors',
//   // })
//   // .then(response => {
//   //   console.log('YOOOOOOOOOOOOOOOOOOO')
//   //   console.log(response.results);
//   // })
//   // .catch(error => {
//   //   console.log(error);
//   // })

//   const coffee = require('nearest-coffee')
//   coffee({ 
//       location: [latitude, longitude], 
//       radius: 100,
//       limit: 1,
//       rankBy: 'distance'
//   }, (err, data) => {
//       if (err) 
//           throw err
   
//       let places = data.map((d) => {
//           return d.name
//       })
   
//       console.log(places)
//   })
// }