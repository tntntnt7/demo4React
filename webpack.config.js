const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: "./src/index.tsx",
	output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, "./dist"),
			publicPath: 'dist'
	},

	devServer: {
		contentBase: ".",
		compress: true,
		progress: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		open: true,
    port: 9000
	},

	devtool: "source-map",

	resolve: {
			extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
			rules: [
					// { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
					{ test: /\.tsx?$/, loader: "ts-loader" },
					{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
			]
	},

	externals: {
			"react": "React",
			"react-dom": "ReactDOM"
	},

	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]

};
