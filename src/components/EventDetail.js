import React, {Component} from 'react';
import './EventDetail.css';

class EventDetail extends Component {
	state = {
		place: {},
		placeLoaded: false,
		flipped: false
	}
	handleClick() {
		console.log(this.props.latitude)
		// this.setState({flipped:!this.state.flipped})
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
  	console.log(this)
  	// document.querySelector(".event-detail__container").classList.toggle("flip-container-flip")
	}
	render() {
		let {image,name,url,is_free,latitude,longitude} = this.props;
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
						<div className="event-detail__detail">
							<a className="event-detail__link" href={url}><p className="event-detail__description">{name}</p></a>	
						</div>
						<div className="event-detail__coffee event-detail__detail" onClick={this.handleClick.bind(this)}>
							<p className="event-detail__description">Meet Up Spot</p>
						</div>
					</div>
					<div className="event-detail__card_back">
						<div className={`event-detail__is-free-${is_free ? 'box' : 'inactive'}`}><h3 className="event-detail__is-free">{is_free ? 'FREE' : null}</h3></div>
						<img className="event-detail__image" src={placeLoaded ? this.state.place.photos[0].getUrl({'maxWidth': 1000, 'maxHeight': 1000}) : null} alt=""/>
						<div className="event-detail__detail">
							<p className="event-detail__description">{placeLoaded ? `${this.state.place.name} @ ${this.state.place.vicinity}` : null}</p>	
						</div>
						<div className="event-detail__coffee event-detail__detail" onClick={this.handleClick.bind(this)}>
							<p className="event-detail__description">Back</p>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default EventDetail;