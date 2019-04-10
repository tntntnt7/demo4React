import { observable, runInAction, action } from 'mobx'
import { ITodo, IAddTodoPayload } from './interface'
import { API } from '../../resources'
import { Context } from '../../context'
import context from '../../context/context'
import { moveByHours } from '../../common/utils/date'

export class Store {
	@observable public todoList: ITodo[] = []

	@action
	public getTodoList = async () => {        
		const ret = await API.getTaskList({
			userId: Context.user.id,
			where: null,
		})
		if (ret.data) {
			runInAction(() => {
				this.todoList = ret.data.map(cell => {
					// 数据库日期没问题,前端获取到的日期少了八小时
					cell.createTime = moveByHours(cell.createTime)
					cell.updateTime = moveByHours(cell.updateTime)
					cell.deadline = moveByHours(cell.deadline)

					return cell
				})
			})
		}
	}

	@action
	public addTodo = async (payload: IAddTodoPayload) => {
		const ret = await API.addTask({
			...payload,
			userId: context.user.id
		})
		console.log(ret)
	}

	@action
	public modifyTodo = async (payload: ITodo) => {
		const ret = await API.modifyTask(payload)
		console.log('ret', ret)
		runInAction(() => {})
	}
}
