import * as React from 'react'
import { Fab, Tabs, Tab, AppBar, GridList, GridListTile, List } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import './style.scss'
import { ITodoList, ITodo } from './interface'
import { Context } from '../../context'
import TodoItem from '../../components/todo-item';
@observer
export default class Todo extends React.Component<ITodoList, {}> {

	@observable private tab: number = 0

	public componentWillMount() {
		Context.token && this.props.getTodoList()
	}

	@action
	public handleChange = (event, value) => {
		this.tab = value
	}

	public onClick = () => {}

  public render(): JSX.Element {
		const { todoList } = this.props

    return (
			<div className='todo'>
				<AppBar position='static' color='inherit'>
					<Tabs value={this.tab} onChange={this.handleChange}>
						<Tab label='Flags' />
						<Tab label='Done' />
					</Tabs>
				</AppBar>
				<div className='list'>
					{ todoList.map(cell => 
						cell.done + this.tab !== 1 &&
						(
							<TodoItem
								key={cell.id}
								title={cell.title}
								content={cell.content}
								createTime={cell.createTime}
								endTime={cell.endTime}
								onClick={this.onClick}
							/>
						)
					) }
				</div>
			</div>
    )
	}
}
