This is a demo.

1.此demo 尝试让instrument uiautomation实现C/S 模式的方式运行脚本，mobile端作为Client，PC端作为Server，我们在PC端编写类似录制javascript脚本格式的用例，以Junit单元测试方式运行测试用例。


2.原理：instrumentuiautomation 提供了在脚本中调用外部shell的功能，并且能获取到shell运行的输出。
据此，我们在Mac上启动instrument运行一个脚本，让这个脚本调用shell与远程的PC进行通信获取发送过来的脚本并执行。

3.提供调用shell 的方法如下：host.performTaskWithPathArgumentsTimeout("/Athrun/Test.sh", ["null"], 3);在Test.sh 中通过建立tcp连接与PC端的Server通信，请求需要执行的步骤。运行时，需要先启动单元测试，然后启动instrument uiautomation 运行，向server端请求命令并获取返回的响应执行。

4.问题：host.performTaskWithPathArgumentsTimeout() 方法运行速度有点慢，因为会不停的调用这个shell请求server端命令，性能有些瓶颈。


