import fetch from '../common/utils/fetch'


export class UserResource {

	public login = async (payload: any): Promise<any> => {
		return fetch.post(`/user/login`, payload)
	}

}

export default new UserResource() as UserResource
