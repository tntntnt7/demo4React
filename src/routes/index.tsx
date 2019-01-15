import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { history } from '../common/utils/history'
import { HomeContainer } from '../views/home';
import { LoginContainer } from '../views/login';

const NotFound = () => (
	<div>404</div>
)

export default function Routes(): any {
	return (
		<HashRouter>
			<Switch>
				<Route exact path='/' component={LoginContainer} />
				<Route exact path='/home' component={HomeContainer} />
				<Route component={NotFound}/>
			</Switch>
		</HashRouter>
	)
}
