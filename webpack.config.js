const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const extractCss = new ExtractTextPlugin({
	filename: "style.css",
	//disable: process.env.NODE_ENV === "development"
});

module.exports = {
	watch: true,
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	// resolve: {
  //   extensions: ['.html', '.js'/*, '.ts'*/]
  // },

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: extractCss.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader", options: {
								//sourceMap: true
							}
						},
						{
							loader: "postcss-loader",
							options: {
								//sourceMap: true
							}
						},
						{
							loader: "sass-loader", options: {
								//sourceMap: true
							}
						}
					]
				})
			},
			{
				//IMAGE LOADER
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|json)$/i,
				loader:'file-loader'
			},
			{
        test: /\.html$/,
				loader: 'html-loader',
				options: {
					minimize: process.env.NODE_ENV === "production" ? true : false,
					//collapseWhitespace: true
				}
      }
		]
	},
	plugins: [
		//new UglifyJsPlugin(),
		extractCss,
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			cache: true
    })
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8081
	}
};
