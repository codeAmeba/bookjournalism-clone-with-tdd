import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return <HeaderContainer data-testid='HeaderComponent' />;
};

const HeaderContainer = styled.nav`
	width: 100%;
	height: 10%;
	position: fixed;
	top: 0;
	background-color: blue;
	transition: .5s ease-in-out;

	@media only screen and (max-width: 990px) {
		height: 55px;
	}
`;

export default Header;
