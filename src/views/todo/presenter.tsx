import * as React from 'react'
import { observer } from 'mobx-react'
import { Button } from '@material-ui/core'
import { todo } from './interface'
import { history } from '../../common/utils/history'
import './style.scss'
import ActionBar from '../../components/appBar/appBar';

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
				<ActionBar title='todo' logout={() => location.replace('/')}/>
				<h1>todo</h1>
				<div onClick={() => history.goBack()}>
					goback
				</div>
			</div>
    )
  }
}
