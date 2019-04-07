import * as React from 'react'
import './style.scss'
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { secondsToHMS, formatDate } from '../../common/utils/date';

interface ITodoItem {
	title:			string
	content:		string
	createTime: string
	endTime:		string
	done:				boolean
	onClick:		() => void
}

@observer
export default class TodoItem extends React.Component<ITodoItem, {}> {

	@observable public left: string
	@observable public leftColor: string

	@action
	public componentWillMount(): void {
		const { endTime } = this.props
		const end = new Date(endTime)
		const now = new Date()
		let timediff = (end.getTime() - now.getTime())/1000/3600

		if (timediff < 0) {
			this.left = 'YOU DIED'
			this.leftColor = 'red'
		} else if (timediff < 1) {
			this.left = '放弃吧, 只剩最后一小时'
			this.leftColor = 'gray'
		} else if (timediff < 24) {
			this.left = '加油, 最后24小时'
			this.leftColor = 'origin'
		} else {
			this.left = `还有 ${(timediff).toFixed(0)} 个小时`
			this.leftColor = 'green'
		}
	}

	public render(): JSX.Element {
		const { title, content, createTime, endTime, done, onClick } = this.props
		return (
			<div className='todo-item' onClick={onClick}>
				{ !done && <div className='left-indicator' style={{backgroundColor: this.leftColor}}/>}
				<div className='content'>
					<div className='head'>
						{ `${formatDate(createTime)} / ${formatDate(endTime)}` }
					</div>
					<div className='body'>
						<div className='title'>{title}</div>
						<div>{content}</div>
					</div>
					<div className='footer'>
						<div>{this.left}</div>
					</div>
				</div>
			</div>
		)
	}
}
