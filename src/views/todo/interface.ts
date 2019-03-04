export interface ITodo {
	id: number
	cols: number
	path: string
	date: string
	title: string
	content: string
}
export interface ITodoList {
	todoList: ITodo[]
	getTodoList: () => void
}
