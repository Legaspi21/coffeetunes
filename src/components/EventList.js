import React, {Component} from 'react';
import EventDetail from './EventDetail';
import './EventList.css';

class EventList extends Component {
	renderEvents() {
		let {events} = this.props;
		return events.map((event) => {
			// TODO replace hardcoded ID with logic to exclude events without sufficient venue information
			if(event.logo && event.id !== '26545388973') {
				console.log(event)
				return(
					<EventDetail 
					key={event.id} 
					name={event.name.text} 
					image={event.logo.url}
					url={event.url}
					is_free={event.is_free}
					latitude={event.latitude}
					longitude={event.longitude} 
					/>
				);
			}
		return;
		});
	}

	render() {
		return(
			<div className="event-list__container">
				{this.renderEvents()}
			</div>
		);
	}
}

export default EventList;