#import "../../../LibJS/athrunImports.js"
#import "../testapi/base_class_dict.js"
/**
 *测试获取词库名字校验
 */
 appTest("SearchWord_auto",function(target,application){
		 
		 delay(2);
		 var target = UIATarget.localTarget();
		 target.frontMostApp().mainWindow().buttons()[9].doTap();
		 delay(1);
		 target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["自动获取网络释义"].buttons()["dict set off btn"].doTap();
		 delay(1);
		 target.frontMostApp().mainWindow().buttons()[1].doTap();
		 delay(1);
		 Searchword_n("good");
		 target.frontMostApp().keyboard().typeString("\n");
		 delay(1);
		 var text=target.frontMostApp().windows()[0].tableViews()[0].cells()[0].webViews()[0].staticTexts()[3].name();
		 Athrun.assertEquals(text,"比较级");
		 delay(1);
		 target.frontMostApp().mainWindow().buttons()["取消"].doTap();
		 delay(1);
		 target.frontMostApp().mainWindow().buttons()[9].doTap();
		 delay(1);
		 target.frontMostApp().mainWindow().tableViews()["空列表"].cells()["自动获取网络释义"].buttons()["dict set on btn"].doTap();
		 target.frontMostApp().mainWindow().buttons()[1].doTap();
		 delay(1);
		 
		  },false)

/**
 *测试进入百科
 */
 appTest("SearchWord_bk",function(target,application){
		 
		 delay(2);
		 var target = UIATarget.localTarget();
		 Searchword_n("good");
		 target.frontMostApp().windows()[0].buttons()[0].doTap();
		 target.frontMostApp().mainWindow().tableViews()[0].visibleCells()["中英"].doTap();
		 target.frontMostApp().mainWindow().tableViews()[3].cells()[1].doTap();
		 delay(2)
		 var text=target.frontMostApp().mainWindow().navigationBar().staticTexts()[0];
		 Athrun.assertContainText(text,"百科:good","验证是否包含“百科:good”");
		 target.frontMostApp().navigationBar().buttons()["icon return normal"].doTap();
		 delay(1);
		target.frontMostApp().mainWindow().buttons()["取消"].doTap();
		
		 
		 delay(3);
		  },false)


/**
 *测试历史记录验证
 */
 appTest("SearchWord_history",function(target,application){
		 
		 delay(2);
		 var target = UIATarget.localTarget();
		 target.frontMostApp().windows()[0].scrollViews()[0].buttons()["点此搜索词库与百科"].doTap();
		 delay(1);
		 target.frontMostApp().windows()[0].buttons()[0].doTap();
		 target.frontMostApp().mainWindow().tableViews()[0].visibleCells()["中英"].doTap();
		 delay(1);		 
		 target.frontMostApp().mainWindow().tableViews()[2].cells()[0].doTap();
		 
		 var text=target.frontMostApp().windows()[0].scrollViews()[0].webViews()[0].staticTexts()[0].name();
		 Athrun.assertEquals(text,"adj. 好的；优良的；愉快的；虔诚的");
		 target.frontMostApp().mainWindow().buttons()["取消"].doTap();
		
		 
		 delay(3);
		  },false)



