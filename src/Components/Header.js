import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return <HeaderContainer data-testid='HeaderComponent' />;
};

const HeaderContainer = styled.nav`
	width: 100%;
	height: 10%;
	position: fixed;
	background-color: blue;
`;

export default Header;
