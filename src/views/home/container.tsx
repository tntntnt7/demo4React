import * as React from 'react'
import { observer } from 'mobx-react'
import { Store } from './store'
import Home from './presenter'

@observer
export class HomeContainer extends React.Component {

	private _store: Store

	constructor(props: any) {
		super(props)
		this._store = new Store()
	}

	public render(): JSX.Element {
		return (
			<Home
				title={this._store.title}
				children={this.props.children}
				anchorEl={this._store.anchorEl}
				menuList={this._store.menuList}
				isDrawerOpen={this._store.isDrawerOpen}
				drawerOpenStyle={this._store.drawerOpenStyle}
				barDrawerOpenStyle={this._store.barDrawerOpenStyle}
				mainDrawerOpenStyle={this._store.mainDrawerOpenStyle}
				onMenuOpen={this._store.onMenuOpen}
				onMenuClose={this._store.onMenuClose}
				changeTitle={this._store.changeTitle}
				handleDrawer={this._store.handleDrawer}
				getMenuList={this._store.getMenuList}
				logout={this._store.logout}
			/>
		)
	}
}
