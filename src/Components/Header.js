import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

const Header = ({ onToggle, scrollPosition }) => {
	return (
		<HeaderContainer scrollPosition={scrollPosition === 0} data-testid='Header'>
			<AiOutlineMenu className='menuIcon' onClick={onToggle} data-testid='menuIcon' />
			<h1>BOOK JOURNALISM</h1>
			<div>
				<AiOutlineSearch className='searchIcon' data-testid='searchIcon' />
				<AiOutlineUser className='userIcon' data-testid='userIcon' />
			</div>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	width: 100%;
	height: 60px;
	background-color: #fff;
	position: fixed;
	top: 0;
	transition: .3s ease-in-out;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 24px;
	border-bottom: ${props => (props.scrollPosition ? 'none' : '1px solid rgba(0, 0, 0, 1)')};

	h1 {
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 3px;
		cursor: pointer;
		font-family: Times;
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
