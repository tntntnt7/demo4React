import { configDev } from './config.dev'
import { configProd } from './config.prod'
import { map } from './map'

/**
 * 设置环境变量
 * export NODE_ENV=****
 */
const env = process.env.NODE_ENV || 'development'
const preConfig = env === 'development' ? configDev : configProd
let config = Object.assign({}, preConfig, map)

export default config
