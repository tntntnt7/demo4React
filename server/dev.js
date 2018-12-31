const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')
const config = require('../webpack.config')

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
	contentBase: path.resolve(__dirname, '../dist'),
	historyApiFallback: true,
	port: 9009,
	publicPath: '/'
})

server.listen(9009, 'localhost', err => {
	if (err) {
		console.log('dev-server error:', err)
	}
})
