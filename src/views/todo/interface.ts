export interface IData {
	task: string
}
export interface todo {
	taskList: IData[]
	getTaskList: () => void
}