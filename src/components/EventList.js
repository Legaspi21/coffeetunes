import React, {Component} from 'react';
import EventDetail from './EventDetail';
import './EventList.css';

class EventList extends Component {
	renderEvents() {
		let {events} = this.props;
		return events.map((event) => {
			if(event.logo) {
				return(
					<EventDetail 
					key={event.id} 
					name={event.name.text} 
					image={event.logo.url}
					url={event.url} 
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