import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { HomeContainer } from '../views/home'
import { fragments } from './fragments'
import NotFound from '../views/notFound'


const renderFragments = () => fragments.map((cell, index) => (
	<Route key={index} path={cell.path} component={cell.fragment}/>
))

const renderHome = ({ match }) => (
	<HomeContainer>
		{ renderFragments() }
		<Route key={-1} exact path={match.path} component={NotFound}/>
	</HomeContainer>
)

export default function Routes(): any {
	return (
		<HashRouter>
			<Switch>
				<Route path='/' component={renderHome} />
			</Switch>
		</HashRouter>
	)
}
