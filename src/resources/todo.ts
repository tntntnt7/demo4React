import fetch from '../common/utils/fetch'


export class TodoResource {

	public getTaskList = async (payload?: string): Promise<any> => {
		const url = payload ? `/todo/${payload}` : '/todo'
		return fetch.get(url)
	}

	public addTask = async (payload: any): Promise<any> => {
		return fetch.post('/todo', payload)
	}

	public deleteTask = async (payload: string): Promise<any> => {
		return fetch.del(`/todo/${payload}`)
	}

	public modifyTask = async (payload : any): Promise<any> => {
		return fetch.put('/todo', payload)
	}
}

export default new TodoResource() as TodoResource
