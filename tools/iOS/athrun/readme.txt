在Athurn目录结构的基础上，添加了3个目录，分别是：AutoTest、ShellSuites、CI
AutoTest用于存放自动化用例，和产品独用的封装方法
ShellSuites用于存放常用的自动化运行shell脚本
CI用于存放各个项目均可公用的JS脚本

其他为Athrun原有目录结构：
AppTest.sh 用于自动化case的shell脚本执行
LibJS/ athrun自己封装的方法集合，导入imports.js即可
Doc/ athrun介绍文档
log/ 生成log存放路径
LogConvert 一个app用于转换log格式
script.sh 帮你生成测试用例的东西
Tests/ 存放自己用的自动化case地方

