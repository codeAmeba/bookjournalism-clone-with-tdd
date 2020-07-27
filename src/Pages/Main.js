import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const Main = () => {
	return (
		<MainContainer data-testid='MainContainer'>
			<Header />
		</MainContainer>
	);
};

const MainContainer = styled.main`
	width: 100%;
	height: 100%;
`;

export default Main;
