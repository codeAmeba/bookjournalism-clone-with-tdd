import React from 'react';
import styled from 'styled-components';

const Search = () => {
	return (
		<SearchContainer data-testid='SearchContainer'>
			<h1>hello world</h1>
		</SearchContainer>
	);
};

const SearchContainer = styled.section`
	width: 100%;
	height: 40%;
`;

export default Search;
