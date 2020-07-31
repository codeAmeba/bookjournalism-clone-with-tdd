import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Article from '../Components/Article';
import Footer from '../Components/Footer';
import Search from '../Components/Search';

const Main = () => {
	const [ menuOpen, setMenuOpen ] = useState(false);
	const [ searchOpen, setSearchOpen ] = useState(false);
	const [ scrollEvent, setScrollEvent ] = useState(0);
	const [ submitEmail, setSubmitEmail ] = useState([]);

	const menuOpenToggle = () => {
		setMenuOpen(!menuOpen);
	};

	const searchOpenToggle = () => {
		setSearchOpen(!searchOpen);
	};

	return (
		<React.Fragment>
			<GlobalStyle />
			<MainContainer onWheel={() => setScrollEvent(window.scrollY)} data-testid='MainContainer'>
				{menuOpen ? <Menu menuOpenToggle={menuOpenToggle} /> : ''}
				{searchOpen ? <Search searchOpenToggle={searchOpenToggle} /> : ''}
				<Header scrollEvent={scrollEvent} menuOpenToggle={menuOpenToggle} searchOpenToggle={searchOpenToggle} />
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
