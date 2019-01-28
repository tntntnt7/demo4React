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
				{...this.props}
				{...this._store}
			/>
		)
	}
}
