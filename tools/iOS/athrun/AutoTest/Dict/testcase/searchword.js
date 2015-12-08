#import "../../../LibJS/athrunImports.js"
#import "../testapi/base_class_dict.js"

/**
 *测试非自动获取释义查词中英
 */
 appTest("SearchWord_ce",function(target,application){
		 
		 delay(2);
		 var target = UIATarget.localTarget();
		 delay(2);
		 Searchword("中英","good");
		 var text=target.frontMostApp().windows()[0].scrollViews()[0].webViews()[0].staticTexts()[0].name();
		 Athrun.assertEquals(text,"adj. 好的；优良的；愉快的；虔诚的");
		 delay(3);
		 Default_homepage();
		  },false)

/**
 *测试非自动获取释义查词中法
 */
 appTest("SearchWord_cf",function(target,application){
		 
		 delay(2);
		 var target = UIATarget.localTarget();
		 delay(2);
		 Searchword("中法","je");
		 var text=target.frontMostApp().mainWindow().tableViews()[1].cells()["je, /"].webViews()[0].staticTexts()[1];
		 Athrun.assertContainText(text,"我","验证是否包含‘我’这个释义");
		 delay(2);
		 Default_homepage();
		  },false)


/**
 *测试非自动获取释义查词中日
 */
 appTest("SearchWord_cj",function(target,application){
		 
		 delay(2);
		 var target = UIATarget.localTarget();
		 delay(2);
		 Searchword("中日","我");
		 var text=target.frontMostApp().mainWindow().tableViews()[1].cells()["我, /"].webViews()[0].staticTexts()[3];
		 target.logElementTree();
		 Athrun.assertContainText(text,"わたくし","验证是否包含‘わたくし’这个释义");
		 delay(2);
		 Default_homepage();
		  },false)


/**
 *测试非自动获取释义查词中韩
 */
 appTest("SearchWord_ck",function(target,application){
		 
		 delay(2);
		 var target = UIATarget.localTarget();
		 delay(2);
		 Searchword("中韩", "저");
		 var text=target.frontMostApp().mainWindow().tableViews()[1].cells()["저, /"].webViews()[0].staticTexts()[2];
		 Athrun.assertContainText(text,"笛子","验证是否包含‘笛子’这个释义");	
		 delay(3);
		 Default_homepage();
		  },false)

/**
 *测试词库对应校验
 */
appTest("SearchWord_lexicon",function(target,application){
 		 var target = UIATarget.localTarget();
		 delay(2);
		 Searchword("中英","good");
		 
		target.logElementTree();
		target.frontMostApp().windows()[0].tableViews()[1].buttons()[0].doTap();
		target.logElementTree();
		target.frontMostApp().mainWindow().buttons()["dict unfold icon normal"].doTap();
		target.logElementTree();
		Specialword(0,"基本释义");
		Specialword(1,"柯林斯英汉双解大辞典");
		Specialword(2,"21世纪大英汉词典");
		Specialword(3,"英英释义");
		Specialword(4,"专业释义");
		Specialword(5,"网络释义");
		Specialword(6,"同根词");
		Specialword(7,"词组短语");
		Specialword(8,"同近义词");
		Specialword(9,"双语例句");
		Specialword(10,"权威例句");
		Specialword(11,"原声例句");
		delay(2);
		target.frontMostApp().windows()[0].doTap({x:284.00, y:52.00});
		delay(2);
		target.frontMostApp().mainWindow().buttons()["取消"].doTap();
		
		
		  },false)


