import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
	render() {
		let {title, subtitle} = this.props;
		return(
			<div>
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>
		);
	}
}

export default Header;