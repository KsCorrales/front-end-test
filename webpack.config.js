const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: __dirname + '/',
		filename: 'app.js',
	},

	devServer: {
		port: 8080,
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader }, 
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				],
			},
			{
		        test: /\.vue$/,
		        loader: 'vue-loader',
		        options: {
		          loaders: {
		            'scss': [
		              'vue-style-loader',
		              'css-loader',
		              'sass-loader'
		            ],
		            'sass': [
		              'vue-style-loader',
		              'css-loader',
		              'sass-loader?indentedSyntax'
		            ]
		          }
		        }
		    },
		    {
		        test: /\.js$/,
		        loader: 'babel-loader',
		        exclude: /node_modules/
		    },
		]
	},

	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'app.css'
		}),
	],
}