import React, {Component} from 'react';
import './EventDetail.css';

class EventDetail extends Component {
	render() {
		let {image,name,url} = this.props;
		return(
			<div className="event-detail__card">
				<img className="event-detail__image" src={image} alt=""/>
				<div className="event-detail__detail">
					<a className="event-detail__link" href={url}><p className="event-detail__description">{name}</p></a>	
				</div>
			</div>
		);
	}
}

export default EventDetail;