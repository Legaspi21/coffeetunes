import React, {Component} from 'react';
import EventDetail from './EventDetail';
import './EventList.css';

class EventList extends Component {
	render() {
		return(
			<div className="event-list__container">
				<EventDetail />
				<EventDetail />
			</div>
		);
	}
}

export default EventList;