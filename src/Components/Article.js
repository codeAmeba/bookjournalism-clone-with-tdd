import React from 'react';
import styled from 'styled-components';

const Article = () => {
	return <ArticleContainer data-testid='Article' />;
};

const ArticleContainer = styled.article`
	height: 100vh;
	background-color: #fff;
`;

export default Article;
