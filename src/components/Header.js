import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
	render() {
		let {title, subtitle} = this.props;
		return(
			<div className="header__container">
				<h1 className="header__title">{title}</h1>
				<p>{subtitle}</p>
			</div>
		);
	}
}

export default Header;