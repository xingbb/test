

var target = UIATarget.localTarget();
//var path = target.frontMostApp().mainWindow().scrollViews()[0].buttons();
//target.frontMostApp().mainWindow().buttons()["dict input ce normal"].tap();
//target.logElementTree();
//var path = "target.frontMostApp().mainWindow().scrollViews()";
//var kpath = "buttons()";
//if(path == null){
	//UIALogger.logMessage(path);
//var a = path + "[1|." + kpath + "[2]" + ".name()";
//UIALogger.logMessage("1"+a);
//var path2 = findBya("点此搜索词库与百科1",path,kpath);
//path2.tap();
/*while ((path[i].name() != "点此搜索词库与百科1") && (path[i].name() != null) ){
	
	i++;
	UIALogger.logMessage("1" + path[i].name());
	if(path[i].name() == null){
		UIALogger.logMessage("not found");
		break;
	}
}*/
target.frontMostApp().mainWindow().scrollViews()[0].buttons()[2].tap();
target.frontMostApp().windows()[0].buttons()[0].tap();
var path = "target.frontMostApp().mainWindow().tableViews()";
var kpath = "visibleCells()"
findBya("中法1",path,kpath).tap();

		target.frontMostApp().mainWindow().buttons()["取消"].tap();

/*function findByName(name,path,kpath){
    var i = 0;
    var j = 2;
	var pa = path + "[" + i + "]." + kpath + "[" + j + "]" + ".name()";
	
	UIALogger.logMessage("not found "+ pa);
	var kpa = path + "[" + i + "]";
	eval(path);
	eval(pa);
	UIALogger.logMessage("not found "+ kpa);
    if(path[i].checkIsValid()){
        while(pa != name){
            j++;
            if(pa == null){
                i++;
            }
        }
    }else{
        UIALogger.logMessage("not found "+name);
        return null;
    }
    return pa;
}*/
function findBya(name,path,kpath){
	var i = 0;
    var j = 0;
	var pa = path + "[" + i + "]." + kpath + "[" + j + "]";
	//var kpa = path + "[" + i + "]";
	//var obj1 = eval(kpa);
	var obj2 = eval(pa);
	while((obj2.name() != null) && (obj2.name() != name) && (obj2. checkIsValid())){
		j++;
		pa = path + "[" + i + "]." + kpath + "[" + j + "]";
		obj2 = eval(pa);
		//UIALogger.logMessage("while "+ obj2.name());
		if (obj2.name() == null){
			i++;
			j=0;
			pa = path + "[" + i + "]." + kpath + "[" + j + "]";
			obj2 = eval(pa);
			//UIALogger.logMessage("if "+ obj2.name());	
		}
	}
	if (obj2.checkIsValid() && (obj2.name() == name)){
		return obj2;
	}else{
		UIALogger.logMessage("not found "+ name);
	}
}

