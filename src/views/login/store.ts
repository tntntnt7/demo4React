import { observable, runInAction, action } from 'mobx'

export class Store {
	@observable public userName: string = null
	@observable public password: string = null
	
	@action
	public onUserNameChange = (text: string) => {
		this.userName = text
	}
	
	@action
	public onPasswordChange = (text: string) => {
		this.password = text
	}

	public login = () => {

	}
	
}
