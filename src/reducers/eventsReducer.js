const INITIAL_STATE = {
  events: [],
  city: 'San Francisco'
};
const eventsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_EVENTS':
      return {
        ...state,
        events:action.payload
      }
    case 'UPDATE_SEARCH':
      return {
        ...state,
        city:action.payload
      }
    default:
      return state
  }
}

export default eventsReducer;
