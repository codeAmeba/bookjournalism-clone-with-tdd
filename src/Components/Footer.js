import React from 'react';
import styled from 'styled-components';
import { BsInfoCircle, BsChevronRight } from 'react-icons/bs';

const Footer = () => {
	return (
		<FooterContainer data-testid='Footer'>
			<div>
				<BsInfoCircle className='infoIcon' data-testid='infoIcon' />
				<span> Info</span>
			</div>
			<form>
				<label>
					Weekly Newsletter
					<input type='email' placeholder='Your email here' />
				</label>
				<BsChevronRight className='arrowIcon' type='submit' />
			</form>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	height: 200px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 30px;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		.infoIcon {
			font-size: 25px;
		}

		span {
			margin-left: 7px;
			font-size: 18px;
		}
	}

	form {
		position: relative;
		font-size: 19px;
		font-weight: 200;
		letter-spacing: 1px;

		input {
			width: 260px;
			height: 35px;
			border: none;
			border-bottom: 1px solid rgba(0, 0, 0, 1);
			margin-left: 15px;
			font-size: 20px;
			outline: none;

			&::placeholder {
				font-size: 15px;
				color: rgba(0, 0, 0, 0.3);
			}
		}

		.arrowIcon {
			position: absolute;
			right: -5px;
			bottom: 8px;
			cursor: pointer;
		}
	}
`;

export default Footer;
