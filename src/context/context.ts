import { observable, runInAction, action } from 'mobx'

/**
 * 全局Store
 */
export class Store {
	@observable
	public taskList: any = null

	@action
	public doSomething = () => {}
}
