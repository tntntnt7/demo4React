import * as React from 'react'
import Login from './presenter';

export class LoginContainer extends React.Component<{}, {}> {

	constructor(props: any) {
		super(props)
	}

	public render(): JSX.Element {
		return (
			<Login
				onLoginNameChange={null}
				onPasswordChange={null}
				doLogin={null}
			/>
		)
	}
}
