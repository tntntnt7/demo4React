import * as React from 'react'
import { todo } from './interface';
import { history } from '../../common/utils/history';

export default class Todo extends React.Component<todo, {test: string}> {

	constructor(props: any) {
		super(props)
		this.state = {
			test: 'abc'
		}
	}

  public render(): JSX.Element {
    return (
			<div>
				<h1>todo</h1>
				<div onClick={() => history.goBack()}>
					goback
				</div>
				<h2/>
				<div onClick={() => location.replace('/')}>
					logOut
				</div>
			</div>
    )
  }
}
