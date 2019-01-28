import { observable, runInAction, action } from 'mobx'

/**
 * 全局Store
 */
class Store {
	@observable
	public token: string = null

	@action
	public doSomething = () => {}
}

export default new Store()
