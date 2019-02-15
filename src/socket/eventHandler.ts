import { Context } from '../context'

export const socketEvents = {
	connect: 'connect',
	reconnect: 'reconnect',
	disconnect: 'disconnect',
	error: 'error',
	connect_error: 'error',
	connect_timeout: 'connect_timeout',
}

export const handler = {
	// 周期事件
	connect: () => {
		Context.sbOnShow('info', 'socket连接成功', 1000)
	},
	reconnect: () => Context.sbOnShow('info', 'socket重连中...', 1000),
	disconnect: () => Context.sbOnShow('warning', 'socket连接已断开'),
	error: () => Context.sbOnShow('error', 'socket连接异常'),
	connect_timeout: () => Context.sbOnShow('error', 'socket连接超时'),
	// 自定义事件
}


