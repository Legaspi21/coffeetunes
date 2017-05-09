import React, {Component} from 'react';
import SearchBar from './SearchBar';
import './Header.css';

class Header extends Component {
	render() {
		let {title, subtitle} = this.props;
		return(
			<div className="header__container">
				<div className="header__box">
					<h1 className="header__title">{title}</h1>
					<p>{subtitle}</p>
				</div>
				<SearchBar />
				<div className="header__box_logos">
					<img className="header__img" src="http://www.wixeventviewer.com/images/powered_by_eventbrite.png" alt=""/>
				</div>
			</div>
		);
	}
}

export default Header;