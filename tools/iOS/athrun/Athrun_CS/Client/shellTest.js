/**
 * 用例名称: 测试 C/S 模式运行用例
 * 作   者: ziyu
 * 日   期: 2012-04-23
 * 备   注:
 *
 */


Test();

function Test() {

    try {
        target = UIATarget.localTarget();
        app = target.frontMostApp();
        win = app.mainWindow()      
        UIALogger.logStart("The case is running.");
        host = target.host();
        var step = 1;
        var isEnd = false;
        while(!isEnd) {

            var result = host.performTaskWithPathArgumentsTimeout("/Athrun/Test.sh", ["null"], 5);
            var stdout = result.stdout.split("##");
            var type = stdout[0];
            var script = stdout[1];
            var sendToServer = "null";

            switch(type) {
                case "null":
                    break;
                case "arrayType":
                    var arrayGuid = new Array();
                    var len = (new Function("return " + script)()).length;

                    for(var i = 0; i < len; i++) {
                        guid = "GUID_" + step++;
                        new Function(guid + " = "+ script +"[" + i + "]")();
                        arrayGuid.push(guid);
                    }
                    var guids = arrayGuid.join("#");
                    sendToServer = guids
                    break;
                case "stringType":
                case "booleanType":
                case "voidType":
                    sendToServer = new Function("return "+ script)();
                    if(sendToServer == null)
                        sendToServer = "";
                    break;
                case "guidType":
                    guid = "GUID_" + step++;
                    new Function( guid + " = "+ script)();
                    sendToServer = guid;
                    break;
                default:
                    sendToServer = "null";
                    isEnd = true;
            }
            if(sendToServer != "null") {
                host.performTaskWithPathArgumentsTimeout("/Athrun/Test.sh", [sendToServer], 5);
            }
        }
    } catch (e) {
        UIALogger.logFail("The case " + caseName + " was failed.");
    }
}

function newGuid() {
    var guid = "_";
    for(var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "_";
    }
    return guid;
}