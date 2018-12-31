const path = require('path')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './build/index.jsx'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],	// import中的路径后缀自动补全
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react'],
					}
				},
				exclude: /node_modules/
			}
		],
	}
}
