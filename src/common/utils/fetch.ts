import axios from 'axios'
import config from '../config';

class Fetch {

	private _api: any = null;

	constructor() {
		this._api = axios.create()
		this._api.default.baseURL = config.apiURL
		this._api.default.timeout = config.apiTimeout
	}

	public get = async (path: string): Promise<any> => {
		try {
			const headers = {}
			// 设置headers
			const ret = await this._api.get(encodeURI(path), { headers })
			return this._resultHandle(ret)
		} catch (error) {
			return this._errorHandle(error)
		}
	}

	public post = async (path: string, data: any):Promise<any> => {
		try {
			const headers = {}
			// 设置headers
			const ret = await this._api.post(encodeURI(path), data, { headers })
			return this._resultHandle(ret)
		} catch (error) {
			return this._errorHandle(error)
		}
	}

	public put = async (path: string, data: any):Promise<any> => {
		try {
			const headers = {}
			// 设置headers
			const ret = await this._api.put(encodeURI(path), data, { headers })
			return this._resultHandle(ret)
		} catch (error) {
			return this._errorHandle(error)
		}
	}

	public del = async (path: string, data: any):Promise<any> => {
		try {
			const headers = {}
			// 设置headers
			const ret = await this._api.delete(encodeURI(path), data, { headers })
			return this._resultHandle(ret)
		} catch (error) {
			return this._errorHandle(error)
		}
	}

	private _resultHandle = (result: any) => {
		return result
	}

	private _errorHandle = (error: any) => {
		console.log(error)
		return error
	}
}

const fetch = new Fetch()

export default fetch
