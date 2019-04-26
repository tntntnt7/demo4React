const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require( "clean-webpack-plugin" )

module.exports = {
	
	mode: 'production',
	
	entry: {
		app: './src/index.tsx',
	},
	
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		// publicPath: 'dist'
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

	// devtool: 'source-map',

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, use: 'ts-loader' },
			{ enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
			{ test: /\.scss$/, use: [
				'style-loader', // creates style nodes from JS strings
				'css-loader', 	// translates CSS into CommonJS
				'sass-loader', 	// compiles Sass to CSS, using Node Sass by default
			]}
		]
	},

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},

	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'FLAG',
			filename: './index.html',			// 要生成的html地址，相对于 output.path
			template: './index.html',			// 要生成的模板, 相对于当前目录
			chunks: ['app', 'vendors'],		// entry和splitChunks中定义的key
			favicon: './src/common/assets/images/favicon.ico',
		}),
		/**
		 * If using webpack 4+'s default configuration,
		 * everything under <PROJECT_DIR>/dist/ will be removed.
		 * Use cleanOnceBeforeBuildPatterns to override this behavior.
		 *
		 * During rebuilds, all webpack assets that are not used anymore
		 * will be removed automatically.
		 */
		new CleanWebpackPlugin(),
	],

	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendors: {
					name: 'vendors',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'initial',
					priority: -10,
				},
			}
		}
	}

};
