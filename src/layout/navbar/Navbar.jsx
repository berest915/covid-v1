import React from 'react';
import { Nav, Span, LeftContainer, RightContainer } from './Styles';
import logo from '../../images/nav-logo-big.png';
import './navbar.css';

const Navbar = () => {
	return (
		<>
			<Nav>
				<LeftContainer>
					<img src={logo} alt='coronavirus-logo' />
					<div>
						<span className='span'>Covid-19 Statistic Tracker</span>
						<Span light> @berest915</Span>
					</div>
				</LeftContainer>
				<RightContainer>
						<button className='pad'>About</button>
						<button>Support</button>
				</RightContainer>
			</Nav>
			
		</>
	);
};

export default Navbar;
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
