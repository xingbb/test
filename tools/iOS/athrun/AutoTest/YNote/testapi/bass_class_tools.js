#import "../../../LibJS/athrunImports.js"
//根据是否是第一次打开，点击跳过用户协议和新版本引导
function checkUserAgreement(){
    
    var UserAgreement = target.frontMostApp().alert().defaultButton();
    //Athrun.assertIsValid(UserAgreement,"验证用户协议是否存在");
    if(UserAgreement.checkIsValid()){
        UserAgreement.doTap();
    }
    
    var intorduction = target.frontMostApp().mainWindow().scrollViews()[0];
    //Athrun.assertIsValid(intorduction,"验证新版用户引导是否存在");
    while(intorduction.checkIsValid()){
        Athrun.scrollLeft();
    }
}

/******************************************** 登录方式 *****************************************************/

//登陆界面输入用户名密码登陆
function Login(name,password){
	
    //var navigationBarTitle = target.frontMostApp().navigationBar().staticTexts()[1].name();
    //Athrun.assertEquals(navigationBarTitle,"登录","验证登陆界面的title");
    var usernameField = target.frontMostApp().mainWindow().scrollViews()[0].textFields()[0];
    usernameField.setValue("");
    usernameField.doTap();
    usernameField.setValue(name);
    UIALogger.logMessage("account:"+name);
    target.frontMostApp().mainWindow().scrollViews()[0].tableViews()["空列表"].cells()[0].doTap();
    
    var userPassword = target.frontMostApp().mainWindow().scrollViews()[0].secureTextFields()[0];
    userPassword.setValue("");
    userPassword.doTap();
    userPassword.setValue(password);
    
    target.frontMostApp().mainWindow().scrollViews()[0].buttons()[1].doTap();
}

//QQ微博登陆
function QQBlogLogin(name,password){
	win.scrollViews()[0].buttons()["tTencentWeiboLoginButton"]. doTap();
	delay(8);
	var account=win.scrollViews()[0].webViews()[0].textFields()[0];
	var pwd=win.scrollViews()[0].webViews()[0].secureTextFields()[0];
	account.doTap();
	Athrun.typeString(name);
	target.frontMostApp().windows()[1].toolbar().buttons()["完成"]. doTap();
	pwd.doTap();
	Athrun.typeString(password);
	target.frontMostApp().windows()[1].toolbar().buttons()["完成"]. doTap();
	target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].buttons()["授 权"]. doTap();
}
//新浪微博登陆
function SinaLogin(name,password){
	win.scrollViews()[0].buttons()["tSinaLoginButton"]. doTap();
	delay(8);
	var account=win.scrollViews()[0].webViews()[0].textFields()[0];
	var pwd=win.scrollViews()[0].webViews()[0].secureTextFields()[0];
	account.doTap();
	Athrun.typeString(name);
	target.frontMostApp().windows()[1].toolbar().buttons()["完成"]. doTap();
	pwd.doTap();
	Athrun.typeString(password);
	target.frontMostApp().windows()[1].toolbar().buttons()["完成"]. doTap();
	target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["登录"]. doTap();
}

//QQ登陆
function QQLogin(name,password){
	win.scrollViews()[0].buttons()["tQQLoginButton"].tap();
	delay(8);
	var account=win.scrollViews()[0].webViews()[0].textFields()[0];
	var pwd=win.scrollViews()[0].webViews()[0].secureTextFields()[0];
	account.doTap();
	Athrun.typeString(name);
	target.frontMostApp().windows()[1].toolbar().buttons()["完成"]. doTap();
	pwd.doTap();
	Athrun.typeString(password);
	target.frontMostApp().windows()[1].toolbar().buttons()["完成"]. doTap();
	target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].buttons()[0]. doTap();
	
}


/*** 建立各种功能的笔记，每种功能建1条 ***/
function addNotes(tool,toolpernote){
	//"record","handwrite","drawing","pic","todo","picwithcorrect"
	//var tool=["record","handwrite"];
	for(var i=0;i<tool.length;i++){
		app.tabBar().buttons()["新建笔记"].doTap();
		win.buttons()["newNoteText"].doTap();
		addTitle(tool[i]+"Note");
		switch(tool[i]){
            case "record":
                addMultiRecord(toolpernote,5);
                break;
            case "handwrite":
                addMultiHandWrite(toolpernote);
                break;
            case "drawing":
                addMultiDrawing(toolpernote);
                break;
            case "pic":
                addMultiPic(toolpernote,1);
                break;
            case "todo":
                addMultiTodo(toolpernote,["aa"]);
                break;
            case "picwithcorrect":
                addMultiPicWithCorrect(toolpernote);
                break;
            default:
                addText("ynote");
        }
		app.navigationBar().buttons()["保存"].doTap();
	}
	
}

/*** 对addNotes的结果进行检查 ***/
function addNotesCheck(tool){
	win.tableViews()[0].cells()[0].doTap();
	delay(3);
	for(var i=tool.length-1;i>=0;i--)
	{
		var title = win.staticTexts()[1];
		Athrun.assertEquals(title.name(),tool[i]+"Note","验证笔记标题是否正确");
		app.navigationBar().buttons()["nextNote"].doTap();
		delay(2);
	}
}
/******************************* 循环添加tools *************************************************/

//add multiple records to note
function addMultiRecord(count,length){
	for(var i=0;i<count;i++){
		win.buttons()["recordToolbar"]. doTap();
		addRecord(length);
	}
}

//add multiple handwrite to note
function addMultiHandWrite(count){
	for(var i=0;i<count;i++){
		win.buttons()["handwriteToolbar"]. doTap();
		addHandWrite(count);
	}
}

//add multiple drawing to note
function addMultiDrawing(count){
	for(var i=0;i<count;i++){
		win.buttons()["handDrawToolbar"]. doTap();
		addDrawing(count);
	}
}

//add multiple todo to note
function addMultiTodo(count,todolist){
	for(var i=0;i<count;i++){
		win.buttons()["todoToolbar"]. doTap();
		addTodo(todolist);
		delay(0.5);
	}
}

//add multiple pic to note
function addMultiPic(count,piccount){
	for(var i=0;i<count;i++){
		win.buttons()["albumToolbar"]. doTap();
		win.tableViews()[0].cells()["从相簿选择"]. doTap();
		addPic(piccount);
		delay(parseInt(piccount*2));
	}
}

//add multiple pic with correct to note
function addMultiPicWithCorrect(count){
	for(var i=0;i<count;i++){
		win.buttons()["albumToolbar"]. doTap();
		win.tableViews()[0].cells()["从相簿选择"]. doTap();
		addPicWithCorrect();
	}
}


/******************************************** 添加tools *************************************************/

//add title to note
function addTitle(title){
	delay(1);
	var titleDefault = win.scrollViews()[0].textFields()[0];
	titleDefault.doTap();
	Athrun.typeString(title);
	win.buttons()[8]. doTap();
	delay(1);
}

//add text to note
function addText(text){
	delay(1);
	var webview = win.scrollViews()[0].webViews()[0];
	webview.doTap();
	delay(2);
	typeWebViewString(text,webview);
	delay(1);
}

//add record to note
function addRecord(length){
	delay(length);
	win.buttons()["recordStopNew"]. doTap();
}

//add todo to note
//todolist is a string Array
function addTodo(todolist){
	win.scrollViews()[0].webViews()[0].textFields()[0]. doTap();
	Athrun.typeString(todolist[0]);
	delay(1);
	for(var i=1;i<todolist.length;i++){
		win.scrollViews()[0].webViews()[0].links()["完成"]. doTap();
		win.scrollViews()[0].webViews()[0].links()["添加新待办事项"]. doTap();
		delay(1);
		Athrun.typeString(todolist[i]);
	}
}

//add pic to note
function addPic(piccount){
	var cells=parseInt(piccount/4);
	var rem=piccount%4;
	delay(1);
	win.tableViews()[0].cells()[0] . doTap();
	delay(1);
	for(var i=0;i<cells;i++){
		win.tableViews()[0].cells()[i].scrollToVisible();
		win.tableViews()[0].cells()[i].tapWithOptions({tapOffset:{x:0.11, y:0.59}});
		win.tableViews()[0].cells()[i].tapWithOptions({tapOffset:{x:0.38, y:0.62}});
		win.tableViews()[0].cells()[i].tapWithOptions({tapOffset:{x:0.65, y:0.62}});
		win.tableViews()[0].cells()[i].tapWithOptions({tapOffset:{x:0.92, y:0.62}});
	}
	for(var j=rem;j>0;j--){
		switch(j){
			case 1:
				win.tableViews()[0].cells()[cells].tapWithOptions({tapOffset:{x:0.11, y:0.59}});
				break;
			case 2:
				win.tableViews()[0].cells()[cells].tapWithOptions({tapOffset:{x:0.38, y:0.59}});
				break;
			case 3:
				win.tableViews()[0].cells()[cells].tapWithOptions({tapOffset:{x:0.65, y:0.59}});
				break;
		}
	}
	target.frontMostApp().toolbar().buttons()[1]. doTap();
}

//add pic with jiupian to note
function addPicWithCorrect(){
	delay(1);
	win.tableViews()[0].cells()[0]. doTap();
	delay(1);
	win.tableViews()[0].cells()[0].tapWithOptions({tapOffset:{x:0.12, y:0.66}});
	delay(1);
	app.toolbar().buttons()["图像纠偏"]. doTap();
	target.dragFromToForDuration({
                                 x : 255,
                                 y : 185
                                 }, {
                                 x : 214,
                                 y : 186
                                 }, 0.5);
	delay(1);
	target.dragFromToForDuration({
                                 x : 252,
                                 y : 299
                                 }, {
                                 x : 208,
                                 y : 293
                                 }, 0.5);
	delay(1);
	app.toolbar().buttons()["纠偏"]. doTap();
	delay(3);
	app.toolbar().buttons()["confirmTake"]. doTap();	
}

//add handwrite to note
function addHandWrite(){
	if(win.images()["handWriteNoticeBG.png"].checkIsValid()){
		win.images()["handWriteNoticeBG.png"].buttons()["beginHandWriteButton"]. doTap();
	}
	delay(2);
	Handwrite.triangle();
	delay(2);
	app.navigationBar().buttons()["保存"]. doTap();
	delay(2);
}

//add drawing to note
function addDrawing(){
	delay(2);
	Handwrite.triangle();
	delay(2);
	app.navigationBar().buttons()["保存"]. doTap();
}