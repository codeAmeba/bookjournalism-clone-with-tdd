import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import Detail from './Pages/Detail';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Main} />
				<Route path='/detail' component={Detail} />
				<Route path='/detail/:id' component={Detail} />
			</Switch>
		</Router>
	);
};

export default Routes;
