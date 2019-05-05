import { observable, runInAction, action } from 'mobx'

/**
 * 全局Store
 */
class Store {

	constructor() {
		this.user = window.sessionStorage.user && JSON.parse(window.sessionStorage.user)
		this.token = window.sessionStorage.token || null
		this.pageTitle = window.sessionStorage.pageTitle
	}
	
	///	User
	@observable public token: string = null
	@observable public user: any = null

	@action
	public setUser = (user: any) => {
		this.user = user
		this.token = user.accessToken
		window.sessionStorage.user = JSON.stringify(user)
		window.sessionStorage.token = user.accessToken
	}

	@action
	public reset = () => {
		this.token = null
		this.user = null
		window.sessionStorage.clear()
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
		window.sessionStorage.pageTitle = title
	}
}

export default new Store()
