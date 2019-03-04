import fetch from '../common/utils/fetch'

export const TodoResource = {

	getTaskList: async (payload: any): Promise<any> => {
		const { userId, where } = payload
		const url = `/todo?userId=${userId}&where=${where}`
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
