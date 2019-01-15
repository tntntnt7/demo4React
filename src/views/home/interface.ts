export interface IData {
	task: string
}
export interface home {
	taskList: IData[]
	getTaskList: () => void
}
