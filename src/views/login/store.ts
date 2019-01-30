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
			ret.error && Context.sbOnShow('error', ret.error.message)
			
			if (ret.data) {
				Context.setUser(ret.data)
				Context.sbOnShow('success', `欢迎回来,${this.userName}`)
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
			ret.error && Context.sbOnShow('error', '注册失败,请重试')
	
			if (ret.data) {
				Context.setUser(ret.data)
				Context.sbOnShow('success', '欢迎加入')
			}
		})
	}
}
