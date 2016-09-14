var webpack = require("webpack");

module.exports = {
	entry: ["./js/main.js", "./js/app.js"],
	output: {
		filename: "./build/bundle.js"
	},

	resolve: {
		extensions: ["", ".js"]
	},

	module: {
		loaders: [
		  	{ 
		  		test: /\.js$/,
		  		exclude: "/node_modules/",
		  		loader: "babel", 
		  		query: { 
		  			presets: ["es2015", "react"]
		  		}
		  	}
		]
	}
};