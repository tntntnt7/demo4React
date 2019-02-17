import { observable, runInAction, action } from 'mobx'

/**
 * 全局Store
 */
class Store {

	constructor() {
		this.user = window.localStorage.user && JSON.parse(window.localStorage.user)
		this.token = window.localStorage.token || null
		this.pageTitle = window.localStorage.pageTitle
	}
	
	///	User
	@observable public token: string = null
	@observable public user: any = null

	@action
	public setUser = (user: any) => {
		this.user = user
		this.token = user.accessToken
		window.localStorage.user = JSON.stringify(user)
		window.localStorage.token = user.accessToken
	}

	@action
	public reset = () => {
		this.token = null
		this.user = null
		window.localStorage.clear()
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

	/// page
	@observable public pageTitle: string = ''

	@action
	public setPageTitle = (title: string) => {
		this.pageTitle = title
		window.localStorage.pageTitle = title
	}
}

export default new Store()
