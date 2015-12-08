

var target = UIATarget.localTarget();

UIATarget.localTarget().delay(10);
//target.frontMostApp().mainWindow().scrollViews()[0].buttons()["点此搜索词库与百科"].tap();
//target.frontMostApp().mainWindow().buttons()["取消"].tap();
//UIATarget.localTarget().delay(10);
var test1 = target.frontMostApp().mainWindow().scrollViews()[0].buttons()["点此搜索词库与百科"];
var test = target.frontMostApp().mainWindow().buttons()["取消"];
var array = [];
for (var i = 0; i<10;i++){
target.frontMostApp().mainWindow().scrollViews()[0].buttons()["点此搜索词库与百科"].tap();
UIALogger.logMessage("计时开始");
var start=(new Date()).getTime();
while(! test.isVisible()&& test1.isVisible()){}
var optime=(new Date()).getTime()-start;
UIALogger.logMessage("计时结束");
	array.push(optime);
	UIALogger.logMessage("time :" + array + "ms");
	
	
	target.frontMostApp().mainWindow().buttons()["取消"].tap();
	UIATarget.localTarget().delay(2);
	}
var t = 0;
for (var n=1;n<array.length;n++){
	t = t + array[n];
	avg = t / (array.length -1 );
}
UIALogger.logMessage("avg is :" + avg +  "ms" );
UIALogger.logMessage("frist time is :" + array[0] +  "ms" );



//get time str
function getTimeStr(){
	var date=new Date();
	var time=date.getFullYear().toString()+(date.getMonth()+1).toString()+date.getDate().toString()+"_"+date.getHours().toString()+date.getMinutes().toString()+date.getSeconds().toString();
	return time;
}

