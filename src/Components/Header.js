import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ handleClick }) => {
	return (
		<HeaderContainer>
			<GiHamburgerMenu className='menuIcon' onClick={handleClick} data-testid='menuIcon' />
			<h1>BOOKJOURNALISM</h1>
			<div>
				<AiOutlineSearch className='searchIcon' data-testid='searchIcon' />
				<AiOutlineUser className='userIcon' data-testid='userIcon' />
			</div>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	width: 100%;
	height: 10%;
	background-color: #fff;
	position: fixed;
	top: 0;
	transition: .3s ease-in-out;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 24px;

	h1 {
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 3px;
		cursor: pointer;
		font-family: Verdana;
	}

	.menuIcon {
		margin-left: 30px;
		cursor: pointer;
		transition: 0.2s ease-in-out;

		&:hover {
			color: #0166ff;
		}
	}
	.searchIcon {
		margin-right: 20px;
		cursor: pointer;
		position: absolute;
		right: 50px;
		transition: 0.2s ease-in-out;

		&:hover {
			color: #0166ff;
		}
	}
	.userIcon {
		margin-right: 30px;
		cursor: pointer;
		transition: 0.2s ease-in-out;

		&:hover {
			color: #0166ff;
		}
	}

	@media only screen and (max-width: 990px) {
		height: 55px;
		border-bottom: 1px solid rgba(0, 0, 0, 1);
	}
`;

export default Header;
