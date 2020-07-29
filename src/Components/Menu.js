import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GrClose } from 'react-icons/gr';

const Menu = ({ handleClick }) => {
	return (
		<MenuContainer data-testid='Menu'>
			<GrClose className='closeIcon' onClick={handleClick} />
		</MenuContainer>
	);
};

const MenuSlideAnimation = keyframes`
	0% {
		left: -40%;
	}
	100% {
		left: 0;
	}
`;

const MenuContainer = styled.section`
	width: 40%;
	height: 100vh;
	position: absolute;
	z-index: 10;
	font-size: 24px;
	background-color: #fff;
	border-right: 1px solid rgba(0, 0, 0, 1);
	animation: ${MenuSlideAnimation} .3s ease-in-out;

	.closeIcon {
		margin-left: 30px;
		margin-top: 20px;
		cursor: pointer;
		transition: 0.3s ease-in-out;
	}
`;

export default Menu;
