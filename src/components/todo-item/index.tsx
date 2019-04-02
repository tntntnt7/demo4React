import * as React from 'react'
import './style.scss'
import { observer } from 'mobx-react';
import { observable } from 'mobx';

interface ITodoItem {
	title:			string
	content:		string
	createTime: string
	endTime:		string
	onClick:		() => void
}

@observer
export default class TodoItem extends React.Component<ITodoItem, {}> {

	@observable public left: string

	public componentWillMount(): void {
		const { endTime } = this.props
		const end = new Date(endTime)
		const now = new Date()
		console.log(now.getTime() - end.getTime())
	}

	public render(): JSX.Element {
		const { title, content, createTime, endTime, onClick } = this.props
		return (
			<div className='todo-item' onClick={onClick}>
				<div className='text'>
					<div className='title'>{title}</div>
					<div>{content}</div>
				</div>
				<div className='time'>
					<div>{createTime}</div>
					<div>{endTime}</div>
				</div>
				<div className='left'>{this.left}</div>
			</div>
		)
	}
}
