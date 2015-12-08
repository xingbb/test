#import "../../../LibJS/athrunImports.js"
#import "../testapi/dict_utils.js"
#import "../testapi/wordBookAPI.js"



//添加一个单词到单词本，并验证单词添加成功
/*appTest("test_addOneWord",function(target,application){
		
		var target = UIATarget.localTarget();
		delay(2);
		
		getWordBookButtonInHomePage().doTap();
		
		delay(1);
		
		
		wordBookOnline("test_for_wordbook@163.com","123456Test");
		Default_homePage_fromWordBook();
		Clear_WordBook();
		
		delay(2);
		Searchword("中英","good");
			
		//添加单词到单词本
		getAddToWordBookButton(2).doTap();
		delay(2);
		
		Default_homePage_fromDictSearch();		
		//验证添加成功
		getWordBookButtonInHomePage().doTap();
		delay(1);
		
		var text = target.frontMostApp().windows()[0].tableViews()[0].visibleCells()[0].name();
		Athrun.assertEquals(text, "good, adj. 好的；优良的；愉快的；虔诚的  n. 好处；善行；慷慨的行为  adv. 好");
		Default_homePage_fromWordBook();
		
})*/


		  
//添加各种语言的单词到单词本，并验证单词添加成功
appTest("addAllKindsOfWord",function(target,application){
		var target = UIATarget.localTarget();
		
		delay(2);
		
		Clear_WordBook();
		delay(1);
		
		var engquerys = new Array("music","c","无聊","a");
		var japquerys = new Array("おれ","家");
		var koquerys = new Array("감사합니다","谢谢");
		// 对于简单的查询词，例如”我“， 系统有bug，查询结果中不会出现单词本添加按钮，改了之后需要添加这类case的检查
		var frquerys = new Array("Monsieur","结果");
		
		var count = 0 ;
		count = addWordToBook("中英",engquerys,count);
		count = addWordToBook("中日",japquerys,count);
		count = addWordToBook("中韩",koquerys,count);
		count = addWordToBook("中法",frquerys,count);
		
})

//单词本页面，显示或者隐藏单词释义  默认单词本第一个单词为1
/*appTest("displayWordResult",function(target,application){
		var target = UIATarget.localTarget();
		delay(1);
		getWordBookButtonInHomePage().doTap();
		
		if(getWordResultDisPlayButton().name()=="显示"){
				getWordResultDisPlayButton().doTap();
				delay(2);
				//验证隐藏后无释义内容
				Athrun.assertEquals(getWordInBook(0).name(), "おれ");
		  		getWordResultDisPlayButton().doTap();
				delay(1)
				Athrun.assertEquals(getWordInBook(0).name(), "おれ, 俺  己  乃公  鯵");
		}else{
				getWordResultDisPlayButton().doTap();
				delay(1)
				Athrun.assertEquals(getWordInBook(0).name(), "おれ, 俺  己  乃公  鯵");
		   		getWordResultDisPlayButton().doTap();
				delay(1);
				//验证隐藏后无释义内容
				Athrun.assertEquals(getWordInBook(0).name(), "おれ");
		  		getWordResultDisPlayButton().doTap();
				delay(1)
		   
		}	
		
		Default_homePage_fromWordBook()
	
})

//单词按照日期排序或者字母排序
appTest("displayWordByOrder",function(target,application){
		var target = UIATarget.localTarget();
		delay(1);
		getWordBookButtonInHomePage().doTap();
		
		getWordOrderButton().doTap();
		delay(2);
		Athrun.assertEquals(getWordInBook(0).name(), "结果, il risultato  Ment  résultat  Resultat");
		getWordOrderButton().doTap();
		delay(1)
		Athrun.assertEquals(getWordInBook(0).name(), "おれ, 俺  己  乃公  鯵");
			
		Default_homePage_fromWordBook()
	
})

//单词本中搜索单词
appTest("searchWordInBook",function(target,application){
		var target = UIATarget.localTarget();
		delay(1);
		getWordBookButtonInHomePage().doTap();
		getWordSearchTextFeild().doTap();
		delay(1);
		getWordSearchTextFeild().setValue("music");
		target.frontMostApp().keyboard().typeString("\n");
		delay(1);
		Athrun.assertEquals(getWordInBook(0).name(), "music, n. 音乐，乐曲");											  
														  
		getWordSearchCancelButton().doTap();
		Athrun.assertEquals(getWordInBook(0).name(), "おれ, 俺  己  乃公  鯵");
		
		target.frontMostApp().keyboard().typeString("\n");			
		
		Default_homePage_fromWordBook()
})

//单词播放
appTest("displayWordPlay",function(target,application){
		var target = UIATarget.localTarget();
		delay(2);
		
		getWordBookButtonInHomePage().doTap();
		getWordPlayButton().doTap();
		
		Athrun.assertNotNull(getWordInPlayPage());
		
		target.frontMostApp().windows()[0].scrollViews()[0].webViews()[0].doTap();
	
		target.frontMostApp().windows()[0].toolbars()[1].buttons()["暂停"].doTap();
		delay(1);
		
		//验证单词单词释义标题
		
		Athrun.assertEquals("单词释义",target.frontMostApp().navigationBar().name());
		
		var textPlay = getWordInPlayPage();
		
		target.frontMostApp().windows()[0].toolbar().buttons()["后一个"].doTap();
		var textNext = getWordInPlayPage();
		
		target.frontMostApp().windows()[0].toolbar().buttons()["前一个"].doTap();
		var textPre = getWordInPlayPage();
		
		//验证前一个，后一个按钮生效
		Athrun.assertEquals(textPlay,textPre);
		Athrun.assertFalse(textNext==textPlay,"点后一个后，单词变化");
		Athrun.assertTrue(textPre==textPlay,"点后一个,再点前一个，页面单词和初始状态一致");

		//验证进入单词详细查询页面
		target.frontMostApp().windows()[0].buttons()["dict enter icon normal"].doTap();
		delay(1);
		Athrun.assertNotNull(target.frontMostApp().windows()[0].scrollViews()[0].webViews()[0].staticTexts()[0].name());
		getCancelButtonInSearchPage().doTap();	
		delay(1);
		Athrun.assertNotNull(getWordInPlayPage());
		
		//验证退回单词本主页面
		target.frontMostApp().navigationBar().buttons()["icon return normal"].doTap();
		Athrun.assertEquals("おれ, 俺  己  乃公  鯵",getWordInBook(0).name());
		delay(1);
		
		Default_homePage_fromWordBook()
	
})

//单词同步
appTest("wordSyn",function(target,application){
		var target = UIATarget.localTarget();
		delay(2);
			
		getWordBookButtonInHomePage().doTap();
		delay(1);
		wordBookOnline("test_for_wordbook@163.com","123456Test");
			
		Athrun.assertEquals("同步完成",target.frontMostApp().windows()[0].staticTexts()[0].name());
		
		delay(2);
				
		Default_homePage_fromWordBook()
	
})

//单词分类
appTest("wordGroup",function(target,application){
		var target = UIATarget.localTarget();
		delay(2);
		
		getWordBookButtonInHomePage().doTap();
		delay(1);
		wordBookOnline("test_for_guojing@163.com","123456Test");

		getWordGroupButton().doTap();
		delay(1)
		getWordGroupByName("中日").doTap();
		Athrun.assertEquals("おれ, 俺  己  乃公  鯵",getWordInBook(0).name());
			
		getWordGroupButton().doTap();
		delay(1)
		getWordGroupByName("中英").doTap();
		delay(1);
		Athrun.assertEquals("1, one",getWordInBook(0).name());
		delay(1);
		getWordGroupButton().doTap();
		delay(1);
		getWordGroupByName("所有单词").doTap();
		
		delay(2);
		wordBookOnline("test_for_wordbook@163.com","123456Test");
		Default_homePage_fromWordBook();
		
	
})*/




