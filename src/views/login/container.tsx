import * as React from 'react'
import Login from './presenter'
import { Store } from './store'
import { ILoginDialog } from './interface'

export class LoginContainer extends React.Component<ILoginDialog, {}> {

	private _store: Store;

	constructor(props: any) {
		super(props)
		this._store = new Store()
	}

	public render(): JSX.Element {
		return (
			<Login
				open={this.props.open}
				switchDialog={this.props.switchDialog}
				userName={this._store.userName}
				password={this._store.password}
				login={this._store.login}
				register={this._store.register}
				checkNameExist={this._store.checkNameExist}
				onUserNameChange={this._store.onUserNameChange}
				onPasswordChange={this._store.onPasswordChange}
			/>
		)
	}
}
