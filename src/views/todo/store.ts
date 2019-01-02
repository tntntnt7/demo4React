import { observable, runInAction } from 'mobx'
import fetch from '../../common/utils/fetch';

export default class Store {
	@observable
	public taskList: any[] = []

	public getTaskList = async () => {
		const ret = await fetch.get('path of tasks');
		runInAction(() => {
			this.taskList = ret
		})
	}
}
