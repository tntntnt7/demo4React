import { observable, runInAction, action } from 'mobx'

/**
 * 全局Store
 */
class Store {
	@observable public token: string = null
	@observable public user: any = null

	@observable public sbOpen: boolean = false
	@observable public sbMessage: string = ''
	@observable public sbDuration: number
	@observable public sbVariant: 'success' | 'warning' | 'error' | 'info'

	@action
	public setUser = (user: any) => {
		this.user = user
		this.token = user.accessToken
	}

	@action
	public sbOnClose = () => {
		this.sbOpen = false
		this.sbMessage = ''
		this.sbDuration = 2000
	}

	@action
	public sbOnShow = (variant: 'success' | 'warning' | 'error' | 'info', message: string, duration: number = 2000) => {
		this.sbOpen = true
		this.sbMessage = message
		this.sbVariant = variant
		this.sbDuration = duration
	}
}

export default new Store()
