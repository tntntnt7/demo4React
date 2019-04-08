import * as React from 'react'
import { Fab, Tabs, Tab, AppBar } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import './style.scss'
import { ITodoList, ITodo, IPayload } from './interface'
import { Context } from '../../context'
import TodoItem from '../../components/todo-item'
import { TodoMake } from './todo-make'
@observer
export default class Todo extends React.Component<ITodoList, {}> {

	@observable private tab: number = 0
	@observable private todoMakeShow: boolean = false
	@observable private payload: IPayload = {
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
					</Tabs>
				</AppBar>
				<div className='list'>
					{ todoList.map(cell => 
						cell.done + this.tab !== 1 &&
						(
							<TodoItem
								key={cell.id}
								id={cell.id}
								title={cell.title}
								content={cell.content}
								createTime={cell.createTime}
								deadline={cell.deadline}
								done={Boolean(cell.done)}
								onClick={null}
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

	private addTodo = async () => {
		const { addTodo, getTodoList } = this.props

		await addTodo(this.payload)
		getTodoList()	// 刷新列表

		// 关闭dialog
		this.onClick()
	}
}
