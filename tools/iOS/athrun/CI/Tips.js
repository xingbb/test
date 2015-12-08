/*当控件的index属性可能变化，而name或者value 属性不会变化时使用这个方法，会返回当前需要的控件的index路径。path为不确定节点路径，kpath为子节点路径，不带中括号，且必须值为string而非对象，简单点就是path、kpath赋值需要用引号。
*/
function findByName(name,path,kpath){
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
function findContainName(name,path,kpath){
	var i = 0;
    var j = 0;
	var pa = path + "[" + i + "]." + kpath + "[" + j + "]";
	//var kpa = path + "[" + i + "]";
	//var obj1 = eval(kpa);
	var obj2 = eval(pa);
	while((obj2.name() != null) && (obj2.name().search(name) != -1) && (obj2. checkIsValid())){
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
	if (obj2.checkIsValid() && (obj2.name().search(name) != -1)){
		return obj2;
	}else{
		UIALogger.logMessage("not found "+ name);
	}
}

function value(value,path,kpath){
	var i = 0;
    var j = 0;
	var pa = path + "[" + i + "]." + kpath + "[" + j + "]";
	//var kpa = path + "[" + i + "]";
	//var obj1 = eval(kpa);
	var obj2 = eval(pa);
	while((obj2.name() != null) && (obj2.value() != value) && (obj2. checkIsValid())){
		j++;
		pa = path + "[" + i + "]." + kpath + "[" + j + "]";
		obj2 = eval(pa);
		//UIALogger.logMessage("while "+ obj2.value());
		if (obj2.name() == null){
			i++;
			j=0;
			pa = path + "[" + i + "]." + kpath + "[" + j + "]";
			obj2 = eval(pa);
			//UIALogger.logMessage("if "+ obj2.value());
		}
	}
	if (obj2.checkIsValid() && (obj2.value() == value)){
		return obj2;
	}else{
		UIALogger.logMessage("not found "+ value);
	}
}
//获取当前时间戳
function getTimeStr(){
	var date=new Date();
	var time=date.getFullYear().toString()+(date.getMonth()+1).toString()+date.getDate().toString()+"_"+date.getHours().toString()+date.getMinutes().toString()+date.getSeconds().toString();
	return time;
}
