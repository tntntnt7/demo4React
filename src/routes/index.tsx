import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Loadable from 'react-loadable'
import { HomeContainer } from '../views/home'
import { fragments } from './fragments'
import NotFound from '../views/notFound'

// const Loading = () => <div>Loading...</div>

// const beLazy = fragment => Loadable({
// 	loader: () => import('../views/todo'),
// 	loading: Loading,
// })


const renderFragments = () => fragments.map((cell, index) => (
	<Route key={index} path={cell.path} component={cell.fragment}/>
))

const renderHome = ({ match }) => (
	<HomeContainer>
		{ renderFragments() }
		{/* <Route key={-1} exact path={match.path} component={NotFound}/> */}
		<Route key={-1} exact path='/' component={() => <h1>欢迎页面</h1>}/>
	</HomeContainer>
)

// @hot(module)
// export default class Routes extends React.Component {
// 	public render(): JSX.Element {
// 		return (
// 			<HashRouter>
// 				<Switch>
// 					<Route path='/' component={renderHome} />
// 				</Switch>
// 			</HashRouter>
// 		)
// 	}
// }

export default function Routes(): any {
	return (
		<HashRouter>
			<Switch>
				<Route path='/' component={renderHome} />
			</Switch>
		</HashRouter>
	)
}
