#import "../../../LibJS/athrunImports.js"

//从首页到语种选择到查词
function Searchword(language,word){
	
		target.frontMostApp().windows()[0].scrollViews()[0].buttons()["点此搜索词库与百科"].doTap();		 
		delay(2);
		 target.frontMostApp().windows()[0].buttons()[0].doTap();
		 delay(2);
		 target.frontMostApp().mainWindow().tableViews()[0].visibleCells()[language].doTap();
		 delay(2);
		 target.frontMostApp().mainWindow().textFields()[0].doTap();
		 target.frontMostApp().mainWindow().textFields()[0].setValue(word+"\n");
		 target.frontMostApp().keyboard().typeString("\n");
}

//查词后恢复到首页初始状态
function Default_homepage(){
		target.frontMostApp().windows()[0].buttons()[0].doTap();
		delay(1);
		target.frontMostApp().mainWindow().tableViews()[0].visibleCells()["中英"].doTap();
		target.frontMostApp().mainWindow().buttons()["取消"].doTap();
}

//普通版查词··
function Searchword_n(word){
	
		target.frontMostApp().windows()[0].scrollViews()[0].buttons()["点此搜索词库与百科"].doTap();
		 delay(2);
		 target.frontMostApp().mainWindow().textFields()[0].doTap();
		 target.frontMostApp().mainWindow().textFields()[0].setValue(word+"\n");
		}

//验证特定字段（查词模块中使用）
function Specialword(num,word){
	
		Athrun.assertEquals(target.frontMostApp().mainWindow().tableViews()[0].cells()[num].name(),word);}


