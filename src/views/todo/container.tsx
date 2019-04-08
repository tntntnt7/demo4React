import * as React from 'react'
import { observer } from 'mobx-react'
import Todo from './presenter'
import { Store } from './store'

@observer
export class TodoContainer extends React.Component {

	private store: Store

	constructor(props: any) {
		super(props)
		this.store = new Store()
	}

	public render(): JSX.Element {
		return (
			<Todo
				todoList={this.store.todoList}
				getTodoList={this.store.getTodoList}
				addTodo={this.store.addTodo}
			/>
		)
	}
}
