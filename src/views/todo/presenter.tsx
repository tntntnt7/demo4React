import * as React from 'react'
import { observer } from 'mobx-react'
import { Button } from '@material-ui/core'
import { todo } from './interface'
import { history } from '../../common/utils/history'
import './style.scss'

@observer
export default class Todo extends React.Component<todo, {test: string}> {

	constructor(props: any) {
		super(props)
		this.state = {
			test: 'abc'
		}

		this.props.getTaskList()
	}

  public render(): JSX.Element {
    return (
			<div className='content'>
				<h1>todo</h1>
				<div onClick={() => history.goBack()}>
					goback
				</div>
				<h2/>
				<Button variant='contained' color='primary' onClick={() => location.replace('/')}>
					logout
				</Button>
			</div>
    )
  }
}
