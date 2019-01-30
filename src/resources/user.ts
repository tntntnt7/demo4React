import fetch from '../common/utils/fetch'

export const UserResource = {

	login: async (payload: any): Promise<any> => {
		return fetch.post(`/user/login`, payload)
	},

	register: async (payload: any): Promise<any> => {
		return fetch.post(`/user`, payload)
	}
}
