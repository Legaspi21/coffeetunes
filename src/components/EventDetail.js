import React, {Component} from 'react';
import './EventDetail.css';

class EventDetail extends Component {
	state = {
		place: {},
  	placeLoaded: false,
  	flipped: false
	}
	handleClick() {
		const coffee = require('nearest-coffee')
  	coffee({ 
      location: [this.props.latitude, this.props.longitude], 
      radius: 100,
      limit: 1,
      rankBy: 'distance'
  	}, (err, data) => {
      if (err) 
        throw err
   		let place = data[0];
   		this.setState({place:place});
   		this.setState({placeLoaded:true});
   		this.setState({flipped:!this.state.flipped})
  	})
	}
	render() {
		let {image,name,url,is_free,latitude,longitude,date} = this.props;
		let displayDate = new Date(date).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' });
		let {placeLoaded} = this.state;
		if (placeLoaded) {
			let {photos,vicinity} = this.state.place;
		}
		return(
			<div className={`event-detail__container flip-container ${this.state.flipped ? 'flip-container-flip' : ''}`}>
				<div className="event-detail__card flipper">
					<div className="event-detail__card_front">
						<div className={`event-detail__is-free-${is_free ? 'box' : 'inactive'}`}><h3 className="event-detail__is-free">{is_free ? 'FREE' : null}</h3></div>
						<img className="event-detail__image" src={image} alt=""/>
						<a className="event-detail__link" href={url}><div className="event-detail__detail event-detail__cta">
							<p className="event-detail__description">{`${name} - ${displayDate}`}</p>	
						</div></a>
						<div className="event-detail__coffee event-detail__detail event-detail__font-white" onClick={this.handleClick.bind(this)}>
							<p className="event-detail__description">☕ Meet Up Spot ☕</p>
						</div>
					</div>
					<div className="event-detail__card_back">
						<img className="event-detail__image" src={placeLoaded ? this.state.place.photos[0].getUrl({'maxWidth': 1000, 'maxHeight': 1000}) : null} alt=""/>
						<div className="event-detail__detail event-detail__no-highlight">
					{/*TODO: Link to a map */}
							<p className="event-detail__description">{placeLoaded ? `${this.state.place.name} @ ${this.state.place.vicinity}` : null}</p>	
						
						</div>
						<div className="event-detail__coffee event-detail__detail event-detail__font-white" onClick={this.handleClick.bind(this)}>
							<p className="event-detail__description">Back</p>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default EventDetail;