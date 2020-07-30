import React from 'react';
import styled from 'styled-components';

const Article = () => {
	return <ArticleContainer data-testid='Article' />;
};

const ArticleContainer = styled.article`
	height: 300vh;
	background-color: pink;
`;

export default Article;
