import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const Info = ({ infoOpenToggle }) => {
	return (
		<InfoContainer data-testid='Info'>
			<AiOutlineClose className='closeIcon' data-testid='closeIcon' onClick={infoOpenToggle} />
		</InfoContainer>
	);
};

const InfoSlideAnimation = keyframes`
	0% {
		bottom: -300px;
		opacity: 0;
	}
	100% {
		bottom: 0;
		opacity: 1;
	}
`;

const InfoContainer = styled.aside`
	width: 100%;
	height: 300px;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	z-index: 20;
	animation: ${InfoSlideAnimation} .3s ease-in-out;
	border-top: 1px solid rgba(0, 0, 0, 1);

	.closeIcon {
		font-size: 25px;
		position: absolute;
		top: 20px;
		left: 30px;
		cursor: pointer;

		&:hover {
			color: #0166ff;
		}
	}
`;

export default Info;
