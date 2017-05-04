import React, {Component} from 'react';
import './EventDetail.css';

class EventDetail extends Component {
	render() {
		return(
			<div className="event-detail__card">
				<img className="event-detail__image" src={this.props.image} alt=""/>
				<div className="event-detail__detail">
					<p className="event-detail__description">{this.props.name}</p>	
				</div>
			</div>
		);
	}
}

export default EventDetail;