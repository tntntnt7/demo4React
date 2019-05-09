const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	
	mode: 'production',
	
	entry: {
		app: './src/index.tsx',
	},
	
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, use: 'ts-loader' },
			{ test: /\.scss$/, 
				include: [path.resolve(__dirname, 'src')],
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		]
	},

	// externals: {
	// 	'react': 'React',
	// 	'react-dom': 'ReactDOM',
	// 	'react-router-dom': ['Route', 'HashRouter', 'Switch'],
	// },

	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'FLAG',
			filename: './index.html',									// 要生成的html地址，相对于 output.path
			template: './index.html',									// 要生成的模板, 相对于当前目录
			chunks: [																	// entry和splitChunks中定义的key
				'app', 'vendors', 'react', 'socketio', 'axios', 'mobx',
			],			
			favicon: './src/common/assets/images/favicon.ico',
			minify: { 																// https://github.com/kangax/html-minifier
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
			}
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
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: "[id].css"
		})
	],

	optimization: {
		splitChunks: {
			chunks: 'initial',
			cacheGroups: {
				socketio: {
					name: 'socketio',
					test: /[\/]node_modules[\/]socket.io/,
					chunks: 'initial',
					priority: -8,
					enforce: true,
				},
				axios: {
					name: 'axios',
					test: /[\/]node_modules[\/]axios/,
					chunks: 'initial',
					priority: -6,
					enforce: true,
				},
				mobx: {
					name: 'mobx',
					test: /[\/]node_modules[\/]mobx/,
					chunks: 'initial',
					priority: -5,
					enforce: true,
				},
				react: {
					name: 'react',
					test: /[\/]node_modules[\/]react/,
					chunks: 'initial',
					priority: -7,
					enforce: true,
				},
				vendors: {
					name: 'vendors',
					test: /[\/]node_modules[\/]/,
					chunks: 'initial',
					priority: -10,
					enforce: true,
				},
			}
		},
		minimizer: [
			new UglifyJsPlugin(),	// js压缩, 配置minimizer插件时会覆盖默认的minimizer: true选项(会默认压缩js), 所以这里得重新配置Uglify插件
			new OptimizeCssAssetsWebpackPlugin(), // mode: 'production'时, 压缩生成的css
		]
	}

};
