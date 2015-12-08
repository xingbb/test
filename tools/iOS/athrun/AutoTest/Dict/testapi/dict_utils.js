/* *
 	在主动查词页面获取添加单词本按钮
 	参数 index:   单词本button 的索引号，索引号会随着查询结果不同而不同，
 					查询词有美式发音和英式发音，索引号为2
					只有一个发音，索引号为1 
 					没有发音，索引号为0
*/
function getAddToWordBookButton(index){
		
		return 	target.frontMostApp().windows()[0].tableViews()[1].visibleCells()[0].buttons()[index];
}

/* *
 	在首页获取搜索框
*/
function getSearchButtonInHomePage(){
		return target.frontMostApp().windows()[0].scrollViews()[0].buttons()["点此搜索词库与百科"];
}


/* *
 	在主动查词页面获取查词取消按钮
*/
function getCancelButtonInSearchPage(){
		return target.frontMostApp().mainWindow().buttons()["取消"];	
}

/* *
 	在主页面获取单词本按钮  
 			****如果单词本已登陆，index为6 ， 否则为7******
*/
function getWordBookButtonInHomePage(){
		return target.frontMostApp().windows()[0].buttons()[7];
}

/* *
 	在单词本页面获取单词本编辑按钮
*/
function getWordEditButton(){
		return target.frontMostApp().navigationBar().buttons()["material icon edit normal"];
}

/* *
 	在单词本页面获取单词本搜索区域
*/
function getWordSearchTextFeild(){
		return target.frontMostApp().windows()[0].tableViews()[0].textFields()[0];
}

/* *
 	在单词本页面获取单词本排序按钮
*/

function getWordOrderButton(){
		return target.frontMostApp().toolbar().buttons()["排序"];
}

/* *
 	在单词本页面获取单词本播放按钮
*/

function getWordPlayButton(){
		return target.frontMostApp().toolbar().buttons()["播放"];
}


/* *
 	在单词本页面获取单词释义显示隐藏按钮
 */
function getWordResultDisPlayButton(){
		return target.frontMostApp().windows()[0].toolbars()[0].buttons()[2];
}


/* *
 	在单词本页面获取第index单词
 	参数index：第N个单词,  从0开始
*/
function getWordInBook(index){
		return target.frontMostApp().windows()[0].tableViews()[0].cells()[index];
}



/* *
 	在单词本页面获取所有的单词
*/
function getWordsInBook(){
		return target.frontMostApp().windows()[0].tableViews()[0].cells();
}

/* *
 	在单词本页面获取搜索单词本取消按钮
*/
function getWordSearchCancelButton(){
		return target.frontMostApp().windows()[0].tableViews()[0].buttons()["dict input clear normal"];	
}


/* *
 	从单词页面返回主界面
*/
function Default_homePage_fromWordBook(){
		//返回主界面
		target.frontMostApp().windows()[0].buttons()[2].doTap();
		delay(1);
}

/* *
 	在单词本播放页面，点暂停播放后，获取页面的单词
*/
function getWordInPlayPage(){
		return target.frontMostApp().windows()[0].staticTexts()[1].name();
}

/* *
 	在单词本页面点同步按钮后，获取通行证用户名输入框
*/
function getTextFieldOfUserName(){
		return target.frontMostApp().windows()[0].scrollViews()[0].textFields()[0];
}

/* *
 	在单词本页面点同步按钮后，获取通行证密码输入框
*/
function getTextFieldOfUserPass(index){
		return target.frontMostApp().windows()[0].scrollViews()[0].secureTextFields()[0]
}

/* *
 	在单词本页面获取同步按钮
*/
function getWordSynButton(){
		return target.frontMostApp().navigationBar().buttons()["home refresh icon normal"];
}



/* *
 	在单词本页面获取分类按钮
*/
function getWordGroupButton(){
		return target.frontMostApp().navigationBar().buttons()[1];
}



/* *
 	在单词本分类选择页面选择分类
 	参数：name   为分类标题
*/
function getWordGroupByName(name){
		return target.frontMostApp().windows()[0].tableViews()[0].cells()[name];
}





