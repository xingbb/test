/*  AppProgresskill(appName): kill app 进程的方法，只需指定appName即可
    cleanDB(appName,path): 删除app下目录数据或者缓存的方法，需指定appName和app下删除内容的路径（非完整路径即可
    注意中文的app需要把bash的编码格式调整成可显示中文进程
    Created by xingbb
*/

function killAppProgress(appName){
    var dataCleanPath = "../ShellSuites/DataCleanManager.sh"
    var result = UIATarget.localTarget().host().performTaskWithPathArgumentsTimeout(dataCleanPath,[appName,"ps"],60);
    return result.stdout;
}

function cleanDB(appName,path){
    var dataCleanPath = "../ShellSuites/cleanDB.sh"
    var result = UIATarget.localTarget().host().performTaskWithPathArgumentsTimeout(dataCleanPath,[appName,path],60);
    return result.stdout;
}
