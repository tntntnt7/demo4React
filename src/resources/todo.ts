import fetch from '../common/utils/fetch'

export const TodoResource = {

	getTaskList: async (payload?: string): Promise<any> => {
		const url = payload ? `/todo/${payload}` : '/todo'
		return fetch.get(url)
	},

	addTask: async (payload: any): Promise<any> => {
		return fetch.post('/todo', payload)
	},

	deleteTask: async (payload: string): Promise<any> => {
		return fetch.del(`/todo/${payload}`)
	},

	modifyTask: async (payload : any): Promise<any> => {
		return fetch.put('/todo', payload)
	},
}
