// 压缩原理
// 压缩代码分为三个步骤

// 1将code转换成AST
// 2将AST进行优化，生成一个更小的AST
// 3将新生成的AST再转化成code


// 首先我们先安装uglifyJS。npm isntall uglify-js。然后在根目录新建一个文件demo.js，在里面写测试代码。然后在命令行运行 uglifyjs demo.js --mangle-props keep_quoted -c -m 进行压缩。（这里使用的uglify-js的版本是3.14.3）

var a = 1+1
let b = a+1
// 得到 var a=2;let b=a+1;