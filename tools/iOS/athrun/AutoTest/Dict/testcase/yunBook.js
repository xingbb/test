#import "../../../LibJS/athrunImports.js"
#import "../testapi/base_class_dict.js"
/**
 *添加云图书，并下载文件，最后删除单词
 */
var target = UIATarget.localTarget();

appTest("addYunBook",function(target,application){
	target.frontMostApp().mainWindow().buttons()["adClose"].tap();
	target.frontMostApp().mainWindow().buttons()[6].tap();
	target.frontMostApp().mainWindow().scrollViews()[0].tapWithOptions({tapOffset:{x:0.83, y:0.63}});
	target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["分类:, 课时数, 49, 英语口语速成班, 口语-其他"].scrollToVisible();
	target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["分类:, 单词数, 2205, 六级高频词, 词汇-六级词汇"].tap();
	target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["六级高频词, 单词数：, 大小：, 2205, 1.14MB"].buttons()["material down normal"].tap();
	target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["六级高频词, 单词数：, 大小：, 2205, 1.14MB"].buttons()["material go normal"].tap();
	target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()[0].tap();
	target.frontMostApp().navigationBar().buttons()["icon return normal"].tap();
	target.frontMostApp().navigationBar().buttons()["icon return normal"].tap();
	text=target.frontMostApp().mainWindow().scrollViews()[0].staticTexts()["六级高频词"];
	Athrun.assertContainText(text,"六级高频词","六级高频词是否已经添加到云图书列表中");
	target.frontMostApp().mainWindow().scrollViews()[0].tapWithOptions({tapOffset:{x:0.84, y:0.73}, duration:1.2});
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[10].tap();
	target.frontMostApp().navigationBar().buttons()["完成"].tap();
	target.frontMostApp().navigationBar().buttons()["material icon book normal"].tap();
	// yunbook sign enter download page
	target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["分类:, 单词数, 2205, 六级高频词, 词汇-六级词汇"].scrollToVisible();
	target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["分类:, 单词数, 2205, 六级高频词, 词汇-六级词汇"].tap();
	target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["六级高频词, 单词数：, 大小：, 2205, 1.14MB"].buttons()["material down normal"].tap();
	target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["六级高频词, 单词数：, 大小：, 2205, 1.14MB"].buttons()["material go normal"].tap();
	target.frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()[0].tap();
	target.frontMostApp().navigationBar().buttons()["icon return normal"].tap();
	target.frontMostApp().navigationBar().buttons()["icon return normal"].tap();
	target.frontMostApp().mainWindow().scrollViews()[0].tapWithOptions({tapOffset:{x:0.83, y:0.73}, duration:1.1});
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()[10].tap();
	target.frontMostApp().navigationBar().buttons()["完成"].tap();
	text=target.frontMostApp().mainWindow().scrollViews()[0].staticTexts()["六级高频词"];
	Athrun.assertContainText(text,"六级高频词","六级高频词是否已经添加到云图书列表中");
		
},false)
