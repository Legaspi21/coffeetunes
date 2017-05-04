import React, {Component} from 'react';
import './EventDetail.css';

class EventDetail extends Component {
	render() {
		return(
			<div className="event-detail__card">
				<img className="event-detail__image" src="http://static.stereogum.com/uploads/2015/01/Blink-182.png" alt=""/>
				<div className="event-detail__detail">
					<p className="event-detail__description">Blink-182</p>	
				</div>
			</div>
		);
	}
}

export default EventDetail;