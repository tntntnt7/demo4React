const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: './src/index.tsx',
	output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, './dist'),
			publicPath: 'dist'
	},

	devServer: {
		contentBase: '.',
		compress: true,
		progress: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		open: true,
		host: '0.0.0.0',
		port: 9000
	},

	devtool: 'source-map',

	resolve: {
			extensions: ['.ts', '.tsx', '.js', '.json']
	},

	module: {
			rules: [
					// { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
					{ test: /\.tsx?$/, loader: 'ts-loader' },
					{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
					{ test: /\.css$/, loader: 'style!css' }
			]
	},

	externals: {
			'react': 'React',
			'react-dom': 'ReactDOM'
	},

	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]

};
