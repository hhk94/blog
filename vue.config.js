const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
	
	outputDir: 'dist',

	publicPath:"./",
	devServer: {
	  port: 8080, // 端口号
	  host: "localhost",
	  https: false, // https:{type:Boolean}
	  // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
	  proxy: {
		'/':{
			target: 'https://api.cswendu.com/cswd/public/index.php/api/',
			changeOrigin: true,
			pathRewrite:{
				'^/':'/'
			},
			  ws: false
		},
		  
	  }
	},

	configureWebpack: {
	  resolve: {
		alias: {
		  '@': resolve('src'),
		  'styles': resolve('src/assets/styles'),
		}
	  }
	},
	pluginOptions: {
		'style-resources-loader': {
		  preProcessor: 'scss',
		  patterns: [
			  path.resolve(__dirname, './src/assets/styles/base.less')
		  ]
		}
	}
}
