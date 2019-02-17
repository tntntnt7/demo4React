import axios, { AxiosInstance } from 'axios'
import config from '../config'
import { Context } from '../../context'

class Fetch {

	private _api: AxiosInstance

	constructor() {
		this._api = axios.create({
			baseURL: config.apiURL
		})
	}

	public get = async (path: string): Promise<any> => {
		try {
			const headers = {}
			headers[config.tokenHeadTag] = Context.token
			const ret = await this._api.get(encodeURI(path), { headers })
			return this._resultHandle(ret)
		} catch (error) {
			return this._errorHandle(error)
		}
	}

	public post = async (path: string, data: any): Promise<any> => {
		try {
			const headers = {}
			headers[config.tokenHeadTag] = Context.token
			const ret = await this._api.post(encodeURI(path), data, { headers })
			return this._resultHandle(ret)
		} catch (error) {
			return this._errorHandle(error)
		}
	}

	public put = async (path: string, data: any): Promise<any> => {
		try {
			const headers = {}
			headers[config.tokenHeadTag] = Context.token
			const ret = await this._api.put(encodeURI(path), data, { headers })
			return this._resultHandle(ret)
		} catch (error) {
			return this._errorHandle(error)
		}
	}

	public del = async (path: string): Promise<any> => {
		try {
			const headers = {}
			headers[config.tokenHeadTag] = Context.token
			const ret = await this._api.delete(encodeURI(path), { headers })
			return this._resultHandle(ret)
		} catch (error) {
			return this._errorHandle(error)
		}
	}

	private _resultHandle = (result: any) => {
		if (result.data) {
			if (result.data.error) {
				Context.sbOnShow('error', `${result.data.error.message}`)
				// token失效处理
				if ([-1000, -1001, -1002].indexOf(result.data.error.code) != -1) {
					Context.reset()
				}
			}
			return result.data
		}
		console.warn('error result: ', result)
		return result
	}

	private _errorHandle = (error: any) => {
		Context.sbOnShow('error', error)
		return error
	}
}

const fetch = new Fetch()

export default fetch
