import { observable, runInAction, action } from 'mobx'
import { API } from '../../resources'
import { Context } from '../../context'

export class Store {
	@observable public userName: string = ''
	@observable public password: string = ''
	
	@action
	public onUserNameChange = (text: string) => {
		this.userName = text
	}
	
	@action
	public onPasswordChange = (text: string) => {
		this.password = text
	}

	public login = async () => {
		const ret = await API.login({
			userName: this.userName,
			password: this.password,
		})
		console.log(ret)
		runInAction(() => {
			if (ret.data) {
				Context.setUser(ret.data)
				Context.sbOnShow('success', `欢迎回来, ${this.userName}`)
			}
		})
	}

	public register = async () => {
		const ret = await API.register({
			userName: this.userName,
			password: this.password,
		})
		console.log(ret)
		runInAction(() => {
			if (ret.data) {
				Context.setUser(ret.data)
				Context.sbOnShow('success', '欢迎加入')
			}
		})
	}

	public checkNameExist = async (): Promise<boolean> => {
		const ret = await API.checkNameExist(this.userName)
		return Boolean(ret.data)
	}
}
