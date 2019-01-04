import * as React from 'react'
import { observer } from 'mobx-react'
import Todo from './presenter'
import { Store } from './store'

@observer
export class TodoContainer extends React.Component {

	private _store: Store;

	constructor(props: any) {
		super(props)
		this._store = new Store()
	}

	public render(): JSX.Element {
		return (
			<Todo
				taskList={this._store.taskList}
				getTaskList={this._store.getTaskList}
			/>
		)
	}
}
