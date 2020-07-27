import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Components/Header';

const Main = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<MainContainer data-testid='MainContainer'>
				<Header />
			</MainContainer>
		</React.Fragment>
	);
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
	}
`;

const MainContainer = styled.main`
	width: 100%;
	height: 100%;
	position: relative;
`;

export default Main;
