export interface ITodo {
	id:					string
	title:			string
	content:		string
	createTime: string
	deadline:		string
	done:				number
}

export interface ITodoMake {
	open:							boolean
	date:							Date
	title:						string
	content:					string
	switchDialog:			() => void
	addTodo:					() => void
	onTitleChange: 		(s: string) => void
	onContentChange: 	(s: string) => void
	onDateChange: 		(d: Date) => void
}

export interface ITodoList {
	todoList: ITodo[]
	getTodoList: () => void
	addTodo:		(payload: IPayload) => void
}

export interface IPayload {
	title:		string
	content:	string
	deadline:			Date
}
