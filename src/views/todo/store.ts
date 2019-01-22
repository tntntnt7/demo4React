import { observable, runInAction, action } from 'mobx'
import { IData } from './interface'
import TodoResource from '../../resources/todo'

export class Store {
	@observable
	public taskList: IData[] = []

	@action
	public getTaskList = async () => {
		console.log('getTaskList')
		const ret = await TodoResource.getTaskList()
		console.log('ret => ', ret)
		runInAction(() => {
			// this.taskList = ret
		})
	}

	@action
	public addTask = async () => {
		const ret = await TodoResource.addTask
		runInAction(() => {})
	}

	@action
	public deleteTask = async () => {
		const ret = await TodoResource.deleteTask
		runInAction(() => {})
	}

	@action
	public modifyTask = async () => {
		const ret = await TodoResource.modifyTask
		runInAction(() => {})
	}
}
