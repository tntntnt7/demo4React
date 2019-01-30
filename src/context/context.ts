import { observable, runInAction, action } from 'mobx'

/**
 * 全局Store
 */
class Store {
	///	User
	@observable public token: string = null
	@observable public user: any = null

	@action
	public setUser = (user: any) => {
		this.user = user
		this.token = user.accessToken
	}

	///	SnackBar
	@observable public sbOpen: boolean = false
	@observable public sbMessage: string = ''
	@observable public sbDuration: number
	@observable public sbVariant: 'success' | 'warning' | 'error' | 'info'

	@action
	public sbOnClose = () => {
		this.sbOpen = false
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
