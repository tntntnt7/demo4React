import { observable, runInAction, action } from 'mobx'
import { IData } from './interface'
import { API } from '../../resources'

export class Store {
	@observable
	public taskList: IData[] = []

	@action
	public getTaskList = async () => {
		const ret = await API.getTaskList()
		runInAction(() => {
			// this.taskList = ret
		})
	}

	@action
	public addTask = async () => {
		// const ret = await TodoResource.addTask
		runInAction(() => {})
	}

	@action
	public deleteTask = async () => {
		// const ret = await TodoResource.deleteTask
		runInAction(() => {})
	}

	@action
	public modifyTask = async () => {
		// const ret = await TodoResource.modifyTask
		runInAction(() => {})
	}
}
