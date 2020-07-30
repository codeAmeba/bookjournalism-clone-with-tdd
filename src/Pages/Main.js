import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Article from '../Components/Article';
import Footer from '../Components/Footer';

const Main = () => {
	const [ menuOpen, setMenuOpen ] = useState(false);
	const [ scrollPosition, setScrollPosition ] = useState(0);

	const onToggle = () => {
		setMenuOpen(!menuOpen);
	};

	const getScrollPosition = () => {
		setScrollPosition(window.scrollY);
	};

	return (
		<React.Fragment>
			<GlobalStyle />
			<MainContainer onWheel={getScrollPosition} data-testid='MainContainer'>
				{menuOpen ? <Menu onToggle={onToggle} /> : ''}
				<Header scrollPosition={scrollPosition} onToggle={onToggle} />
				<Article />
				<Footer />
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
