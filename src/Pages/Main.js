import React from 'react';
import styled from 'styled-components';

const Main = () => {
	return <MainContainer data-testid='MainContainer'>Hello</MainContainer>;
};

const MainContainer = styled.main`
	width: 100%;
	height: 100%;
`;

export default Main;
