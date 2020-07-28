import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
	return (
		<HeaderContainer>
			<GiHamburgerMenu className='menuIcon' data-testid='menuIcon' />
			<h1>BOOK JOURNALISM</h1>
			<AiOutlineUser className='userIcon' data-testid='userIcon' />
		</HeaderContainer>
	);
};

const HeaderContainer = styled.nav`
	width: 100%;
	height: 10%;
	position: fixed;
	top: 0;
	transition: .3s ease-in-out;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 24px;

	h1 {
		font-size: 24px;
		font-weight: 400;
		cursor: pointer;
	}

	.menuIcon {
		margin-left: 30px;
		cursor: pointer;
	}
	.userIcon {
		margin-right: 30px;
		cursor: pointer;
	}

	@media only screen and (max-width: 990px) {
		height: 55px;
		border-bottom: 1px solid rgba(0, 0, 0, 1);
	}
`;

export default Header;
