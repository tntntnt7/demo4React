import * as React from 'react'
import './style.scss'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { formatDate } from '../../common/utils/date'
import config from '../../common/config';

interface ITodoItem {
	id:					string
	title:			string
	content:		string
	createTime: string
	deadline:		string
	done:				number
	onClick:		(id: string) => void
}

@observer
export default class TodoItem extends React.Component<ITodoItem, {}> {

	@observable public left: string
	@observable public leftColor: string

	@action
	public componentWillMount(): void {
		const { deadline, done } = this.props
		const { ongoing, done: finish, giveup } = config.todoState

		const end = new Date(deadline)
		const now = new Date()
		let timediff = (end.getTime() - now.getTime())/1000/3600

		switch (done) {
			case ongoing:
				if (timediff < 7) {
					this.left = '最后7小时'
					this.leftColor = 'gray'
				} else if (timediff < 24) {
					this.left = '加油, 最后24小时'
					this.leftColor = 'orange'
				} else {
					this.left = `还有 ${(timediff).toFixed(0)} 个小时`
					this.leftColor = '#2096F3'
				}
				break
			case finish:
				this.left = ''
				this.leftColor = 'green'
				break
			case giveup:
				this.left = 'YOU DIED'
				this.leftColor = 'red'
				break
		}
	}

	public render(): JSX.Element {
		const { title, content, createTime, deadline, done, id, onClick } = this.props
		return (
			<div className='todo-item' onClick={onClick.bind(this, id)}>
				<div className='left-indicator' style={{backgroundColor: this.leftColor}}/>
				<div className='content'>
					<div className='head'>
						<div className='id'>{`No:${id}`}</div>
						{ `${formatDate(createTime, 'yyyy-MM-dd')} / ${formatDate(deadline, 'yyyy-MM-dd')}` }
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
