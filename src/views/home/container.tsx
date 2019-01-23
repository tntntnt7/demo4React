import * as React from 'react'
import { observer } from 'mobx-react'
import Home from './presenter'
import { Store } from './store'

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
				onMenuOpen={this._store.onMenuOpen}
				onMenuClose={this._store.onMenuClose}
				changeTitle={this._store.changeTitle}
				isDrawerOpen={this._store.isDrawerOpen}
				handleDrawer={this._store.handleDrawer}
				drawerOpenStyle={this._store.drawerOpenStyle}
				barDrawerOpenStyle={this._store.barDrawerOpenStyle}
				mainDrawerOpenStyle={this._store.mainDrawerOpenStyle}
				getMenuList={this._store.getMenuList}
				menuList={this._store.menuList}
			/>
		)
	}
}
