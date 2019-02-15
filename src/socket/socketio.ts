import * as io from 'socket.io-client'
import config from '../common/config'
import { socketEvents, handler } from './eventHandler'

export const socket = io(config.socketURL)

/** 监听事件 */
const _ = (() => {
	for (const key in socketEvents) {
		if (socketEvents.hasOwnProperty(key) && handler.hasOwnProperty(key)) {
			socket.on(key, handler[key])
		}
	}
})()
