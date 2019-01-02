import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { history } from '../common/utils/history'
import { TodoContainer } from '../views/todo';
import { LoginContainer } from '../views/login';

const NotFound = () => (
	<div>404</div>
)

export default function Routes(): any {
	return (
		<HashRouter>
			<Switch>
				<Route exact path='/' component={LoginContainer} />
				<Route exact path='/todo' component={TodoContainer} />
				<Route component={NotFound}/>
			</Switch>
		</HashRouter>
	)
}
