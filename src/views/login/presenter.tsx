import * as React from 'react'
import { login } from './interface';
import { history } from '../../common/utils/history';

export default class Login extends React.Component<login, {test: string}> {

	constructor(props: any) {
		super(props)
		this.state = {
			test: 'abc'
		}
	}

	public go = () => history.push('/todo')
	
	public forward = () => history.goForward()

  public render(): JSX.Element {
    return (
			<div>
				<div onClick={this.go}>
					niko
				</div>
				<h1/>
				<div onClick={this.forward}>
					goForward
				</div>
			</div>
		)
	}
}
