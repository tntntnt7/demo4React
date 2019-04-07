import { observable, runInAction, action } from 'mobx'
import { ITodo, IPayload } from './interface'
import { API } from '../../resources'
import { Context } from '../../context'
import context from '../../context/context';

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
	public addTodo = async (payload: IPayload) => {
		const ret = await API.addTask({
			...payload,
			userId: context.user.id
		})
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
