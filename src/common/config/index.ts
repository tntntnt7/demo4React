import { configDev } from './config.dev'
import { configProd } from './config.prod'
import { map } from './map'

/**
 * 设置环境变量
 * export NODE_ENV=****
 */
const env = process.env.NODE_ENV || 'dev'
let config: any = {...env === 'dev' ? configDev : configProd}

config = {
	...config,
	...map,
}

export default config
