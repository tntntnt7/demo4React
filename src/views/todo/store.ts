import { observable, runInAction, action } from 'mobx'
import { ITodo } from './interface'
import { API } from '../../resources'
import { Context } from '../../context'

export class Store {
	@observable public todoList: ITodo[] = []

	@action
	public getTodoList = async () => {        
		const ret = await API.getTaskList({
			userId: Context.user.id,
			where: null,
		})
		if (ret.data) {
			runInAction(() => {
				console.log('getTodoList', ret.data)
				this.todoList = ret.data
			})
		}
	}

	@action
	public addTodo = async () => {
		// const ret = await TodoResource.addTask
		runInAction(() => {})
	}

	@action
	public deleteTodo = async () => {
		// const ret = await TodoResource.deleteTask
		runInAction(() => {})
	}

	@action
	public modifyTodo = async () => {
		// const ret = await TodoResource.modifyTask
		runInAction(() => {})
	}
}
