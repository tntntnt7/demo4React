import { TodoResource } from './todo'
import { UserResource } from './user'

export const API = {
	...TodoResource,
	...UserResource,
}
