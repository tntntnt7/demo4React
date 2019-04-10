import * as React from 'react'
import { Fab, Tabs, Tab, AppBar } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { ITodoList, ITodo, IAddTodoPayload } from './interface'
import { Context } from '../../context'
import { TodoMake } from './todo-make'
import { renderTodoItemAction } from '../../components/todo-item-action'
import TodoItem from '../../components/todo-item'
import './style.scss'
import config from '../../common/config';
@observer
export default class Todo extends React.Component<ITodoList, {}> {

	@observable private tab: number = 0
	@observable private todoMakeShow: boolean = false
	@observable private todoItemShow: boolean = false
	@observable private todoItem: ITodo

	@observable private payload: IAddTodoPayload = {
		title: '',
		content: '',
		deadline: new Date(),
	}

	public componentWillMount() {
		Context.token && this.props.getTodoList()
	}

  public render(): JSX.Element {
		const { todoList } = this.props

    return (
			<div className='todo'>
				<AppBar position='static' color='inherit'>
					<Tabs value={this.tab} onChange={this.handleChange}>
						<Tab label='Flags' />
						<Tab label='Done' />
						<Tab label='Failed' />
					</Tabs>
				</AppBar>
				<div className='list'>
					{ todoList.map(cell => this.filter(cell, this.tab) &&
						(
							<TodoItem
								key={cell.id}
								id={cell.id}
								title={cell.title}
								content={cell.content}
								createTime={cell.createTime}
								deadline={cell.deadline}
								done={cell.done}
								onClick={this.onItemClick}
							/>
						)
					) }
				</div>
				{
					this.tab === 0 && 
					<Fab className='float-botton' onClick={this.onClick}>
						<Add/>
					</Fab>
				}
				<TodoMake
					open={this.todoMakeShow}
					date={this.payload.deadline}
					title={this.payload.title}
					content={this.payload.content}
					addTodo={this.addTodo}
					switchDialog={this.onClick}
					onTitleChange={this.onTitleChange}
					onContentChange={this.onContentChange}
					onDateChange={this.onDateChange}
				/>
				{ 
					renderTodoItemAction({
						title: this.todoItem && this.todoItem.title,
						open: this.todoItemShow,
						action: this.todoItemAction,
					}) 
				}
			</div>
    )
	}

	@action
	private handleChange = (event, value) => {
		this.tab = value
	}

	@action
	private onClick = () => {
		this.todoMakeShow = !this.todoMakeShow
	}

	@action
	private onTitleChange = (title: string) => {
		this.payload.title = title
	}

	@action
	private onContentChange = (content: string) => {
		this.payload.content = content
	}

	@action
	private onDateChange = (date: Date) => {
		this.payload.deadline = date
	}

	@action
	private onItemClick = (id: string) => {
		const { todoList } = this.props

		const click = todoList.find(cell => cell.id === id) as ITodo
		if (click.done != 0) {
			return
		}

		this.todoItemShow = true		
		this.todoItem = click
	}

	@action
	private todoItemAction = async (type: string) => {
		const { modifyTodo } = this.props
		switch (type) {
			case 'cancel':
				this.todoItemShow = false
				break
			case 'giveup':
				this.todoItem.done = config.todoState.giveup
				await modifyTodo(this.todoItem)
				this.todoItemShow = false
				break
			case 'done':
				this.todoItem.done = config.todoState.done
				await modifyTodo(this.todoItem)
				this.todoItemShow = false
				break
		}
	}

	private filter = (cell, tab) => {
		const { ongoing, done, giveup } = config.todoState
		const isPass = new Date() > new Date(cell.deadline)
		switch (tab) {
			case 0:
				return cell.done == ongoing && !isPass
			case 1:
				return cell.done == done
			case 2:
				return cell.done == giveup
		}
		
		return false
	}

	private addTodo = async () => {
		const { addTodo, getTodoList } = this.props

		await addTodo(this.payload)
		getTodoList()	// 刷新列表

		// 关闭dialog
		this.onClick()
	}
}
