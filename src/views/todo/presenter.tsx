import * as React from 'react'
import { todo } from './interface'
import './style.scss'

export default class Todo extends React.Component<todo, {}> {

	public componentWillMount() {
		this.props.getTaskList()
	}

  public render(): JSX.Element {
    return (
			<div className='todoContent'>
				234274
			</div>
    )
	}
}
